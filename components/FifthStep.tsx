import { FC } from "react";
import { Control, FieldValues, UseFormRegister } from "react-hook-form";

type FifthStepProps = {
  register: UseFormRegister<FieldValues>;
  controller: Control<FieldValues, any>;
};

const FifthStep: FC<FifthStepProps> = ({ register, controller }) => {
  return <div>FifthStep</div>;
};

export default FifthStep;
