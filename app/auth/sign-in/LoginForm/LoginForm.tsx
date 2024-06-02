"use client";
import PrimaryButton from "@/components/PrimaryButton";
import FormCheckbox from "@/components/form/FormCheckbox";
import FormInput from "@/components/form/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { schema } from "./schema";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted, isSubmitting },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      remember_me: false,
    },
  });

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        const response = await signIn("credentials", {
          redirect: false,
          email: data.email,
          password: data.password,
          remember: data.remember_me,
        });
        if (response?.ok) {
          router.push("/");
        } else if (response?.error === "verification") {
          router.push(`/auth/verification?email=${data.email}`);
        } else {
          setError("email", {
            message: response?.error || "User is not defined",
            type: "onChange",
          });
        }
      })}
      className="flex flex-col gap-2 animate-smooth-appear"
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
        loading={isSubmitting}
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
