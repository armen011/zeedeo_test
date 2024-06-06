import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Full name is required"),
  profile: yup.string().required("Profile type is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Not valid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "At least 6 characters"),
  confirmPassword: yup
    .string()
    .required("Re-entry Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});
