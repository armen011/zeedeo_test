import FormInput from "@/components/form/FormInput";
import FormSelect from "@/components/form/FormSelect";
import { FC } from "react";
import { Control, FieldValues, UseFormRegister } from "react-hook-form";

type FirstStepProps = {
  register: UseFormRegister<FieldValues>;
  controller: Control<FieldValues, any>;
};

const FirstStep: FC<FirstStepProps> = ({ register, controller }) => {
  return (
    <div className="flex flex-col gap-2 animate-smooth-appear">
      <FormInput
        id="name"
        label="Full name"
        placeholder="Faris..."
        {...register("full_name")}
      />
      <FormInput
        id="category"
        label="What do  you do?"
        placeholder="Title, profession, studies,.."
        {...register("category")}
      />
      <FormInput
        id="location"
        label="Add Location"
        placeholder="Add location..."
        {...register("location")}
      />

      <FormSelect
        label="Select your Gender  identity"
        id="gender_identity"
        placeholder="Select gender.."
        control={controller}
        options={[]}
      />
      <FormSelect
        label="Add your Nationality ( You can pick more than one )  "
        id="nationality"
        placeholder="Select  your nationality..."
        control={controller}
        options={[]}
      />
    </div>
  );
};

export default FirstStep;
