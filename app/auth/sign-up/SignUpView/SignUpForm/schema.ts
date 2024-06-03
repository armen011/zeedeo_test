import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Full name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Not valid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password mast be minimum 8 characters"),
  confirmPassword: yup
    .string()
    .required("Re-entry Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});
