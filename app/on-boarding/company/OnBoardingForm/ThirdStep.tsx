import ProfileUpload from "@/components/ProfileUpload";
import { FC } from "react";
import { OnBoardingFormType } from "./schema";
import { Control, Controller, FieldErrors } from "react-hook-form";

type SecondStepProps = {
  controller: Control<OnBoardingFormType>;
  error: FieldErrors<OnBoardingFormType>;
};

const ThirdStep: FC<SecondStepProps> = ({ controller, error }) => {
  return (
    <div className="h-full flex flex-col justify-center">
      <Controller
        name="image"
        control={controller}
        render={({ field }) => {
          return (
            <ProfileUpload
              onUpload={(file) => {
                field.onChange(file);
              }}
              file={field.value as string}
            />
          );
        }}
      />
    </div>
  );
};

export default ThirdStep;
