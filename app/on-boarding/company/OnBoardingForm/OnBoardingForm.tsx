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
import { createCompany } from "@/utils/company/create";
import { useSession } from "next-auth/react";

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
  const { data: userData } = useSession();

  return (
    <form
      className="flex-grow flex flex-col justify-between overflow-y-auto"
      onSubmit={handleSubmit(async (formData) => {
        if (userData?.user.token) {
          try {
            await createCompany(
              {
                employees_range_id: Number(formData.employees_range),
                goals: formData.goals?.map((goalId) => Number(goalId)) || [],
                industry_id: Number(formData.industry),
                location_id: Number(formData.location),
                name: formData.name,
                role_title: formData.role || "CEO",
                year_of_founding: formData.founding_year,
              },
              userData?.user.token
            );
          } catch (err) {
            console.log("Error", err);
          }
        }
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
          type={step === 1 ? "submit" : "button"}
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
