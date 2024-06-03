import SelectButton from "@/components/SelectButton";
import { FC } from "react";
import {
  Control,
  Controller,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { UserOnBoardingFormType } from "./schema";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { getCandidateIndustries } from "@/utils/options/candidate";

type ThirdStepProps = {
  controller: Control<UserOnBoardingFormType>;
};

const ThirdStep: FC<ThirdStepProps> = ({ controller }) => {
  const { data, status } = useSession();

  const { data: options } = useQuery({
    queryKey: ["user-third-step-options", status],
    queryFn: () => getCandidateIndustries(data?.user.token || ""),
    enabled: !!data?.user.token && status === "authenticated",
  });

  return (
    <div className="w-full flex justify-center mt-8 mb-8">
      <Controller
        name="jobs"
        control={controller}
        render={({ field }) => (
          <div className="sm:max-w-[500px] w-full flex justify-center flex-wrap gap-[14px]">
            {options?.map(({ id, name }) => (
              <SelectButton
                title={name}
                key={id}
                active={field.value?.includes(id) || false}
                onClick={() => {
                  field.onBlur();
                  const valueToSet =
                    field.value?.filter((selectedId) => selectedId !== id) ||
                    [];
                  if (
                    !field.value ||
                    valueToSet.length === field.value?.length
                  ) {
                    valueToSet.push(id);
                  }

                  field.onChange(valueToSet);
                }}
              />
            ))}
          </div>
        )}
      />
    </div>
  );
};

export default ThirdStep;
