"use client";
import PrimaryButton from "@/components/PrimaryButton";
import FormCheckbox from "@/components/form/FormCheckbox";
import FormInput from "@/components/form/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { schema } from "./schema";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      remember_me: false,
    },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        // mutation.mutate(data);
        console.log("DATA", data);
      })}
      className="flex flex-col gap-2"
    >
      <FormInput
        id="email"
        {...register("email")}
        label="Email"
        placeholder="Your Email Address"
        error={errors.email}
      />
      <FormInput
        id="password"
        {...register("password")}
        label="Password"
        placeholder="Your password"
        error={errors.password}
        type="password"
      />
      <div className="flex justify-between items-center my-4">
        <FormCheckbox
          id="remember_me"
          {...register("remember_me")}
          label="Remember me"
        />
        <Link href="/auth/forgot-password" className="text-16 text-[#0A66C2]">
          Forgot Password?
        </Link>
      </div>
      <PrimaryButton
        disabled={isSubmitted && (!isValid || !isSubmitted)}
        loading={false}
        text="SIGN IN"
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

export default LoginForm;
