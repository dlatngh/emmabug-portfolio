import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    signIn({ profile }) {
      const whitelistEmail = process.env.WHITELIST_EMAIL as string;
      if (profile?.email?.endsWith(whitelistEmail)) {
        return true; // Allow sign-in
      }
      return false;
    },
  },
});
