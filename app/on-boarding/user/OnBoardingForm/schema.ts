import * as yup from "yup";

export const schema = yup.object().shape({
  role: yup.string().required("This field is required"),
  location: yup.string().required("Location is required"),
  gender: yup.string().required("Gender identity is required"),
  nationality: yup.array().of(yup.string()),
  status: yup.number().required(),
  visa_status: yup.string().required(),
  jobs: yup.array().of(yup.number()).min(1, "Select at least one job."),
  goals: yup.array().of(yup.number()).min(1, "Select at least one goal."),
  image: yup.string().required("File is required"),
});

export type UserOnBoardingFormType = yup.InferType<typeof schema>;
