import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

const candidateLogInUrl = `${baseUrl}/v2/candidate/store-candidate`;

export type CandidateType = {
  id: number;
  name: string;
  email: string;
};

export const getCandidateData = async (idToken: string) => {
  const candidateData = await axios.get<{ body: CandidateType }>(
    candidateLogInUrl,
    {
      headers: { Authorization: idToken },
    }
  );

  return {
    id: candidateData.data.body.id,
    email: candidateData.data.body.email,
    name: candidateData.data.body.name,
  };
};
