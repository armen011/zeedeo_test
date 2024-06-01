import axios from "axios";

type CreateCompanyPayloadType = {
  employees_range_id: number;
  goals: number[];
  industry_id: number;
  location_id: number;
  name: string;
  role_title: string;
  year_of_founding: number;
};

type CreatedCompanyType = {
  employees_range_id: number;
  goals: number[];
  industry_id: number;
  location_id: number;
  name: string;
  role_title: string;
  year_of_founding: number;
};
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

const companyCreateUrl = `${baseUrl}/v2/company/store`;

export const createCompany = async (
  payload: CreateCompanyPayloadType,
  token: string
) => {
  const userData = await axios.post<
    CreateCompanyPayloadType,
    { body: CreatedCompanyType }
  >(companyCreateUrl, payload, { headers: { Authorization: token } });
  return {
    id: userData,
  };
};
