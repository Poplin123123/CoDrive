import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import { AdapterUser } from "next-auth/adapters";
import { Session } from "next-auth";

export default NextAuth({
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/login",
    // error: "/oauth/error",
  },
  callbacks: {
    session: ({ session, token }) => {
      console.log(session, "session");
      console.log(token, "token");

      return session; // The return type will match the one returned in `useSession()`
    },
  },

  jwt: {
    secret: process.env.NEXT_AUTH_SECRET,
  },
});

// interface JWTCallBackInput {
//   token: JWT;
//   user?: User | AdapterUser;
//   account?: Account | null;
//   profile?: Profile;
//   isNewUser?: boolean;
// }

// export interface SessionCallBackInput extends JWTCallBackInput {
//   session: Session;
// }

// async function CloudProviderSession({ session, token }: SessionCallBackInput) {
//   session.accessToken = token.accessToken as string;
//   session.refreshToken = token.refreshToken as string;
//   session.accessTokenExpires = token.accessTokenExpires as number;
//   session.decoded = decode(token.accessToken as string);
//   session.error = !!token?.error;
//   return session;
// }
