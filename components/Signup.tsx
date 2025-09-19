import { setUser } from "@/store/typeUserSlice";
import { RootState } from "@/store/store";
import * as motion from "motion/react-client";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loginUser, registerUser, verifyOtpUser } from "@/store/authThunks";
import { useAppDispatch } from "@/hooks/useAppDispatch ";
import { setLocalError } from "@/store/authSlice";
import { Transition } from "motion";

type SignupProps = {
  toggleMode: () => void;
};

export default function Signup({ toggleMode }: SignupProps) {
  const transition: Transition = {
    duration: 0.5,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  const dispatch = useAppDispatch();
  const typeUser = useSelector((state: RootState) => state.type.typeUser);
  const loading = useSelector((state: RootState) => state.auth.loading);

  const [phone, setPhone] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [step, setStep] = useState<"register" | "verify">("register");
  const [timer, setTimer] = useState(20);
  const [resendAllowed, setResendAllowed] = useState(false);

  useEffect(() => {
    const savedTypeUser = localStorage.getItem("typeUser") as
      | "individual"
      | "legal";
    if (savedTypeUser) dispatch(setUser(savedTypeUser));

    if (step === "verify") {
      setTimer(20);
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

    const payload =
      typeUser === "individual"
        ? {
            user_type: typeUser,
            phone_number: phone,
            first_name: firstName,
            last_name: lastName,
          }
        : {
            user_type: typeUser,
            phone_number: phone,
            company_name: companyName,
          };
    const result = await dispatch(registerUser(payload));

    if (registerUser.fulfilled.match(result)) {
      setStep("verify");
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      phone_number: phone,
      code: otp,
    };
    console.log(payload);

    const result = await dispatch(verifyOtpUser(payload));

    if (verifyOtpUser.fulfilled.match(result)) {
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1000);
    } else if (verifyOtpUser.rejected.match(result)) {
      setLocalError(result.payload || "کد تایید اشتباه است");
    }
  };

  const handleResend = async () => {
    if (!resendAllowed) return;

    const payload =
      typeUser === "individual"
        ? { user_type: typeUser, phone_number: phone }
        : { user_type: typeUser, phone_number: phone };

    await dispatch(loginUser(payload)); 
    setTimer(20);
    setResendAllowed(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateY: -100 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={transition}
      className="w-full md:w-4/5 lg:w-3/5 mx-4 md:mx-0 shadow-lg shadow-zinc-900/50 flex flex-col justify-center items-center gap-5 md:gap-10 p-5 bg-white dark:bg-zinc-900 rounded-2xl"
      id="signup"
    >
      <div className="w-full text-center">
        <h3 className="text-4xl font-bold">
          {step === "register" ? "ثبت نام کاربر" : "کد را وارد کنید"}
        </h3>
      </div>
      <div className="w-full">
        {step === "register" ? (
          <form
            className="flex flex-col justify-center items-center gap-5"
            onSubmit={handleSubmit}
          >
            <input
              type="number"
              placeholder="شماره تلفن"
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-0 dark:bg-zinc-700 dark:focus:ring-amber-500"
            />
            {typeUser === "individual" ? (
              <>
                <input
                  type="text"
                  placeholder="نام"
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-0 dark:bg-zinc-700 dark:focus:ring-amber-500"
                />
                <input
                  type="text"
                  placeholder="نام خانوادگی"
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-0 dark:bg-zinc-700 dark:focus:ring-amber-500"
                />
              </>
            ) : (
              <input
                type="text"
                placeholder="نام شرکت"
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-0 dark:bg-zinc-700 dark:focus:ring-amber-500"
              />
            )}
            <div className="flex gap-4 w-full justify-center">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="userType"
                  checked={typeUser === "individual"}
                  onChange={() => dispatch(setUser("individual"))}
                  className="appearance-none w-3 h-3 rounded-full border-0 bg-zinc-500 dark:bg-amber-400 checked:bg-zinc-900 dark:checked:bg-amber-600 checked:scale-150 transition-all duration-300"
                />
                حقیقی
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="userType"
                  checked={typeUser === "legal"}
                  onChange={() => dispatch(setUser("legal"))}
                  className="appearance-none w-3 h-3 rounded-full border-0 bg-zinc-500 dark:bg-amber-400 checked:bg-zinc-900 dark:checked:bg-amber-600 checked:scale-150 transition-all duration-300"
                />
                حقوقی
              </label>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-zinc-700 cursor-pointer text-white py-2 rounded-lg font-semibold hover:bg-zinc-900 transition-colors dark:bg-amber-500 dark:border-2 dark:border-amber-500 dark:hover:border-amber-500 dark:hover:bg-transparent"
            >
              {loading ? "در حال ثبت نام..." : "ثبت نام"}
            </button>
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
              className="w-full disabled:text-gray-400 cursor-not-allowed px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-0 dark:bg-zinc-700 dark:focus:ring-amber-500"
            />
            <input
              type="number"
              placeholder="کد تایید"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-0 dark:bg-zinc-700 dark:focus:ring-amber-500"
            />
            <button
              type="submit"
              className="w-full bg-zinc-700 cursor-pointer text-white py-2 rounded-lg font-semibold hover:bg-zinc-900 transition-colors dark:bg-amber-500 dark:border-2 dark:border-amber-500 dark:hover:border-amber-500 dark:hover:bg-transparent"
            >
              تایید کد
            </button>
            <div className="w-full flex flex-col items-center gap-2">
              <button
                type="button"
                onClick={handleResend}
                disabled={!resendAllowed}
                className="w-full bg-zinc-700 text-white py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-900 transition-colors dark:bg-amber-500 dark:hover:bg-amber-600"
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
          قبلا ثبت نام کرده اید؟{" "}
          <span
            onClick={toggleMode}
            className="text-zinc-900 dark:text-amber-400 font-bold cursor-pointer transition-colors hover:text-zinc-600 dark:hover:text-amber-600 hover:underline"
          >
            ورورد
          </span>
        </p>
      </div>
    </motion.div>
  );
}
