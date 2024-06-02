import PhotoCropper from "@/components/PhotoCropper";
import ProfileUpload from "@/components/ProfileUpload";
import { FC, useState } from "react";
import { OnBoardingFormType } from "./schema";
import { Control, Controller, FieldErrors } from "react-hook-form";

type SecondStepProps = {
  controller: Control<OnBoardingFormType>;
  error: FieldErrors<OnBoardingFormType>;
};

const ThirdStep: FC<SecondStepProps> = ({ controller, error }) => {
  const [image, setImage] = useState<File>();
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
