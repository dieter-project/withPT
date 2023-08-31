import { getPackedSettings } from "http2";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { useSession, signIn, signOut } from "next-auth/react";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  // callbacks: {
  //   async signIn(user, account, profile) {
  //     // 사용자가 로그인하면서 백엔드로 인증 코드를 전송하는 로직을 수행합니다.
  //     const response = await fetch("/api/google/callback", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ code: account.authorizationCode }),
  //     });

  //     const data = await response.json();
  //     if (data.error) {
  //       console.error(
  //         "Error exchanging auth code for access token:",
  //         data.error,
  //       );
  //       return false; // 로그인 실패
  //     }

  //     return true; // 로그인 성공
  //   },
  // },
});

export { handler as GET, handler as POST };
