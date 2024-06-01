"use client";
import { useForm, useFormContext } from "react-hook-form";
import FirstStep from "./FirstStep";
import { FC } from "react";
import SecondaryButton from "@/components/SecondaryButton";
import PrimaryButton from "@/components/PrimaryButton";
import { useRouter } from "next/navigation";
import SecondStep from "./SecondStep";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { stepValidationKeys } from "./utils";
import ThirdStep from "./ThirdStep";

type OnBoardingFormProps = {
  step: number;
};

const steps = {
  [0]: FirstStep,
  [1]: SecondStep,
  [2]: ThirdStep,
};

const OnBoardingForm: FC<OnBoardingFormProps> = ({ step = 0 }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      gender_percent: 50,
      role: "CEO",
    },
    reValidateMode: "onChange",
    mode: "onTouched",
  });
  const CurrentStep = steps[step as keyof typeof steps];
  const router = useRouter();

  return (
    <form
      className="flex-grow flex flex-col justify-between overflow-y-auto"
      onSubmit={handleSubmit(async (data) => {
        console.log(data);
      })}
    >
      <CurrentStep register={register} controller={control} error={errors} />
      <div className="flex justify-between gap-2">
        <SecondaryButton
          onClick={() => router.back()}
          type="button"
          text="Back"
          className="max-w-[258px] h-[45px] py-[unset]"
        />
        <PrimaryButton
          type={step === 2 ? "submit" : "button"}
          onClick={() => {
            if (step < 2) {
              router.push(
                `/on-boarding/company?category=founder&step=${Number(step) + 1}`
              );
            }
          }}
          disabled={
            !stepValidationKeys[step].every(
              (key) => touchedFields[key] && !errors[key]
            )
          }
          text="Next"
          className="max-w-[258px] h-[45px] py-[unset]"
        />
      </div>
    </form>
  );
};

export default OnBoardingForm;
