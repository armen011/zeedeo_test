import axios from "axios";

type CreateCandidatePayloadType = {
  interested_job: string;
  location_id: number;
  visa_status_id: number;
  status_id: number;
  goals: number[];
  job_plateforms: number[];
};

type CreatedCandidateType = {
  id: number;
};

type UpdateUserNamePayloadType = {
  first_name: string;
  last_name: string;
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
const candidateCreateUrl = `${baseUrl}/v2/candidate/store-candidate`;
const candidatePictureUploadUrl = `${baseUrl}/on-boarding/candidate/{{candidateId}}/profile-pic`;
const updateUsernameUrl = `${baseUrl}/update-name`;

export const createCandidate = async ({
  payload,
  token,
  file,
}: {
  payload: CreateCandidatePayloadType;
  token: string;
  file: string;
}) => {
  const imageData = await fetch(file);
  const fileBlob = await imageData.blob();
  const uploadFile = new File([fileBlob], "File name", { type: "image/png" });

  const formData = new FormData();
  formData.set("file", uploadFile);

  const candidateData = await axios.post<
    CreateCandidatePayloadType,
    { data: { body: CreatedCandidateType } }
  >(candidateCreateUrl, payload, { headers: { Authorization: token } });

  const responseData = await axios.post<FormData, { body: {} }>(
    candidatePictureUploadUrl.replace(
      "{{candidateId}}",
      `${candidateData.data.body.id}`
    ),
    formData,
    { headers: { Authorization: token } }
  );

  return responseData;
};
