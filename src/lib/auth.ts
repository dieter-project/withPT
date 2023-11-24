import { MemberState } from "@/redux/reducers/memberSlice";
import axios from "axios";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import { useSelector } from "react-redux";


export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID as string,
      clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    // async jwt({ token, account, user }) { 
    //   const member = useSelector((state: MemberState) => state)
    //   console.log('member: ', member);
    //   // NextAuth의 Account Models과 User Models를 정보를 조합하여 NextAuth에서 유지하는 토큰
    //   if (account) {
    //     console.log('account: ', account);
    //     token.accessToken = account.access_token 
    //     token.id = user.id
    //   }
    //   return token
    // },
    async signIn({user, account, profile}) {
      console.log('profile: ', profile);
      console.log('account: ', account?.access_token);
      console.log('user: ', user);
      // const role = window.sessionStorage.get('role')
      // const response = await axios.post('', {
      //   authorizationCode: account?.access_token,
      //   role
      // })
      // if (response) {
      //   // axios.defaults.headers.common['Authorization'] = `Bearer ${response.token}`;
      //   return true;
      // } else {
      //   return false;
      // } 
      // if (account?.provider === "kakao") {
      //   return profile
      // }
      return true 
    },
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
        },
      };
    },
  },
  
  pages: {
    signIn: "/", //로그인 후 리다이렉트
  },
};