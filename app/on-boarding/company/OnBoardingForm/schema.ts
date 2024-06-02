import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Company Name is required"),
  industry: yup.string().required("Industry is required"),
  location: yup.string().required("Location is required"),
  role: yup.string(),
  founding_year: yup
    .number()
    .typeError("Year is required")
    .integer("Year is required")
    .min(1, "Year must be greater than 1")
    .max(
      new Date().getFullYear(),
      "Year must be less than or equal to the current year"
    )
    .required("Year is required")
    .required("Years of founding is required"),
  goals: yup.array().of(yup.number()).min(1, "Select at least one goal."),
  gender_percent: yup.number().required(),
  employees_range: yup.string().required("Employees range is required"),
  image: yup.string().required("File is required"),
});

export type OnBoardingFormType = yup.InferType<typeof schema>;
