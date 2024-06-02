import SelectButton from "@/components/SelectButton";
import { getLocation } from "@/utils/options/location";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { FC } from "react";
import { Control, Controller } from "react-hook-form";
import { UserOnBoardingFormType } from "./schema";
import { getGoals } from "@/utils/options/goals";

type FourthStepProps = {
  controller: Control<UserOnBoardingFormType>;
};

const FourthStep: FC<FourthStepProps> = ({ controller }) => {
  const { data, status } = useSession();

  const { data: options } = useQuery({
    queryKey: ["user-first-step-options", status],
    queryFn: () => getGoals(data?.user.token || "", "candidate"),
    enabled: !!data?.user.token && status === "authenticated",
  });

  return (
    <div className="w-full flex justify-center pt-1">
      <Controller
        name="goals"
        control={controller}
        render={({ field }) => {
          return (
            <div className="sm:max-w-[500px] w-full flex justify-center flex-wrap gap-[14px]">
              {(Array.isArray(options) ? options : [])?.map(({ id }) => (
                <SelectButton
                  key={id}
                  title="Create short content topic "
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
          );
        }}
      />
    </div>
  );
};

export default FourthStep;
