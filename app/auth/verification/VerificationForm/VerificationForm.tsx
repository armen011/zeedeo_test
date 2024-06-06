"use client";

import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import { useRouter } from "next/navigation";
import Expiration from "./Expiration";
import VerificationInput from "react-verification-input";
import { Controller, useForm } from "react-hook-form";
import { schema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "@/components/form/FormError";
import Resend from "./Resend";
import { FC, useState } from "react";
import { resendCode, verifyUser } from "@/utils/auth/sign-up";
import Success from "./Success";

type VerificationFormProps = {
  email: string;
};

const VerificationForm: FC<VerificationFormProps> = ({ email }) => {
  const [resendCount, setResendCount] = useState(1);
  const [isVerified, setIsVerified] = useState(false);
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
    setError,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        try {
          const response = await verifyUser({ email, code: data.code });
          reset();
          setIsVerified(true);
        } catch (err) {
          const error = err as { message: string };
          setError("code", { message: error.message, type: "onChange" });
        }
      })}
    >
      {isVerified ? (
        <Success />
      ) : (
        <>
          <h5 className="text-24 font-semibold text-[#191919] text-center mb-2">
            Enter OTP Code
          </h5>
          <p className="text-16 text-[#5E5E5E] text-center">
            We sent your code to your email.
          </p>
          <Expiration count={resendCount} />
          <Controller
            name="code"
            control={control}
            render={({ field }) => (
              <div className="w-fit mx-auto my-6 sm:my-9 flex flex-col items-center">
                <VerificationInput
                  length={6}
                  validChars="0-9"
                  inputProps={{ inputMode: "numeric" }}
                  classNames={{
                    container: "mx-auto gap-4 w-fit h-fit",
                    character:
                      "w-[32px] sm:w-[64px] h-[38px] sm:h-[76px] border-[#57357C] rounded-[8px] flex justify-center items-center text-[#3B0F84] text-16 sm:text-32 font-bold",
                    characterInactive: "bg-transparent",
                    characterSelected: "outline-[#57357C]",
                  }}
                  onChange={field.onChange}
                  value={field.value?.toString()}
                />
                <FormError message={errors.code?.message} />
              </div>
            )}
          />
          <Resend
            count={resendCount}
            handleResend={() => {
              resendCode({ email })
                .then(() => {
                  setResendCount((prev) => prev + 1);
                  reset();
                })
                .catch((err) => {
                  const error = err as { message: string };

                  setError("code", {
                    message: error.message,
                    type: "onChange",
                  });
                });
            }}
          />
          <div className="w-full flex items-center gap-5 md:gap-10 lg:gap-20 justify-center mt-6 sm:mt-0 sm:absolute bottom-9 left-0 sm:bottom-[42px] px-6 md:px-9">
            <PrimaryButton
              text="Back"
              className="flex-grow max-w-[258px] text-13 h-[45px] text-white flex items-center justify-center"
              type="button"
              onClick={() => router.push("/auth/sign-up")}
            />
            <SecondaryButton
              disabled={isSubmitted && (!isValid || !isSubmitted)}
              loading={false}
              text="Next"
              className="text-13 h-[45px] flex-grow max-w-[258px] text-white flex items-center justify-center"
            />
          </div>
        </>
      )}
    </form>
  );
};

export default VerificationForm;
