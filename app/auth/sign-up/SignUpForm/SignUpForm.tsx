"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useForm } from "react-hook-form";
import FormInput from "@/components/form/FormInput";
import PrimaryButton from "@/components/PrimaryButton";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/app/auth/AuthContext";
import FormSelect from "@/components/form/FormSelect";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getOptions } from "@/utils/options";
import BookIcon from "@/assets/icons/book.svg";
import FlashIcon from "@/assets/icons/flash.svg";
import FlatIcon from "@/assets/icons/flat.svg";
import PeopleIcon from "@/assets/icons/people.svg";
import StudentIcon from "@/assets/icons/student.svg";
import UniversityIcon from "@/assets/icons/university.svg";
import { registerUser } from "@/utils/auth/sign-up";
import { useRouter } from "next/navigation";

const companyCategories = [
  FlatIcon,
  FlashIcon,
  UniversityIcon,
  PeopleIcon,
  StudentIcon,
  BookIcon,
];

const parseCategories = (
  arr: {
    id: number;
    name: string;
    description: string;
  }[]
) => {
  return arr.map((item, idx) => ({
    label: item.name,
    value: String(item.id),
    icon: companyCategories[idx],
  }));
};

const SignUpForm = () => {
  const { onError, error, handleSetUser, user } = useContext(AuthContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted, isSubmitting },
    setError,
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { data: options } = useQuery({
    queryKey: ["profile-options"],
    queryFn: () => getOptions(),
  });

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      router.push(`/auth/verification?email=${user?.email}`);
    },
    onError: (err) => {
      const error = err as { message: string };
      onError(error.message);
    },
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
        mutation.mutate({
          name: data?.name || "",
          email: data?.email || "",
          password: data?.password || "",
          profileId: data.profile || "",
        });
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
      <FormSelect
        id="profile"
        control={control}
        label="Select  your profile "
        options={parseCategories(options?.profiles || [])}
        placeholder="Select profile"
      />
      <FormInput
        id="email"
        {...register("email")}
        label="Enter your Email address"
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
