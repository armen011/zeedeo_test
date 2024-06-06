import axios from "axios";

export type CandidateIndustryType = {
  id: number;
  name: string;
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

const getIndustriesUrl = `${baseUrl}/on-boarding/candidate/industries`;

export const getCandidateIndustries = async (token: string) => {
  const industries = await axios.get<{ body?: CandidateIndustryType[] }>(
    getIndustriesUrl,
    {
      headers: { Authorization: token },
    }
  );

  return industries.data.body;
};
