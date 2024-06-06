import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

const candidateLogInUrl = `${baseUrl}/on-boarding/logged-in-candidate`;
const candidateDetailsUrl = `${baseUrl}/on-boarding/candidate/{{candidateId}}`;

export type CandidateType = {
  id: number;
};

export type CandidateDataType = {
  id: number;
  onboarding_category_id: number | null;
  user_id: number;
  industry_id: number | null;
  hard_skill_id: number | null;
  visa_status_id: number | null;
  updated_at: string;
  summary: string | null;
  fav_quote: string | null;
  goal: string[];
  status_id: number;
  image?: string | null;
  location_id: number;
  interested_job: string;
  profile: "Professional";
  location: {
    id: 243;
    state_name: "Yerevan";
    country_id: 11;
  };
  status: {
    id: 1;
    name: "Open to job";
    description: "Actively looking for a job";
    type: "candidate";
    updated_at: "2022-09-09T11:02:23.000000Z";
  };
};

export const getCandidateData = async (idToken: string) => {
  const candidateLogInData = await axios.get<{ body: CandidateType }>(
    candidateLogInUrl,
    {
      headers: { Authorization: idToken },
    }
  );

  const candidateData = await axios.get<{ body: CandidateDataType }>(
    candidateDetailsUrl.replace(
      "{{candidateId}}",
      `${candidateLogInData.data.body.id}`
    ),
    { headers: { Authorization: idToken } }
  );

  return {
    id: candidateData.data.body.id,
    image: candidateData.data.body.image,
  };
};
