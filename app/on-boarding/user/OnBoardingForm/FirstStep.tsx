import FormInput from "@/components/form/FormInput";
import FormSelect from "@/components/form/FormSelect";
import { FC } from "react";
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import LocationIcon from "@/assets/icons/loaction.svg";
import { UserOnBoardingFormType } from "./schema";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { getFirstStepOptions } from "./utils";

type FirstStepProps = {
  register: UseFormRegister<UserOnBoardingFormType>;
  controller: Control<UserOnBoardingFormType>;
  error: FieldErrors<UserOnBoardingFormType>;
};

const FirstStep: FC<FirstStepProps> = ({ register, controller, error }) => {
  const { data, status } = useSession();

  const { data: options } = useQuery({
    queryKey: ["user-first-step-options", status],
    queryFn: getFirstStepOptions(data?.user.token || ""),
    enabled: !!data?.user.token && status === "authenticated",
  });

  return (
    <div className="flex flex-col gap-2 animate-smooth-appear">
      <FormInput
        id="role"
        label="What do  you do?"
        placeholder="Title, profession, studies,.."
        {...register("role")}
        error={error.role}
      />
      <FormSelect
        label="Add Location"
        id="location"
        placeholder="Add location..."
        control={controller}
        options={options?.locationOptions || []}
        error={error.location?.message}
      >
        <LocationIcon className="w-[14px] ml-2" />
      </FormSelect>

      <FormSelect
        label="Select your Gender  identity"
        id="gender"
        placeholder="Select gender.."
        control={controller}
        options={options?.genderOptions || []}
        error={error.gender?.message}
      />
      <FormSelect
        label="Add your Nationality ( You can pick more than one )  "
        id="nationality"
        placeholder="Select  your nationality..."
        control={controller}
        options={[]}
        error={error.nationality?.message}
      />
    </div>
  );
};

export default FirstStep;
