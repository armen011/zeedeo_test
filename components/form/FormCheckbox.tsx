import { FC, ForwardedRef, forwardRef, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type CheckBoxProps = {
  isSelected: boolean;
};

const CheckBox: FC<CheckBoxProps> = ({ isSelected }) => {
  return (
    <div className="w-6 h-6 p-[2px] rounded-[7px] border border-[#191919]">
      {isSelected && (
        <div className="w-full h-full rounded-[5px] bg-[#D91883]" />
      )}
    </div>
  );
};

type FormCheckBoxProps<T extends string> = {
  label?: string;
  id: T;
  type?: "password" | "text";
} & UseFormRegisterReturn<T>;

const FormCheckBox = <T extends string>(
  { label, id, type = "text", ...otherProp }: FormCheckBoxProps<T>,
  ref: ForwardedRef<HTMLInputElement> | null
) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <input
        type="checkbox"
        hidden
        id={id}
        {...otherProp}
        onChange={(e) => {
          setIsChecked(e.currentTarget.checked);
          otherProp.onChange(e);
        }}
        ref={ref}
      />
      <label htmlFor={id} className="flex gap-2 items-center">
        <CheckBox isSelected={isChecked} />
        <p className="text-16 text-[#191919]">{label}</p>
      </label>
    </>
  );
};

export default forwardRef<HTMLInputElement, FormCheckBoxProps<string>>(
  FormCheckBox
);
