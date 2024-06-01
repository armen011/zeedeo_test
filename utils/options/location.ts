import axios from "axios";

type ResponseString = string | null | undefined;
type ResponseNumber = number | null | undefined;

export type LocationDataType = {
  id: number;
  state_name: ResponseString;
  country_name: ResponseString;
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

const getLocationUrl = `${baseUrl}/states`;

export const getLocation = async (token: string) => {
  const locations = await axios.get<{ body?: LocationDataType[] }>(
    getLocationUrl,
    {
      headers: { Authorization: token },
    }
  );
  console.log(locations.data.body);

  return locations.data.body;
};
