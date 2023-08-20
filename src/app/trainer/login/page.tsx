"use client";
import styled from "styled-components";

const Wrap = styled.div`
  background-color: yellow;
`;

export default async function Login() {
  return (
    <div className="Wrap">
      <div>
        <div className="button-wrap">
          <button>카카오로 시작하기</button>
          <button>카카오로 시작하기</button>
          <span>문의하기</span>
        </div>
      </div>
    </div>
  );
}
