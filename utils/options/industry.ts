import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

const getLocationUrl = `${baseUrl}/on-boarding/candidate/industries`;

type ResponseString = string | null | undefined;

type IndustryDataType = {
  id: number;
  name: ResponseString;
};

export const getIndustry = async (token: string) => {
  const industries = await axios.get<{ body?: IndustryDataType[] }>(
    getLocationUrl,
    {
      headers: { Authorization: token },
    }
  );
  return industries.data.body;
};
