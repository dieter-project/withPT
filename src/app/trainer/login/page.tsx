"use client";
import styled from "styled-components";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const LoginWrap = styled.div`
  background-color: beige;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const ContentBody = styled.div`
  height: 80rem;
  padding: 15rem 1.6rem 3.2rem 1.6rem;
  text-align: center;
  margin: 0 auto;
`;

const KaKaoLoginButton = styled.button`
  display: block;
  width: 100%;
  padding: 1.3rem 0;
  margin-bottom: 0.6rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #fee500;
  font-size: 1.1rem;
  font-weight: bold;
`;

const GoogleLoginButton = styled.button`
  display: block;
  padding: 1.3rem 0;
  width: 100%;
  border: none;
  border-radius: 0.5rem;
  background-color: white;
  color: black;
  font-size: 1.1rem;
  font-weight: bold;
`;

const AskIfMember = styled.div`
  color: #acacac;
  font-size: 0.8rem;
`;

const LinkToMember = styled(Link)`
  color: #444444;
  font-weight: bold;
  font-size: 0.9rem;
`;

export default function Login() {
  const { data: session } = useSession();

  //   try {
  //     // 구글 로그인 프로세스 수행
  //     const googleUser = await performGoogleLogin();

  //     // 서버로 userType과 구글 사용자 정보 전송
  //     const response = await sendUserInfoToServer(userType, googleUser);

  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log(data.message); // '로그인 성공'
  //       console.log('사용자 유형:', data.userType); // 'trainer' 또는 'member'
  //     } else {
  //       console.error('로그인 실패');
  //     }
  //   } catch (error) {
  //     console.error('에러 발생', error);
  //   }
  // };

  if (session && session.user) {
    return (
      <>
        <div>{session.user.name}님 로그인됨</div>
        <button onClick={() => signOut()}>Sign out</button>
        <Link href="/trainer/main">메인화면</Link>
      </>
    );
  } else
    return (
      <LoginWrap>
        <ContentBody>
          <div>
            <div
              style={{
                backgroundColor: "#D9D9D9",
                width: "80%",
                margin: "0 auto",
                height: "5rem",
              }}
            >
              {" "}
              ?
            </div>
            <div style={{ marginTop: "8rem" }}>
              <KaKaoLoginButton>카카오로 시작하기</KaKaoLoginButton>
              <GoogleLoginButton onClick={() => signIn()}>
                {/* onClick={() => signInAndSendUserType('member')} */} 구글로
                시작하기
              </GoogleLoginButton>

              <div
                style={{
                  color: "#666666",
                  marginTop: "0.5rem",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                문의하기
              </div>
            </div>
            <div style={{ marginTop: "7rem" }}>
              <AskIfMember>혹시 회원이신가요?</AskIfMember>
              <LinkToMember href="member/login">회원 회원가입</LinkToMember>
            </div>
          </div>
        </ContentBody>
      </LoginWrap>
    );
}
