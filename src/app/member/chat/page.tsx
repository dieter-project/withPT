"use client";

import { LabelTitle } from "@/styles/Text";
import React, { useEffect, useState } from "react";
import Plus from "../../../../public/svgs/icon_plus.svg";
import { useRouter } from "next/navigation";
import ChatHeader from "@/components/member/chat/ChatHeader";
import { BaseContentWrap, ButtonAreaFixed } from "@/styles/Layout";
import { Checkbox } from "@/styles/Input";
import { Button } from "@/styles/Button";
import { api } from "@/utils/axios";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import {
  ChatDate,
  ChatTrainerList,
  ChatTrainerListInfo,
  ChatTrainerListWrap,
  EmptyChat,
  ExclamationMark,
  NewChatButton,
  ProfileCircle,
} from "./style";
import { reqGetChatRoomContent, reqGetChatRooms, reqPostChatRoom } from "@/services/member/chat";
import { reqGetMemberInfo } from "@/services/member/member";
import { PtInfos } from "@/types/member/member";
import { getCookie } from "@/utils/cookie";

interface Partner {
  id: number
  name: string
  email: string
  role: string
  imageUrl: string
  birth: string
  sex: string
}
interface ChatRooms {
  roomId: number;
  identifier: string;
  roomType: string;
  roomName: string;
  notReadChat: number;
  lastReadChatId: number;
  lastChat: string;
  lastModifiedDate: string;
  partner: Partner
}
const page = () => {
  const [chatRooms, setChatRooms] = useState<ChatRooms[]>([]);
  const [exitMode, setExitMode] = useState(false);
  const [ptInfos, setPtInfos] = useState<PtInfos[]>([]);
  const [deleteChatRooms, setDeleteChatRooms] = useState([]);

  const router = useRouter();
  const title = "채팅";

  const token = getCookie("access");

  const getMemberInfo = async () => {
    const {
      data: { data },
    } = await reqGetMemberInfo();
    setPtInfos(data.ptInfos);
  };

  const handleGetChats = async () => {
    try {
      const {
        data: { data },
      } = await reqGetChatRooms();
      setChatRooms(data.roomList);
    } catch (error) {}
  };

  const handleCreateChatRoom = async (id: number) => {
    try {
      const response = await reqPostChatRoom({ id });
      if (response.status === 200) handleGetChats();
    } catch (error) {}
  };

  useEffect(() => {
    handleGetChats();
    getMemberInfo();
  }, []);

  return (
    <>
      <ChatHeader title={title} back={false} />
      <BaseContentWrap>
        {chatRooms.length <= 0 ? (
          <>
            <section>
              <EmptyChat>
                <ExclamationMark />
                <strong>시작한 채팅이 없어요</strong>
                <p>담당 트레이너와 채팅을 시작해보세요</p>
              </EmptyChat>
            </section>
            <section>
              <ChatTrainerListWrap>
                <LabelTitle>트레이너 목록</LabelTitle>
                <div>
                  <ul>
                    {ptInfos?.map((pt, idx) => (
                      <ChatTrainerList key={idx}>
                        <div>
                          <ProfileCircle>
                            <img src={pt.trainer.imageUrl} alt="" />
                          </ProfileCircle>
                          <ChatTrainerListInfo>
                            <div>{pt.trainer.name}트레이너</div>
                            <div>{pt.gym.name}</div>
                          </ChatTrainerListInfo>
                        </div>
                        <div>
                          <NewChatButton
                            onClick={() => handleCreateChatRoom(pt.trainer.id)}
                          >
                            <Plus
                              fill="#6C69FF"
                              width="0.75rem"
                              height="0.75rem"
                            />
                            <div>채팅</div>
                          </NewChatButton>
                        </div>
                      </ChatTrainerList>
                    ))}
                  </ul>
                </div>
              </ChatTrainerListWrap>
            </section>
          </>
        ) : (
          <>
            <section>
              <div>
                <ul>
                  {chatRooms?.map(room => {
                    return (
                      <ChatTrainerList
                        key={room.roomId}
                        onClick={() =>
                          router.push(`/member/chat/room/${room.roomId}`)
                        }
                      >
                        <div>
                          {exitMode && (
                            <Checkbox>
                              <input type="checkbox" />
                            </Checkbox>
                          )}
                          <ProfileCircle>
                            <img src={room.partner.imageUrl} alt="" />
                          </ProfileCircle>
                          <ChatTrainerListInfo>
                            <div>{room.roomName}</div>
                            <div>{room.lastChat}</div>
                          </ChatTrainerListInfo>
                        </div>
                        <div>
                          <ChatDate>
                            <div>
                              {format(
                                new Date(room.lastModifiedDate),
                                "hh:mm",
                                { locale: ko },
                              )}
                            </div>
                          </ChatDate>
                        </div>
                      </ChatTrainerList>
                    );
                  })}
                </ul>
              </div>
            </section>
            {exitMode && (
              <ButtonAreaFixed $nav>
                <Button $variant="primary">채팅방 나가기</Button>
              </ButtonAreaFixed>
            )}
          </>
        )}
      </BaseContentWrap>
    </>
  );
};

export default page;
