"use client";

import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { useForm } from "react-hook-form";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import FifthStep from "@/components/FifthStep";

type OnBoardingFormProps = {
  step: number;
};

const steps = {
  [0]: FirstStep,
  [1]: SecondStep,
  [2]: ThirdStep,
  [3]: FourthStep,
  [4]: FifthStep,
};

const OnBoardingForm: FC<OnBoardingFormProps> = ({ step = 0 }) => {
  const { register, control } = useForm();
  const CurrentStep = steps[step as keyof typeof steps];
  const router = useRouter();

  return (
    <form className="flex-grow flex flex-col justify-between overflow-y-auto">
      <CurrentStep register={register} controller={control} />
      <div className="flex justify-between gap-2">
        <SecondaryButton
          onClick={() => router.back()}
          type="button"
          text="Back"
          className="max-w-[258px] h-[45px] py-[unset]"
        />
        <PrimaryButton
          type={"button"}
          onClick={() => {
            router.push(
              `/on-boarding/user?category=founder&step=${Number(step) + 1}`
            );
          }}
          text="Next"
          className="max-w-[258px] h-[45px] py-[unset]"
        />
      </div>
    </form>
  );
};

export default OnBoardingForm;
