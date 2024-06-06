import { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth, { DefaultSession } from "next-auth";

type AuthResponseType = {};

declare module "next-auth" {
  interface Session {
    user: {
      token?: string;
      email?: string;
      isOnBoarded?: boolean;
      isCompany?: boolean;
      profileId?: number;
      profileType?: string;
    } & DefaultSession["user"];
  }
  interface User extends AuthResponseType {
    accessToken: string;
    idToken: string;
    accessTokenExpiration: number;
    refreshToken: string | undefined;
    remember: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    Access: string | undefined;
    Bearer: string | undefined;
    Refresh: string | undefined;
    Expiration: number | undefined;
    email: string | undefined;
  }
}
