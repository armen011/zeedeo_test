import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

const getLocationUrl = `${baseUrl}/index`;

type ResponseString = string | null | undefined;

type OptionDataType = {
  id: number;
  name: ResponseString;
};

type ProfileType = {
  id: number;
  name: string;
  description: string;
};

type CandidateStatusType = {
  id: number;
  name: string;
  description: string;
  type: "candidate";
  updated_at: string;
};

export const getOptions = async () => {
  const industries = await axios.get<{
    body?: {
      employees_range?: OptionDataType[];
      industries?: OptionDataType[];
      profiles?: ProfileType[];
      gender?: OptionDataType[];
      visa_status?: OptionDataType[];
      candidate_status?: CandidateStatusType[];
    };
  }>(getLocationUrl);

  return industries.data.body;
};
