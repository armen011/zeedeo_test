import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

const getGoalsUrl = `${baseUrl}/goals?category={{type}}`;

type ResponseString = string | null | undefined;

type GoalsDataType = {
  id: number;
  goal: ResponseString;
  type: "company";
};

export const getGoals = async (
  token: string,
  type: "company" | "candidate" = "company"
) => {
  const goals = await axios.get<{ body?: GoalsDataType[] }>(
    getGoalsUrl.replace("{{type}}", type),
    {
      headers: { Authorization: token },
    }
  );
  return goals.data.body;
};
