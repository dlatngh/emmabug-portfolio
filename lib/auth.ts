import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
    callbacks: {
        signIn({ profile }) {
            const allowedEmail = process.env.EMAIL as string
            if (profile?.email?.endsWith(allowedEmail)) {
                return true; // Allow sign-in
            }
            return false;
        }
    }
})