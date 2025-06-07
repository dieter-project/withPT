import { Input } from "@/styles/Input";
import React from "react";
import { ModalContainer, ModalTitle } from "@/styles/components/Modal";
import { DietRecord } from "@/types/member/record";
import { Button } from "@/styles/Button";
import styled from "styled-components";


interface ModalProps {
  setDisplayModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleWithdraw: () => void
}

const ModalWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  > div {
    width: 100%;
  }
`

const RedMark = styled.span`
  display: block;
  width: 2.75rem;
  height: 2.75rem;
  margin: 1rem auto 0.825rem;
  background: url(/svgs/icon_withdraw_mark.svg);
`

const WithdrawConfirmText = styled.div`
  font-size: 1.125rem;
  color: var(--block-red);
  text-align: center;
  font-weight: var(--font-semibold);
  margin-bottom: 2.25rem;
`

const WithdrawExplanText = styled.p`
  text-align: center;
`

const BackButton = styled.button`
  width: 100%;
  height: 3.5rem;
  color: var(--font-gray600);
`

export const WithdrawModal = ({
  setDisplayModal,
  handleWithdraw
}: ModalProps) => {

  const handleOnClose = () => {
    setDisplayModal(false);
  };

  return (
    <ModalContainer>
      <div className="modal">
        <ModalWrap>
          <div>
            <RedMark></RedMark>
            <WithdrawConfirmText>정말 탈퇴하시겠습니까?</WithdrawConfirmText>
            <WithdrawExplanText>
              위피티를 탈퇴할 경우, 저장된 모든 정보가  <br />
              삭제되며 휴대전화의 모든 대화 기록이 삭제되며  <br />
              복구되지 않습니다.
            </WithdrawExplanText>
          </div>
          <div>
            <Button $variant="primary" onClick={handleWithdraw}>계정 삭제하기</Button>
            <BackButton onClick={() => setDisplayModal(false)}>돌아가기</BackButton>
          </div>
        </ModalWrap>
      </div>
      <div
        className={`overlay`}
        onClick={handleOnClose}
      ></div>
    </ModalContainer>
  );
};
