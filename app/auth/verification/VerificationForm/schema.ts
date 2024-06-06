import * as yup from "yup";

export const schema = yup.object().shape({
  code: yup
    .string()
    .required("Verification code is required")
    .min(6, "Verification code mast be minimum 6 characters"),
});
