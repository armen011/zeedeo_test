import { logInUser } from "@/utils/auth/sign-in";
import { getCandidateData } from "@/utils/candidate/get";
import { getCompanyData } from "@/utils/company/get";
import { getUserDetails } from "@/utils/user/details";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials-provider",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
        remember: { label: "remember", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.email) {
          return null;
        }

        const data = await logInUser(credentials);
        return {
          email: credentials.email,
          id: `${credentials.email}`,
          accessToken: data.accessToken,
          idToken: data.idToken,
          accessTokenExpiration: data.accessTokenExpiration,
          refreshToken: data.refreshToken,
          remember: Boolean(credentials?.remember),
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/sign-up",
    error: "/not-found",
  },
  callbacks: {
    async jwt({ token, user }) {
      const Access = user ? `${user.accessToken}` : token.Access;
      const Bearer = user ? `${user.idToken}` : token.Bearer;
      const Refresh = user?.remember ? user.refreshToken : token.Refresh;
      const email = user ? `${user.email}` : token.email;

      const Expiration = user ? user.accessTokenExpiration : token.Expiration;

      if (!Access || !Bearer) {
        throw new Error("Access token is missing");
      }

      return { ...token, Access, Refresh, Bearer, Expiration, email };
    },
    async session({ session, token, user }) {
      const Access = user ? `${user.accessToken}` : token.Access;
      const Bearer = user ? `${user.idToken}` : token.Bearer;

      if (!Access || !Bearer) {
        return session;
      }
      const basInfo = await getUserDetails(Bearer);

      if (basInfo.isOnboarded) {
        if (basInfo.isCompany) {
          const companyData = await getCompanyData(Bearer);

          return {
            ...session,
            user: {
              isOnBoarded: basInfo.isOnboarded,
              token: Bearer,
              isCompany: true,
              profileId: basInfo.profileId,
              email: companyData.email,
              name: companyData.name,
              profileType: basInfo.profileType,
              image: companyData.picture,
            },
          };
        } else {
          const candidateData = await getCandidateData(Bearer);

          return {
            ...session,
            user: {
              isOnBoarded: basInfo.isOnboarded,
              token: Bearer,
              profileId: basInfo.profileId,
              email: basInfo.email,
              isCompany: false,
              profileType: basInfo.profileType,
              name: basInfo.name,
              image: candidateData.image,
            },
          };
        }
      }

      return {
        ...session,
        user: {
          isOnBoarded: false,
          email: basInfo.email,
          token: Bearer,
          profileId: basInfo.profileId,
          profileType: basInfo.profileType,
          isCompany: basInfo.isCompany,
        },
      };
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
