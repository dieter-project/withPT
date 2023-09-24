<<<<<<< HEAD
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { useSession, signIn, signOut } from "next-auth/react";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };
=======
import NextAuth from "next-auth"
import { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
>>>>>>> 37000fc03dcdd13e9b232aee594ca46978b7e8e9
