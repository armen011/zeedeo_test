"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useForm } from "react-hook-form";
import FormInput from "@/components/form/FormInput";
import PrimaryButton from "@/components/PrimaryButton";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/app/auth/AuthContext";

const SignUpForm = () => {
  const { onError, error, handleSetUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted, isSubmitting },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (error) {
      setError("email", { message: error });
    }
  }, [error, setError]);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        handleSetUser(data);
        onError("");
      })}
      className="flex flex-col gap-2 animate-smooth-appear"
    >
      <FormInput
        id="name"
        {...register("name")}
        label="Enter your full name"
        placeholder="Add your full name"
        error={errors.name}
      />
      <FormInput
        id="email"
        {...register("email")}
        label="Email"
        placeholder="Add  your email address "
        error={errors.email}
      />
      <FormInput
        id="password"
        {...register("password")}
        label="Password"
        placeholder="Add your password"
        error={errors.password}
        type="password"
      />
      <FormInput
        id="confirmPassword"
        {...register("confirmPassword")}
        label="Re-entry Password"
        placeholder="Re-entry Your password"
        error={errors.confirmPassword}
        type="password"
      />
      <PrimaryButton
        disabled={isSubmitted && (!isValid || !isSubmitted)}
        loading={isSubmitting}
        text="REGISTER"
        className="mt-6"
      />
      <div className="pt-6 mx-auto">
        <p className="text-[#191919] text-14">
          By proceeding, you agree to the
        </p>
        <p className="text-[#191919] text-14">
          <a href="https://www.zeedeo.com/terms" className="text-[#0A66C2]">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="https://www.zeedeo.com/privacy" className="text-[#0A66C2]">
            Privacy Policy
          </a>
        </p>
      </div>
    </form>
  );
};

export default SignUpForm;
