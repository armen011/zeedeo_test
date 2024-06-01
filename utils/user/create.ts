import axios from "axios";

type CreateUserPayloadType = {
  first_name: string;
  last_name: string;
  email: string;
  profile_id: number;
  gender: number;
  email_verified: number;
};

type CreatedUserType = {
  first_name: "abc";
  last_name: "efg";
  email: "noposox918@asa.com";
  profile_id: 1;
  email_verified: 0;
  username: "abc1312";
  updated_at: "2024-06-01T14:10:46.000000Z";
  created_at: "2024-06-01T14:10:46.000000Z";
  id: 304;
  genderNavigation: null;
};
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

const userCreateUrl = `${baseUrl}/users`;

export const createUser = async (payload: CreateUserPayloadType) => {
  const userData = await axios.post<
    CreateUserPayloadType,
    { body: { user: CreatedUserType } }
  >(userCreateUrl, payload);
  return {
    id: userData,
  };
};
