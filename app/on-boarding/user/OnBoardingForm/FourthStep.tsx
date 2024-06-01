import SelectButton from "@/components/SelectButton";
import { FC } from "react";
import { Control, FieldValues, UseFormRegister } from "react-hook-form";

type FourthtStepProps = {
  register: UseFormRegister<FieldValues>;
  controller: Control<FieldValues, any>;
};

const FourthStep: FC<FourthtStepProps> = ({ register, controller }) => {
  return (
    <div className="w-full flex justify-center pt-1">
      <div className="sm:max-w-[500px] w-full flex justify-center flex-wrap gap-[14px]">
        <SelectButton title="Create short content topic " />
        <SelectButton title="Find a co-founder" active />
        <SelectButton title="Looking for Job/Internship" />
        <SelectButton title="Pitch an idea" />
        <SelectButton title="Promote your  personal brand" />
      </div>
    </div>
  );
};

export default FourthStep;
