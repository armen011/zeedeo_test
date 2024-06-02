import { getOptions } from "@/utils/options";
import { getLocation } from "@/utils/options/location";
import { OnBoardingFormType } from "./schema";

export const getFirstStepOptions = (token: string) => async () => {
  const locations = await getLocation(token);
  const locationOptions =
    locations?.map(({ country_name, id, state_name }) => ({
      label: `${country_name},${state_name}`,
      value: `${id}`,
    })) || [];

  const industries = await getOptions();

  const industryOptions = industries?.industries?.map(({ id, name }) => ({
    label: `${name}`,
    value: `${id}`,
  }));

  const ageRangeOptions = industries?.employees_range?.map(({ id, name }) => ({
    label: `${name}`,
    value: `${id}`,
  }));

  return { locationOptions, industryOptions, ageRangeOptions };
};

export const stepValidationKeys: Record<number, (keyof OnBoardingFormType)[]> =
  {
    [0]: ["name", "industry", "location", "founding_year", "employees_range"],
    [1]: ["goals"],
    [2]: ["image"],
    [3]: [],
  };
