"use client";
import Link from "next/link";
import ZeedeoSticker from "../Components/ZeedeoSticker";
import LoginForm from "./LoginForm";

const SignInPage = () => {
  const userName = localStorage.getItem("user.name");
  return (
    <>
      <ZeedeoSticker className="absolute mx-auto lg:mx-[unset] lg:left-9 top-0 lg:top-[unset] lg:bottom-9" />
      <div className="w-full bg-white max-w-[500px] rounded-2xl p-6 pt-7 sm:p-9 sm:pt-10">
        <h4 className="text-3xl sm:text-36 text-[#191919] font-bold mb-2">
          {userName ? `Welcome back, ${userName} 👋` : "Login"}
        </h4>
        <div className="flex items-center gap-1 mb-4">
          <p className="text-16 text-[#5E5E5E]">Not have an account?</p>
          <Link
            href={"/auth/sign-up"}
            className="text-16 text-[#0A66C2] font-semibold"
          >
            Register Here
          </Link>
        </div>
        <LoginForm />
      </div>
    </>
  );
};

export default SignInPage;
