import { getOptions } from "@/utils/options";
import { getLocation } from "@/utils/options/location";

export const getFirstStepOptions = async (token: string) => {
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
