import { logInUser } from "@/utils/auth/sign-in";
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
        const basInfo = await getUserDetails(data.idToken);
        return {
          email: basInfo.email,
          id: `${basInfo.id}`,
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
    signIn: "/auth/sign-in",
    error: "/not-found",
  },
  callbacks: {
    async jwt({ token, user }) {
      const Access = user ? `${user.accessToken}` : token.Access;
      const Bearer = user ? `${user.idToken}` : token.Bearer;
      const Refresh = user?.remember ? user.refreshToken : token.Refresh;

      const Expiration = user ? user.accessTokenExpiration : token.Expiration;

      if (!Access || !Bearer) {
        throw new Error("Access token is missing");
      }

      return { ...token, Access, Refresh, Bearer, Expiration };
    },
    async session({ session, token, user }) {
      const Access = user ? `${user.accessToken}` : token.Access;
      const Bearer = user ? `${user.idToken}` : token.Bearer;

      if (!Access || !Bearer) {
        return session;
      }
      const basInfo = await getUserDetails(Bearer);

      return {
        ...session,
        user: {
          email: basInfo.email,
          name: basInfo.name,
          isOnBoarded: basInfo.isOnboarded,
          token: Bearer,
        },
      };
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
