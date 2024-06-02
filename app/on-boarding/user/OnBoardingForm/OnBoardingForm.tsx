"use client";

import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import FifthStep from "./FifthStep";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useSession } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";
import Success from "./Success";
import { stepValidationKeys } from "./utils";
import { createCandidate } from "@/utils/candidate/create";

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
  const [success, setSuccess] = useState(false);
  const { data: userData, update } = useSession();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
    defaultValues: { status: 1 },
    mode: "onTouched",
  });

  const mutation = useMutation({
    mutationFn: createCandidate,
    onSuccess: () => {
      setSuccess(true);
      update();
      router.push(`/on-boarding/user?step=3`);
    },
  });

  const CurrentStep = steps[step as keyof typeof steps];
  const router = useRouter();

  console.log(success);

  if (success) {
    return <Success />;
  }

  return (
    <form
      className="flex-grow flex flex-col justify-between overflow-y-auto"
      onSubmit={handleSubmit((formData) => {
        mutation.mutate({
          payload: {
            first_name: formData.name,
            goals: formData.goals?.map((goalId) => Number(goalId)) || [],
            interested_job: formData.role,
            job_plateforms: [],
            location_id: Number(formData.location),
            status_id: formData.status,
            visa_status_id: Number(formData.visa_status),
          },
          file: formData.image,
          token: userData?.user.token || "",
        });
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
          type={step === 4 ? "submit" : "button"}
          onClick={() => {
            if (step < 4) {
              router.push(`/on-boarding/user?step=${Number(step) + 1}`);
            }
          }}
          loading={mutation.isPending}
          disabled={
            !stepValidationKeys[step].every(
              (key) => (step !== 0 || touchedFields[key]) && !errors[key]
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
