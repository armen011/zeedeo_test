import PercentageIndicator from "@/components/PercentageIndicator";
import FormInput from "@/components/form/FormInput";
import FormSelect from "@/components/form/FormSelect";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { FC } from "react";
import { Control, FieldErrors, UseFormRegister } from "react-hook-form";
import { getFirstStepOptions } from "./utils";
import { OnBoardingFormType } from "./schema";
import LocationIcon from "@/assets/icons/loaction.svg";

type FirstStepProps = {
  register: UseFormRegister<OnBoardingFormType>;
  controller: Control<OnBoardingFormType>;
  error: FieldErrors<OnBoardingFormType>;
};
const FirstStep: FC<FirstStepProps> = ({ register, controller, error }) => {
  const { data, status } = useSession();

  const { data: options } = useQuery({
    queryKey: ["country-first-step-options", status],
    queryFn: getFirstStepOptions(data?.user.token || ""),
    enabled: !!data?.user.token && status === "authenticated",
  });

  return (
    <div className="flex flex-col gap-2 animate-smooth-appear">
      <FormInput
        id="name"
        label="Company name"
        placeholder="Enter your company name..."
        {...register("name")}
        error={error.name}
      />
      <FormSelect
        id="industry"
        label="Choose industry"
        placeholder="Select Industry ..."
        control={controller}
        options={options?.industryOptions || []}
        error={error.industry?.message}
      />
      <FormSelect
        label="Add Location"
        id="location"
        placeholder="Add location..."
        control={controller}
        options={options?.locationOptions || []}
        error={error.location?.message}
      >
        <LocationIcon className="w-[14px]" />
      </FormSelect>
      <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
        <FormInput
          id="funding_years"
          label="Years of founding"
          type="number"
          placeholder="Years of founding..."
          {...register("founding_year")}
          className="w-full sm:w-1/2"
          error={error.founding_year}
        />
        <FormSelect
          label="Average age"
          id="employees_range"
          placeholder="Select"
          control={controller}
          options={options?.ageRangeOptions || []}
          className="w-full sm:w-1/2"
          error={error.employees_range?.message}
        />
      </div>
      <PercentageIndicator
        control={controller}
        id="gender_percent"
        label="Gender Breakdown"
        className="mb-6"
      />
    </div>
  );
};

export default FirstStep;
