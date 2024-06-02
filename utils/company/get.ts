import axios from "axios";
import { UserType } from "../user/details";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

const companyLogInUrl = `${baseUrl}/logged-in-company`;

export type CompanyType = {
  id: number;
  name: string;
  location_id: number;
  facebook: string;
  twitter: string;
  linkedin: string;
  zeedeo: string | null;
  created_at: string;
  updated_at: string;
  year_of_founding: number;
  logo: string | null;
  industry_id: number;
  summary: string | null;
  vision: string | null;
  mission: null;
  goals: null;
  status: number | null;
  role_title: string;
  range_of_employees: {
    id: number;
    name: string;
  }[];
  male_breakdown: null;
  female_breakdown: null;
  instagram: null;
  wtsapp: null;
  email: null;
  website: null;
  hiring: number;
  average_age: null;
  username: null;
  verified: number;
  following_count: number;
  follower_count: number;
  post_count: number;
  thumbnail: null;
  videosLink: null;
  post_type: "company";
  goal: [];
  location: {
    id: number;
    state_name: string;
    country_id: number;
  };
  industry: {
    id: number;
    name: string;
  };
  user: UserType;
};

export const getCompanyData = async (idToken: string) => {
  const companyData = await axios.get<{ body: CompanyType }>(companyLogInUrl, {
    headers: { Authorization: idToken },
  });

  return {
    id: companyData.data.body.id,
    email: companyData.data.body.user.email,
    name: companyData.data.body.name,
    picture: companyData.data.body.logo,
  };
};
