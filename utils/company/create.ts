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
  name: string;
  industry_id: number;
  location_id: number;
  year_of_founding: number;
  range_of_employees: number;
  role_title: string;
  verified: true;
  updated_at: string;
  created_at: string;
  id: number;
  post_type: string;
  goal: string[];
};
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

const companyCreateUrl = `${baseUrl}/v2/company/store`;

const companyLogoUploadUrl = `${baseUrl}/company/{{companyId}}/logo`;

export const uploadImage = async (
  formData: FormData,
  token: string,
  companyId: number
) => {
  const responseData = await axios.post<FormData, { body: CreatedCompanyType }>(
    companyLogoUploadUrl.replace("{{companyId}}", `${companyId}`),
    formData,
    { headers: { Authorization: token } }
  );

  return responseData;
};

export const createCompany = async ({
  payload,
  token,
  file,
}: {
  payload: CreateCompanyPayloadType;
  token: string;
  file: string;
}) => {
  const imageData = await fetch(file);
  const fileBlob = await imageData.blob();
  const uploadFile = new File([fileBlob], "File name", { type: "image/png" });

  const formData = new FormData();
  formData.set("file", uploadFile);

  const companyData = await axios.post<
    CreateCompanyPayloadType,
    { data: { body: CreatedCompanyType } }
  >(companyCreateUrl, payload, { headers: { Authorization: token } });

  console.log("Id====>", companyData);

  const responseData = await axios.post<FormData, { body: CreatedCompanyType }>(
    companyLogoUploadUrl.replace(
      "{{companyId}}",
      `${companyData.data.body.id}`
    ),
    formData,
    { headers: { Authorization: token } }
  );

  return responseData;
};
