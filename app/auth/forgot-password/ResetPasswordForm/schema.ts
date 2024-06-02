import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Not valid email address"),
});
