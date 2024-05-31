import { FC } from "react";
import { Controller, Control } from "react-hook-form";
import FormError from "./FormError";
import FormLabel from "./FormLabel";
import Select from "react-select";

type FormSelectProps = {
  name: string;
  control: Control<any>;
  options: {
    label: string;
    value: string;
  }[];
  label: string;
  error?: string;
};

const FormSelect: FC<FormSelectProps> = ({
  name,
  control,
  options,
  label,
  error,
}) => {
  return (
    <div className="flex flex-col">
      <FormLabel id={name} label={label} />
      <div className="border rounded-[100px] border-[#3B0F84] relative">
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select
              options={options}
              value={options.find((c) => c.value === value)}
              onChange={(val) => onChange(val?.value)}
              styles={{
                control: (base) => ({
                  ...base,
                  border: "none",
                  boxShadow: "none",
                  marginRight: "12px",
                  marginLeft: "12px",
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
