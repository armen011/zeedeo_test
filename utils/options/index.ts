import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

const getLocationUrl = `${baseUrl}/index`;

type ResponseString = string | null | undefined;

type OptionDataType = {
  id: number;
  name: ResponseString;
};

export const getOptions = async () => {
  const industries = await axios.get<{
    body?: {
      employees_range?: OptionDataType[];
      industries?: OptionDataType[];
    };
  }>(getLocationUrl);

  return industries.data.body;
};
