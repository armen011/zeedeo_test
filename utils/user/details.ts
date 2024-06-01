import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

const userLogInUrl = `${baseUrl}/user`;
const companyLogInUrl = `${baseUrl}/logged-in-company`;

type ResponseString = string | null | undefined;
type ResponseNumber = number | null | undefined;

type UserType = {
  body: {
    id: number;
    first_name: ResponseString;
    middle_name: ResponseString;
    last_name: ResponseString;
    dob: ResponseString;
    email: string;
    email_verified: number;
    profile_id: number;
    provider: ResponseString;
    provider_id: ResponseNumber;
    created_at: ResponseString;
    updated_at: ResponseString;
    onboarded: 0 | 1;
    gender: ResponseNumber;
    display: number;
    username: string;
    genderNavigation: ResponseNumber;
    profile: {
      id: number;
      name: string;
    };
  };
};

export const getUserDetails = async (idToken: string) => {
  const userData = await axios.get<UserType>(userLogInUrl, {
    headers: { Authorization: idToken },
  });
  return {
    id: userData.data.body.id,
    email: userData.data.body.email,
    name: userData.data.body.first_name,
    isOnboarded: userData.data.body.onboarded === 1,
  };
};

// const companyData = await axios.get<UserType>(companyLogInUrl, {
//   headers: { Authorization: idToken },
// });
// return {
//   id: companyData.data.body.id,
//   email: companyData.data.body.email,
//   name: companyData.data.body.first_name,
//   isOnboarded: companyData.data.body.onboarded === 1,
// };
