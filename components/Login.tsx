import { loginUser, verifyOtpUser } from "@/store/authThunks";
import { RootState } from "@/store/store";
import { setUser } from "@/store/typeUserSlice";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Transition } from "motion";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import LoadingButton from "./LoadingButton";

type LoginProps = {
  toggleMode: () => void;
};

export default function Login({ toggleMode }: LoginProps) {
  const transition: Transition = {
    duration: 0.5,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  const dispatch = useAppDispatch();
  const { loading } = useSelector((state: RootState) => state.auth);

  const [phone, setPhone] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [step, setStep] = useState<"login" | "verify">("login");
  const [timer, setTimer] = useState(60);
  const [resendAllowed, setResendAllowed] = useState(false);

  useEffect(() => {
    const savedTypeUser = localStorage.getItem("typeUser") as
      | "individual"
      | "legal";
    if (savedTypeUser) dispatch(setUser(savedTypeUser));

    if (step === "verify") {
      setTimer(60);
      setResendAllowed(false);
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setResendAllowed(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [dispatch, step]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      phone_number: phone,
    };

    const result = await dispatch(loginUser(payload));

    if (loginUser.fulfilled.match(result)) {
      setStep("verify");
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      phone_number: phone,
      code: otp,
    };

    const result = await dispatch(verifyOtpUser(payload));

    if (verifyOtpUser.fulfilled.match(result)) {
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1000);
    }
  };

  const handleResend = async () => {
    if (!resendAllowed) return;

    const payload = { phone_number: phone };

    await dispatch(loginUser(payload));
    setTimer(60);
    setResendAllowed(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateY: -100 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={transition}
      className="w-full md:w-4/5 lg:w-3/5 mx-4 md:mx-0 shadow-lg shadow-zinc-900/50 flex flex-col justify-center items-center gap-5 md:gap-10 p-5 bg-white dark:bg-zinc-900 rounded-2xl"
      id="login"
    >
      <div className="w-full text-center">
        <h3 className="text-4xl font-bold">
          {step === "login" ? "ورود کاربر" : "کد را وارد کنید"}
        </h3>
      </div>
      <div className="w-full">
        {step === "login" ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center gap-5"
          >
            <input
              type="number"
              placeholder="شماره تلفن"
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 dark:border-0 dark:bg-zinc-700"
            />
            <LoadingButton
              type="submit"
              loading={loading}
              loadingText="در حال ورود..."
              className="w-full cursor-pointer text-white py-2 rounded-lg font-semibold transition-colors bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600"
            >
              ورود
            </LoadingButton>
          </form>
        ) : (
          <motion.form
            initial={{ opacity: 0, translateY: -100 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={transition}
            className="flex flex-col justify-center items-center gap-5"
            onSubmit={handleVerify}
          >
            <input
              type="number"
              placeholder="شماره تلفن"
              disabled={true}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full disabled:text-gray-400 cursor-not-allowed px-4 py-2 border rounded-lg dark:border-0 dark:bg-zinc-700"
            />
            <input
              type="number"
              placeholder="کد تایید"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 dark:border-0 dark:bg-zinc-700"
            />
            <LoadingButton
              type="submit"
              loading={loading}
              loadingText="در حال تایید..."
              className="w-full cursor-pointer text-white py-2 rounded-lg font-semibold transition-colors bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600"
            >
              تایید کد
            </LoadingButton>
            <div className="w-full flex flex-col items-center gap-2">
              <button
                type="button"
                onClick={handleResend}
                disabled={!resendAllowed}
                className="w-full text-white py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600"
              >
                ارسال مجدد کد
              </button>
              {!resendAllowed && (
                <p>می‌توانید دوباره در {timer} ثانیه ارسال کنید</p>
              )}
            </div>
          </motion.form>
        )}
      </div>
      <div className="w-full text-center">
        <p className="text-gray-600 dark:text-gray-200">
          حساب کاربری ندارد؟{" "}
          <span
            onClick={toggleMode}
            className="text-sky-400 font-bold cursor-pointer transition-colors hover:text-sky-600 hover:underline"
          >
            ثبت نام
          </span>
        </p>
      </div>
    </motion.div>
  );
}
