import CurrentStatues from "@/components/CurrentStatues";
import FormLabel from "@/components/form/FormLabel";
import FormSelect from "@/components/form/FormSelect";
import { FC } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { UserOnBoardingFormType } from "./schema";
import { useQuery } from "@tanstack/react-query";
import { getSecondStepOptions } from "./utils";

type SecondStepProps = {
  controller: Control<UserOnBoardingFormType>;
  error: FieldErrors<UserOnBoardingFormType>;
};

const SecondStep: FC<SecondStepProps> = ({ controller, error }) => {
  const { data: options } = useQuery({
    queryKey: ["user-second-step-options"],
    queryFn: getSecondStepOptions(),
  });

  return (
    <div className="mt-4">
      <FormLabel id="" label="What is your current Statues?" />
      <Controller
        name="status"
        control={controller}
        render={({ field }) => {
          return (
            <div className=" flex flex-wrap gap-2 mt-4 justify-center sm:justify-start">
              {options?.candidateStatusOptions?.map(
                ({ id, title, description }) => (
                  <CurrentStatues
                    key={id}
                    onClick={() => field.onChange(id)}
                    title={title}
                    paragraph={description}
                    active={id == field.value}
                  />
                )
              )}
            </div>
          );
        }}
      />

      <FormSelect
        id="visa_status"
        label="Do you require a Visa to work on UK?"
        placeholder="Yes, I require a Visa to work in the UK "
        control={controller}
        options={options?.visaStatusOptions || []}
        className="mt-11"
      />
    </div>
  );
};

export default SecondStep;
