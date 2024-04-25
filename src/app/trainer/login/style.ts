import styled from "styled-components";
import Image from "next/image";

export const LogoWrap = styled.div`
  text-align: center;
  margin: 130px 0 100px;
`;

export const LoginButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  gap: 0.5rem;
`;

export const LogninButton = styled.button`
  width: 100%;
  height: 56px;
  text-align: center;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
`;

export const WePTLogoImg = styled(Image)`
  margin: 0 auto;
`;

export const KakaoLoginButton = styled(LogninButton)`
  background-color: var(--yellow);
  &::before {
    display: block;
    content: "";
    width: 1.5rem;
    height: 1.5rem;
    background: url(/svgs/icon_kakao.svg) no-repeat center;
    background-size: contain;
  }
`;

export const GoogleLoginButton = styled(LogninButton)`
  border: 1px solid var(--border-gray);
  &::before {
    display: block;
    content: "";
    width: 1.375rem;
    height: 1.375rem;
    background: url(/svgs/icon_google.svg) no-repeat center;
    background-size: contain;
  }
`;
