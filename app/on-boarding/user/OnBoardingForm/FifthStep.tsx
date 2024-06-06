import { Control, Controller } from "react-hook-form";
import { UserOnBoardingFormType } from "./schema";
import { FC } from "react";
import ProfileUpload from "@/components/ProfileUpload";

type FifthStepProps = {
  controller: Control<UserOnBoardingFormType>;
};

const FifthStep: FC<FifthStepProps> = ({ controller }) => {
  return (
    <div className="h-full flex flex-col">
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

export default FifthStep;
