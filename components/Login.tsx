import { useAppDispatch } from "@/hooks/useAppDispatch ";
import { loginUser, verifyOtpUser } from "@/store/authThunks";
import { RootState } from "@/store/store";
import { setUser } from "@/store/typeUserSlice";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { setLocalError } from "@/store/authSlice";

type LoginProps = {
  toggleMode: () => void;
};

export default function Login({ toggleMode }: LoginProps) {
  const transition: {} = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

  const dispatch = useAppDispatch();
  const typeUser = useSelector((state: RootState) => state.type.typeUser);
  const { loading, token } = useSelector(
    (state: RootState) => state.auth
  );
  console.log(token);

  const [phone, setPhone] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [step, setStep] = useState<"login" | "verify">("login");

  useEffect(() => {
    const savedTypeUser = localStorage.getItem("typeUser") as
      | "individual"
      | "legal";
    if (savedTypeUser) dispatch(setUser(savedTypeUser));
  }, [dispatch]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload =
      typeUser === "individual"
        ? {
            user_type: typeUser,
            phone_number: phone,
          }
        : {
            user_type: typeUser,
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
    } else if (verifyOtpUser.rejected.match(result)) {
      setLocalError(result.payload || "کد تایید اشتباه است");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateY: -100 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={transition}
      className="w-full md:w-4/5 lg:w-3/5 mx-4 md:mx-0 shadow-lg shadow-zinc-900/50 flex flex-col justify-center items-center gap-5 md:gap-10 p-5 bg-white rounded-2xl"
      id="login"
    >
      <div className="w-full text-center">
        <h3 className="text-4xl font-bold">ورود کاربر</h3>
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <div className="flex gap-4 w-full justify-center">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="userType"
                  checked={typeUser === "individual"}
                  onChange={() => dispatch(setUser("individual"))}
                />
                حقیقی
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="userType"
                  checked={typeUser === "legal"}
                  onChange={() => dispatch(setUser("legal"))}
                />
                حقوقی
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-zinc-700 cursor-pointer text-white py-2 rounded-lg font-semibold hover:bg-zinc-900 transition-colors"
            >
              {loading ? "در حال ثبت نام..." : "ثبت نام"}
            </button>
          </form>
        ) : (
          <form
            className="flex flex-col justify-center items-center gap-5"
            onSubmit={handleVerify}
          >
            <input
              type="number"
              placeholder="شماره تلفن"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="number"
              placeholder="کد تایید"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="submit"
              className="w-full bg-zinc-700 cursor-pointer text-white py-2 rounded-lg font-semibold hover:bg-zinc-900 transition-colors"
            >
              تایید کد
            </button>
          </form>
        )}
      </div>
      <div className="w-full text-center">
        <p className="text-gray-600">
          حساب کاربری ندارد؟{" "}
          <span
            onClick={toggleMode}
            className="text-zinc-900 font-bold cursor-pointer transition-colors hover:text-zinc-600 hover:underline"
          >
            ثبت نام
          </span>
        </p>
      </div>
    </motion.div>
  );
}
