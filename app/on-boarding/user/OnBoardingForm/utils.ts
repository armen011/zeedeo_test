import { getLocation } from "@/utils/options/location";
import { UserOnBoardingFormType } from "./schema";
import { getOptions } from "@/utils/options";

export const getFirstStepOptions = (token: string) => async () => {
  const locations = await getLocation(token);
  const locationOptions =
    locations?.map(({ country_name, id, state_name }) => ({
      label: `${country_name},${state_name}`,
      value: `${id}`,
    })) || [];

  const options = await getOptions();
  const genderOptions = options?.gender?.map(({ id, name }) => ({
    label: `${name}`,
    value: `${id}`,
  }));

  return { locationOptions, genderOptions };
};
export const getSecondStepOptions = () => async () => {
  const options = await getOptions();

  const candidateStatusOptions = options?.candidate_status?.map(
    ({ id, name, description }) => ({
      title: `${name}`,
      id: id,
      description,
    })
  );
  const visaStatusOptions = options?.visa_status?.map(({ id, name }) => ({
    label: `${name}`,
    value: `${id}`,
  }));

  return { candidateStatusOptions, visaStatusOptions };
};

export const stepValidationKeys: Record<
  number,
  (keyof UserOnBoardingFormType)[]
> = {
  [0]: ["name", "role", "location", "gender"],
  [1]: ["status", "visa_status"],
  [2]: ["jobs"],
  [3]: ["goals"],
  [4]: ["image"],
  [6]: [],
};
