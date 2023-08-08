import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "940133886255-j0fm3qm5g8p7e6uiv8a591jt14eoiauk.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // 원하는 소셜 provider를 같은 방식으로 추가
  ],
});
