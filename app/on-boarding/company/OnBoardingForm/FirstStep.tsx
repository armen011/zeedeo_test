import PercentageIndicator from "@/components/PercentageIndicator";
import FormInput from "@/components/form/FormInput";
import FormSelect from "@/components/form/FormSelect";
import { getLocation } from "@/utils/options/location";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { FC } from "react";
import { Control, FieldValues, UseFormRegister } from "react-hook-form";
import { getFirstStepOptions } from "./utils";

type FirstStepProps = {
  register: UseFormRegister<FieldValues>;
  controller: Control<FieldValues, any>;
};
const FirstStep: FC<FirstStepProps> = ({ register, controller }) => {
  const { data } = useSession();

  const { data: options } = useQuery({
    queryKey: ["country-first-step-options"],
    queryFn: () => getFirstStepOptions(data?.user.token || ""),
    enabled: !data?.user.token,
  });

  return (
    <div className="flex flex-col gap-2 animate-smooth-appear">
      <FormInput
        id="name"
        label="Company name"
        placeholder="Enter your company name..."
        {...register("name")}
      />
      <FormSelect
        id="industry"
        label="Choose industry"
        placeholder="Select Industry ..."
        control={controller}
        options={options?.industryOptions || []}
      />
      <FormSelect
        label="Add Location"
        id="location"
        placeholder="Add location..."
        control={controller}
        options={options?.locationOptions || []}
      />
      <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
        <FormInput
          id="funding_years"
          label="Years of founding"
          placeholder="Years of founding..."
          {...register("funding_years")}
          className="w-full sm:w-1/2"
        />
        <FormSelect
          label="Average age"
          id="age_group"
          placeholder="Select"
          control={controller}
          options={options?.ageRangeOptions || []}
          className="w-full sm:w-1/2"
        />
      </div>
      <PercentageIndicator
        control={controller}
        id="gender_percentage"
        label="Gender Breakdown"
        className="mb-6"
      />
    </div>
  );
};

export default FirstStep;
