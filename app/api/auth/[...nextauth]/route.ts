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
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        try {
          return { email: "", id: "" };
        } catch (err) {
          return null;
        }
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
    // async jwt({ token, user }) {
    //   const Access = user ? `${user.access_token}` : token.Access;
    //   const Bearer = user ? `Bearer ${user.id_token}` : token.Bearer;
    //   const Refresh = user ? `${user.refresh_token}` : token.Refresh;
    //   if (!Access || !Refresh || !Bearer) {
    //     throw new Error("Access token is missing");
    //   }
    //   try {
    //     // get tenant and also check if the accessToken is valid or not
    //     const { tenant } = await Utils.getUserDetails({ Access, Bearer });
    //     return { ...token, Access, Refresh, Bearer, tenant };
    //   } catch (err) {
    //     try {
    //       // refresh access and id tokens
    //       const newTokens = await Utils.refreshAccessToken(Refresh);
    //       const { tenant } = await Utils.getUserDetails({
    //         Access: newTokens.Access,
    //         Bearer: newTokens.Bearer,
    //       });
    //       return { ...token, ...newTokens, tenant };
    //     } catch (refreshErr) {
    //       throw new Error("Unable to refresh access token");
    //     }
    //   }
    // },
    // async session({ session, token, user }) {
    //   const Access = user ? `${user.access_token}` : token.Access;
    //   const Bearer = user ? `Bearer ${user.id_token}` : token.Bearer;
    //   const Refresh = user ? `${user.refresh_token}` : token.Refresh;
    //   if (!Access || !Refresh || !Bearer) {
    //     return session;
    //   }
    //   try {
    //     const userDetails = await Utils.getUserDetails({ Access, Bearer });
    //     return {
    //       ...session,
    //       user: {
    //         ...session.user,
    //         ...userDetails,
    //         accessToken: Access,
    //         bearerToken: Bearer,
    //       },
    //     };
    //   } catch (err) {
    //     throw new Error("Unable to get user details");
    //   }
    // },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
