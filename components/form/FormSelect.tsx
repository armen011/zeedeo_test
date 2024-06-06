"use client";

import { Controller, Control, FieldValues, Path } from "react-hook-form";
import FormError from "./FormError";
import FormLabel from "./FormLabel";
import { twMerge } from "tailwind-merge";
import dynamic from "next/dynamic";
import { FC, ReactNode, SVGProps, createElement } from "react";
import { OptionProps, PlaceholderProps, components } from "react-select";

type Option = {
  label: string;
  value: string;
  icon?: FC<SVGProps<SVGElement>>;
};

type FormSelectProps<T extends FieldValues> = {
  id: Path<T>;
  control: Control<T>;
  options: Option[];
  label: string;
  error?: string;
  placeholder?: string;
  className?: string;
  children?: ReactNode;
  isSearchable?: boolean;
};

const Select = dynamic(() => import("react-select/async"), { ssr: false });

const FormSelect = <T extends FieldValues>({
  id,
  control,
  options,
  label,
  error,
  placeholder,
  className,
  children,
  isSearchable = true,
}: FormSelectProps<T>) => {
  return (
    <div className={twMerge("flex flex-col", className)}>
      <FormLabel id={id} label={label} />
      <div className="flex border rounded-[100px] border-[#3B0F84] relative h-fit min-h-[36px] sm:h-[46px] sm:px-3">
        {children}
        <Controller
          name={id}
          control={control}
          render={({ field: { onChange, value, onBlur } }) => (
            <Select
              id={id}
              isSearchable={isSearchable}
              name={id}
              components={{
                Option: (optionData) => {
                  const data = optionData as OptionProps<{
                    label: string;
                    icon?: FC<SVGProps<SVGElement>>;
                  }>;
                  return (
                    <components.DropdownIndicator
                      {...data}
                      className={twMerge(
                        `cursor-pointer`,
                        data.isFocused ? "bg-[#D91883]" : "bg-white"
                      )}
                    >
                      <div className="flex gap-2">
                        {data.data.icon && (
                          <span className="w-6">{<data.data.icon />}</span>
                        )}
                        <p
                          className={twMerge(
                            `w-6 whitespace-nowrap`,
                            data.isFocused ? "text-white" : "text-black"
                          )}
                        >
                          {data.data.label}
                        </p>
                      </div>
                    </components.DropdownIndicator>
                  );
                },
                SingleValue: (valueData) => {
                  const data = valueData as OptionProps<{
                    label: string;
                    icon?: FC<SVGProps<SVGElement>>;
                  }>;
                  return (
                    <components.SingleValue {...data}>
                      <div className="flex gap-2">
                        {data.data.icon && (
                          <span className="w-6">{<data.data.icon />}</span>
                        )}
                        <p
                          className={twMerge(
                            `w-6 whitespace-nowrap`,
                            data.isFocused ? "text-white" : "text-black"
                          )}
                        >
                          {data.data.label}
                        </p>
                      </div>
                    </components.SingleValue>
                  );
                },
              }}
              options={options}
              noOptionsMessage={() => null}
              value={options.find((c) => c.value === value)}
              onBlur={onBlur}
              className="flex-grow"
              onChange={(target) => {
                const typedTarget = target as { value: string };
                onChange(typedTarget?.value);
              }}
              loadOptions={(inputValue, callback) => {
                const startsWith: Option[] = [];
                const contains: Option[] = [];
                options.forEach((option) => {
                  if (
                    option.label
                      .toLowerCase()
                      .startsWith(inputValue.toLowerCase())
                  ) {
                    startsWith.push(option);
                  } else if (
                    option.label
                      .toLowerCase()
                      .includes(inputValue.toLowerCase())
                  ) {
                    contains.push(option);
                  }
                });
                callback([...startsWith, ...contains].slice(0, 100));
              }}
              defaultOptions={options.length > 100 ? undefined : options}
              isDisabled={options.length === 0}
              placeholder={placeholder}
              pageSize={20}
              closeMenuOnScroll={true}
              styles={{
                control: (base) => ({
                  ...base,
                  border: "none",
                  boxShadow: "none",
                  background: "transparent",
                  height: "100%",
                }),
                menu: (base) => ({
                  ...base,
                  borderRadius: "12px",
                  overflow: "hidden",
                  maxHeight: "350px",
                  overflowY: "auto",
                  marginTop: "2px",
                  border: "1px solid #51367E",
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
