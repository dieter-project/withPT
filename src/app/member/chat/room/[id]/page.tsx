"use client";

import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Plus from "../../../../../../public/svgs/icon_plus.svg";
import {
  ChatBodySection,
  ChatBottomSection,
  ChatFunction,
  ChatFunctionButton,
  ChatFunctionIcon,
  ChatFunctionText,
  ChatInput,
  ChatInputArea,
  ChatRoomWrap,
  ChatSubmitButton,
} from "./style";
import SockJS from "sockjs-client";
import { DietShareModal } from "@/components/member/chat/DietShareModal";
import { ChatBody } from "@/components/member/chat/ChatBody";
import { TrainerRequestModal } from "@/components/member/chat/TrainerRequestModal";
import { MemberRequestModal } from "@/components/member/chat/MemberRequestModal";
import { FileInput } from "@/styles/Input";
import { reqGetChatRoomContent } from "@/services/member/chat";
import { useWebSocketChat } from "@/hooks/useStompSocket";
import { set } from "date-fns";
// import useStompSocket from "@/hooks/useStompSocket";

// let socket = new SockJS("");

const page = ({ params }: { params: { id: number } }) => {
  const [chatRooms, setChatRooms] = useState([]);
  const [showFunction, setShowFunction] = useState(false);
  const [dietModal, setDietModal] = useState(false);
  const [trainerRequestModal, setTrainerRequestModal] = useState(false);
  const [memberRequestModal, setMemberRequestModal] = useState(false);
  const { messages, sendMessage } = useWebSocketChat(params.id);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      sendMessage("User1", input);
      setInput("");
    }
  };

  const textareaRef = useRef<null | HTMLTextAreaElement>(null);
  const fileInputRef = useRef<null | HTMLInputElement>(null);

  const handleResizeHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    handleResizeHeight();
  };

  const getChatRoomContent = async (roomId: number) => {
    const response = await reqGetChatRoomContent(roomId);
    console.log("response: ", response);
  };

  useEffect(() => {
    getChatRoomContent(params.id);
  }, []);

  return (
    <>
      {dietModal && (
        <DietShareModal
          displayModal={dietModal}
          setDisplayModal={setDietModal}
        />
      )}
      {trainerRequestModal && (
        <TrainerRequestModal
          displayModal={trainerRequestModal}
          setDisplayModal={setTrainerRequestModal}
        />
      )}
      {memberRequestModal && (
        <MemberRequestModal
          displayModal={memberRequestModal}
          setDisplayModal={setMemberRequestModal}
        />
      )}
      <ChatRoomWrap>
        <ChatBody />
        <ChatBottomSection>
          <ChatInputArea>
            <ChatFunctionButton onClick={() => setShowFunction(!showFunction)}>
              <Plus fill="#444444" width="1.375rem" height="1.375rem" />
            </ChatFunctionButton>
            <div>
              <ChatInput
                placeholder="메시지를 입력하세요."
                rows={1}
                ref={textareaRef}
                onChange={e => handleTextChange(e)}
              />
            </div>
            <ChatSubmitButton onClick={handleSend}>전송</ChatSubmitButton>
          </ChatInputArea>
          {showFunction && (
            <ChatFunction $show={showFunction}>
              <div onClick={() => fileInputRef.current?.click()}>
                <ChatFunctionIcon>
                  <img src="/svgs/icon_chat_photo.svg" alt="" />
                </ChatFunctionIcon>
                <ChatFunctionText>사진 업로드</ChatFunctionText>
                <FileInput type="file" ref={fileInputRef} />
              </div>
              <div onClick={() => setDietModal(true)}>
                <ChatFunctionIcon>
                  <img src="/svgs/icon_chat_diet.svg" alt="" />
                </ChatFunctionIcon>
                <ChatFunctionText>식단전송</ChatFunctionText>
              </div>
              <div onClick={() => setTrainerRequestModal(true)}>
                <ChatFunctionIcon>
                  <img src="/svgs/icon_chat_class.svg" alt="" />
                </ChatFunctionIcon>
                <ChatFunctionText>수업요청</ChatFunctionText>
              </div>
              <div onClick={() => setMemberRequestModal(true)}>
                <ChatFunctionIcon>
                  <img src="/svgs/icon_chat_classchange.svg" alt="" />
                </ChatFunctionIcon>
                <ChatFunctionText>수업변경 요청</ChatFunctionText>
              </div>
            </ChatFunction>
          )}
        </ChatBottomSection>
      </ChatRoomWrap>
    </>
  );
};

export default page;
