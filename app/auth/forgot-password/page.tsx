"use client";
import { useState } from "react";
import ResetPasswordForm from "./ResetPasswordForm";
import SentIcon from "@/assets/icons/sent.svg";
import Link from "next/link";
import { resetPassword } from "@/utils/auth/reset";

const ForgotPasswordPage = () => {
  const [isSent, setIsSent] = useState("");

  const handleResend = () => {
    resetPassword({ email: isSent });
  };
  return (
    <div className="w-full bg-white max-w-[500px] rounded-2xl p-6 pt-7 sm:p-9 sm:pt-10">
      {isSent ? (
        <div className="flex flex-col items-center">
          <SentIcon className="w-[100px] h-[100px] mb-1" />
          <h6 className="text-36 mb-4">Email Sent</h6>
          <div className="flex items-center gap-1 text-16">
            <p>Didn’t receive any email?</p>
            <button className="text-[#D91883]" onClick={handleResend}>
              Resend password
            </button>
          </div>
          <p className="text-16">We have sent a link password to your email </p>
        </div>
      ) : (
        <>
          <h4 className="text-3xl sm:text-36 text-[#191919] font-bold mb-4">
            Forgot your password?
          </h4>
          <ResetPasswordForm onSuccess={(email) => setIsSent(email)} />
        </>
      )}
      <div className="flex justify-center">
        <Link
          href={"/auth/sign-in"}
          className="text-[#0A66C2] text-16 font-semibold mt-4"
        >
          Back to Sign In
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
