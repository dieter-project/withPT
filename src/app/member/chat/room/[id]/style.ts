import styled from "styled-components"

export const ChatRoomWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ChatBodySection = styled.section`
  width: 100%;
  padding: 1.5rem 1rem;
  flex: 3;
` 

export const ChatBottomSection = styled.section`
  width: 100%;
  height: auto;
  /* flex: 1; */
  background-color: var(--purple50);
  /* position: fixed;
  bottom: 0;
  left: 0; */
`
export const ChatInputArea = styled.div`
  width: 100%;
  height: auto;
  padding: 0.625rem 1rem;
  background-color: var(--purple50);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ChatFunction = styled.div<{$show: boolean;}>`
  width: 100%;
  height: ${props => props.$show ? "auto" : "0"};
  overflow: ${props => props.$show ? "auto" : "hidden"};
  margin-bottom: ${props => props.$show ? "1rem" : "0"};
  display: flex;
  align-items: center;
  justify-content: space-around; 

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.875rem;
  }
`

export const ChatFunctionIcon = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 60%;
    height: 60%;
    object-fit: contain;
  }
`
export const ChatFunctionText = styled.div`
  font-size: 0.75rem;
`
export const ChatInput = styled.textarea`
  width: 100%;
  border-radius: 2rem;
  padding: 0.5rem;
`

export const ChatFunctionButton = styled.div`
  width: 1.875rem;
  height: 1.875rem;
`

export const ChatSubmitButton = styled.button`
  width: 1.875rem;
  height: 1.875rem;
  overflow: hidden;
  text-indent: -999px;
  background: url('/svgs/icon_chat_submit.svg') no-repeat;
  background-position: center;
`