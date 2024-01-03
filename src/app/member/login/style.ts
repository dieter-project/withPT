import styled from "styled-components"

export const LogoWrap = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    margin: 5rem auto;
  }
`
export const LogninButton = styled.button`
  width: 100%;
  height: 56px;
  text-align: center;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
`

export const KakaoLoginButton = styled(LogninButton)`
  background-color: #FEE500;
  &::before {
    display: block;
    content: "";
    width: 1.5rem;
    height: 1.5rem;
    background: url(/svgs/icon_kakao.svg) no-repeat;
    background-position: center;
    background-size: contain;
  }
`

export const GoogleLoginButton = styled(LogninButton)`
  border: 1px solid var(--border-gray300);
  &::before {
    display: block;
    content: "";
    width: 1.375rem;
    height: 1.375rem;
    background: url(/svgs/icon_google.svg) no-repeat;
    background-position: center;
    background-size: contain;
  }
`

export const LoginButtonWrap = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
`