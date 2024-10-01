'use client';

import { LabelTitle } from '@/styles/Text';
import React, { useEffect, useState } from 'react'
import Plus from '../../../../public/svgs/icon_plus.svg'
import { useRouter } from 'next/navigation';
import ChatHeader from '@/components/member/chat/ChatHeader';
import { BaseContentWrap, ButtonAreaFixed } from '@/styles/Layout';
import { Checkbox } from '@/styles/Input';
import { Button } from '@/styles/Button';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { ChatDate, ChatTrainerList, ChatTrainerListInfo, ChatTrainerListWrap, EmptyChat, ExclamationMark, NewChatButton, ProfileCircle } from './style';
import { getChatRooms, postChatRoom } from '@/services/member/chat';
import { useAppSelector } from '@/redux/hooks';
import { TrainersInfo } from '@/types/member/trainer';
import { getPersonalTrainers } from '@/services/member/training';

interface ChatRooms {
  roomId: number,
  identifier: string,
  roomType: string,
  roomName: string,
  notReadChat: number,
  lastReadChatId: number,
  lastChat: string,
  lastModifiedDate: string
}
const page = () => {
  const [chatRooms, setChatRooms] = useState<ChatRooms[]>([]);
  const [trainerList, setTrainerList] = useState([]);
  const [exitMode, setExitMode] = useState(false);
  const [deleteChatRooms, setDeleteChatRooms] = useState([]);
  const memberInfo = useAppSelector((state) => state.member)
  console.log('states: ', memberInfo);

  const router = useRouter();
  const title = '채팅'

  const handleGetChats = async () => {
    try {
      const response = await getChatRooms()
      const { data: { data } } = response;
      console.log('data: ', data);
      setChatRooms(data.roomList)
    } catch (error) {

    }
  }

  const handleStartChat = async (trainer: TrainersInfo) => {
    const response = await postChatRoom({
      id: 13,
      role: "MEMBER",
      roomName: trainer.trainer.name,
      identifier: `TRAINER_${trainer.trainer.id}&MEMBER_13`
    })
    setTrainerList(response.data.data)
  }

  const handleGetPersnalTrainer = async () => {
    if (memberInfo.id) {
      const response = await getPersonalTrainers(memberInfo.id)
      console.log('response: ', response);

    }
  }

  useEffect(() => {
    handleGetChats();
    handleGetPersnalTrainer();
  }, [])

  return (
    <>
      <ChatHeader title={title} back={false} />
      <BaseContentWrap>
        {chatRooms.length === 0
          ? <>
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
                    {trainerList.map(trainer => {
                      return (
                        <ChatTrainerList>
                          <div>
                            <ProfileCircle>
                              <img src="" alt="" />
                            </ProfileCircle>
                            <ChatTrainerListInfo>
                              <div>트레이너</div>
                              <div>센터</div>
                            </ChatTrainerListInfo>
                          </div>
                          <div>
                            <NewChatButton onClick={() => handleStartChat(trainer)}>
                              <Plus fill="#6C69FF" width="0.75rem" height="0.75rem" />
                              <div>채팅</div>
                            </NewChatButton>
                          </div>
                        </ChatTrainerList>
                      )
                    })}
                  </ul>
                </div>
              </ChatTrainerListWrap>
            </section>
          </>
          : <>
            <section>
              <div>
                <ul>
                  {chatRooms?.map(room => {
                    return (
                      <ChatTrainerList key={room.roomId} onClick={() => router.push(`/member/chat/room/${room.roomId}`)}>
                        <div>
                          {exitMode &&
                            <Checkbox>
                              <input type="checkbox" />
                            </Checkbox>}
                          <ProfileCircle>
                            <img src="" alt="" />
                          </ProfileCircle>
                          <ChatTrainerListInfo>
                            <div>{room.roomName}</div>
                            <div>{room.lastChat}</div>
                          </ChatTrainerListInfo>
                        </div>
                        <div>
                          <ChatDate>
                            <div>{format(new Date(room.lastModifiedDate), "hh:mm", { locale: ko })}</div>
                          </ChatDate>
                        </div>
                      </ChatTrainerList>
                    )
                  })}
                </ul>
              </div>
            </section>
            {exitMode &&
              <ButtonAreaFixed $nav>
                <Button $variant='primary'>채팅방 나가기</Button>
              </ButtonAreaFixed>
            }
          </>
        }

      </BaseContentWrap>
    </>
  )
}

export default page