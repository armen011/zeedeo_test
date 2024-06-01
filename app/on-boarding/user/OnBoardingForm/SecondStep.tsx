import CurrentStatues from "@/components/CurrentStatues";
import FormLabel from "@/components/form/FormLabel";
import FormSelect from "@/components/form/FormSelect";
import { FC } from "react";
import { Control, FieldValues, UseFormRegister } from "react-hook-form";

type SecondStepProps = {
  register: UseFormRegister<FieldValues>;
  controller: Control<FieldValues, any>;
};

const SecondStep: FC<SecondStepProps> = ({ register, controller }) => {
  const fn = () => {};
  return (
    <div className="mt-4">
      <FormLabel id="" label="What is your current Statues?" />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 max-h-[calc(100%-64px)] sm:max-h-[unset] overflow-auto mt-4">
        <CurrentStatues
          onClick={fn}
          title="Open To Work"
          paragraph="You have a job, but open to offers"
          active
        />
        <CurrentStatues
          onClick={fn}
          title="Interviewing"
          paragraph="Available soon but keen on Interviewing"
          active
        />
        <CurrentStatues
          onClick={fn}
          title="Open to Jobk"
          paragraph="Actively looking for an opportunity or Internship"
          active
        />
      </div>
      <FormSelect
        id=""
        label="Do you require a Visa to work on UK?"
        placeholder="Yes, I require a Visa to work in the UK "
        control={controller}
        options={[]}
        className="mt-11"
      />
    </div>
  );
};

export default SecondStep;
