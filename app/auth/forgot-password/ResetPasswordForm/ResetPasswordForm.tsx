"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schema } from "./schema";
import FormInput from "@/components/form/FormInput";
import PrimaryButton from "@/components/PrimaryButton";
import Link from "next/link";
import { FC } from "react";
import { resetPassword } from "@/utils/auth/reset";
type ResetPasswordFormProps = {
  onSuccess: (email: string) => void;
};

const ResetPasswordForm: FC<ResetPasswordFormProps> = ({ onSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted, isSubmitting },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <form
      onSubmit={handleSubmit((formData) => {
        resetPassword({ email: formData.email })
          .then(({ email }) => {
            onSuccess(email);
          })
          .catch(() => {
            setError("email", { message: "Unable to send reset code" });
          });
      })}
      className="flex flex-col gap-4 items-center"
    >
      <FormInput
        id="email"
        {...register("email")}
        placeholder="Your Email Address"
        error={errors.email}
        className="w-full"
      />
      <PrimaryButton
        disabled={isSubmitted && (!isValid || !isSubmitted)}
        loading={isSubmitting}
        text="Send Email"
      />
    </form>
  );
};

export default ResetPasswordForm;
