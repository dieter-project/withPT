"use client";
import styled from "styled-components";

const Wrap = styled.div`
  background-color: yellow;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const ContentBody = styled.div`
  background-color: yellow;
`;

export default async function Login() {
  return (
    <Wrap>
      <div>
        <div className="button-wrap">
          <button>카카오로 시작하기</button>
          <button>카카오로 시작하기</button>
          <span>문의하기</span>
        </div>
      </div>
    </Wrap>
  );
}
