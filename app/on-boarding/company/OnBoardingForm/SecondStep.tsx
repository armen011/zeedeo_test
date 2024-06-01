import { getGoals } from "@/utils/options/goals";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { OnBoardingFormType } from "./schema";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

type OptionProps = {
  name: string;
  isSelected: boolean;
  onClick: () => void;
};
const Option: FC<OptionProps> = ({ name, isSelected, onClick }) => {
  return (
    <button
      className={twMerge(
        "w-fit h-fit px-4 py-2 rounded-[13px] cursor-pointer border font-semibold text-18 transition-colors animate-smooth-appear",
        isSelected
          ? "border-[#D91883] bg-[#D91883] text-white"
          : "border-[#D1D1D1] text-[#3B0F84]"
      )}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

type SecondStepProps = {
  controller: Control<OnBoardingFormType>;
  error: FieldErrors<OnBoardingFormType>;
};

const SecondStep: FC<SecondStepProps> = ({ controller, error }) => {
  const { data, status } = useSession();
  const { data: options } = useQuery({
    queryKey: ["country-second-step-options", status],
    queryFn: () => getGoals(data?.user.token || ""),
    enabled: !!data?.user.token && status === "authenticated",
  });

  return (
    <Controller
      name="goals"
      control={controller}
      render={({ field }) => {
        return (
          <div className="w-full ma-h-full flex flex-wrap gap-x-3 gap-y-5 justify-center">
            {options?.map(({ goal, id }) => (
              <Option
                name={goal || ""}
                key={id}
                isSelected={field.value?.includes(id) || false}
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
        );
      }}
    ></Controller>
  );
};

export default SecondStep;
