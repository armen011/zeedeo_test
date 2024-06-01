import SelectButton from "@/components/SelectButton";
import { FC } from "react";
import { Control, FieldValues, UseFormRegister } from "react-hook-form";

type ThirdStepProps = {
  register: UseFormRegister<FieldValues>;
  controller: Control<FieldValues, any>;
};

const ThirdStep: FC<ThirdStepProps> = ({ register, controller }) => {
  return (
    <div className="w-full flex justify-center mt-8">
      <div className="sm:max-w-[500px] w-full flex justify-center flex-wrap gap-[14px]">
        <SelectButton title="Banking & Finance" />
        <SelectButton title="Digital Marketing" active />
        <SelectButton title="Education & Training" />
        <SelectButton title="Fashion" />
        <SelectButton title="Healthcare" />
        <SelectButton title="HR & Recruitment" active />
        <SelectButton title="IT & Software engineering" active />
        <SelectButton title="Product Design" />
        <SelectButton title="Public  Sector" />
        <SelectButton title="Retail" />
        <SelectButton title="Sales" active />
      </div>
    </div>
  );
};

export default ThirdStep;
