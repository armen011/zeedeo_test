import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

const getGoalsUrl = `${baseUrl}/goals?category=company`;

type ResponseString = string | null | undefined;

type GoalsDataType = {
  id: number;
  goal: ResponseString;
  type: "company";
};

export const getGoals = async (token: string) => {
  const goals = await axios.get<{ body?: GoalsDataType[] }>(getGoalsUrl, {
    headers: { Authorization: token },
  });
  return goals.data.body;
};
