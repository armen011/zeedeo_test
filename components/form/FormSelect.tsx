"use client";

import { FC } from "react";
import { Controller, Control } from "react-hook-form";
import FormError from "./FormError";
import FormLabel from "./FormLabel";
import { twMerge } from "tailwind-merge";
import dynamic from "next/dynamic";

type FormSelectProps = {
  id: string;
  control: Control<any>;
  options: {
    label: string;
    value: string;
  }[];
  label: string;
  error?: string;
  placeholder?: string;
  className?: string;
};

const Select = dynamic(() => import("react-select"), { ssr: false });

const FormSelect: FC<FormSelectProps> = ({
  id,
  control,
  options,
  label,
  error,
  placeholder,
  className,
}) => {
  return (
    <div className={twMerge("flex flex-col", className)}>
      <FormLabel id={id} label={label} />
      <div className="border rounded-[100px] border-[#3B0F84] relative h-[46px]">
        <Controller
          name={id}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select
              id={id}
              name={id}
              options={options}
              value={options.find((c) => c.value === value)}
              onChange={(target) => {
                const typedTarget = target as { value: string };
                onChange(typedTarget?.value);
              }}
              placeholder={placeholder}
              styles={{
                control: (base) => ({
                  ...base,
                  border: "none",
                  boxShadow: "none",
                  marginRight: "12px",
                  marginLeft: "12px",
                  background: "transparent",
                  height: "46px",
                }),
                menu: (base) => ({
                  ...base,
                  borderRadius: "12px",
                  overflow: "hidden",
                  maxHeight: "350px",
                  overflowY: "auto",
                  marginTop: "2px",
                }),
                option: (base, state) => ({
                  ...base,
                  backgroundColor: state.isFocused ? "#D91883" : "white",
                  color: state.isFocused ? "white" : "#000",
                }),
                indicatorSeparator: (base) => ({
                  ...base,
                  display: "none",
                }),
              }}
            />
          )}
        />
      </div>
      {error && <FormError message={error} />}
    </div>
  );
};

export default FormSelect;
