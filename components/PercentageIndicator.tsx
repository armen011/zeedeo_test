import MaleIcon from "@/assets/icons/male.svg";
import FemaleIcon from "@/assets/icons/female.svg";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import FormLabel from "./form/FormLabel";
import { twMerge } from "tailwind-merge";

type PercentageIndicatorProps<T extends FieldValues> = {
  label?: string;
  id: Path<T>;
  className?: string;
  control: Control<T>;
};

const PercentageIndicator = <T extends FieldValues>({
  id,
  label,
  className,
  control,
}: PercentageIndicatorProps<T>) => {
  return (
    <div className={twMerge("flex flex-col", className)}>
      <FormLabel id={id} label={label} />
      <Controller
        name={id}
        control={control}
        render={({ field }) => {
          return (
            <div className="w-full relative flex flex-col gap-3 sm:gap-4">
              <div className="flex justify-between">
                <div className="py-1 px-2 sm:px-3 relative bg-[#0A66C2] rounded-md flex justify-center items-center gap-2 text-white">
                  <div className="w-2 h-2 rotate-45 -bottom-1 left-6 bg-[#0A66C2] absolute"></div>
                  <MaleIcon />
                  Male
                </div>
                <div className="py-1 px-2 sm:px-3 relative bg-[#B33EBA] rounded-md flex justify-center items-center gap-2 text-white">
                  <div className="w-2 h-2 rotate-45 -bottom-1 left-6 bg-[#B33EBA] absolute"></div>
                  <FemaleIcon />
                  Female
                </div>
              </div>
              <input
                type="range"
                value={field.value}
                onChange={field.onChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                style={{
                  backgroundImage: `linear-gradient(to right, #6976EB ${field.value}%, #B33EBA 0%)`,
                  WebkitAppearance: "none",
                }}
              />
              <div className="flex justify-between">
                <span className="w-28 h-11 rounded-[100px] border border-[#6976EB] text-[#6976EB] flex justify-center items-center">
                  {field.value}%
                </span>
                <span className="w-28 h-11 rounded-[100px] border border-[#B33EBA] text-[#B33EBA] flex justify-center items-center">
                  {100 - field.value}%
                </span>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};

export default PercentageIndicator;
