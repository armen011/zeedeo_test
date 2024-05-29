import { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth, { DefaultSession } from "next-auth";

type AuthResponseType = {};

declare module "next-auth" {
  interface Session {
    user: {
      accessToken?: string;
      bearerToken?: string;
      email?: string;
    } & DefaultSession["user"];
  }
  interface User extends AuthResponseType {}
}

declare module "next-auth/jwt" {
  interface JWT {
    Access: string | undefined;
    Bearer: string | undefined;
    Refresh: string | undefined;
  }
}
