'use client';

import Header from "@/components/Header";
import { BaseContentWrap, ContentSection } from "@/styles/Layout";
import { LabelTitle } from "@/styles/Text";
import { GoalIcon, GoalListItem, GoalValue, MenuList, NextArrow, ProfileWrap } from "./styles";
import { useRouter } from "next/navigation";
import { logout } from "@/services/member/auth";
import { useEffect, useState } from "react";
import { getMemberInfo } from "@/services/member/member";
import { MemberInfo } from "@/types/member/member";
import { convertGoal } from "@/utils/convertGoal";

const page = () => {
  const title = "마이페이지"
  const router = useRouter();
  const [memberInfo, setMemberInfo] = useState<MemberInfo>({
    id: 0,
    email: "",
    authProvider: "",
    loginType: "",
    name: "",
    height: 0,
    weight: 0,
    birth: "",
    sex: "",
    imageUrl: "",
    dietType: "",
    exerciseFrequency: "",
    targetWeight: 0,
    role: "",
    joinDate: "",
    lastModifiedDate: ""
  })

  const getMember = async () => {
    try {
      const { data: { data } } = await getMemberInfo();
      setMemberInfo(data)
    } catch (error) {
      console.log('error: ', error);
    }
  }

  useEffect(() => {
    getMember()
  }, [])

  
  return (
    <>
      <Header title={title} back={true} />
      <BaseContentWrap>
        <ContentSection>
          <ProfileWrap>
            <div className="profile-name">
              <div>{memberInfo.name}님!</div>
              <p>오늘도 힘찬 하루 보내세요!</p>
            </div>
            <div className="profile-img" onClick={() => router.push('/member/mypage/edit/info')}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/McDonald%27s_Twitter_logo.png/200px-McDonald%27s_Twitter_logo.png" alt="" />
            </div>
          </ProfileWrap>
        </ContentSection>
        <ContentSection>
          <LabelTitle>내 목표</LabelTitle>
          <div>
            <ul>
              <li onClick={() => router.push('/member/mypage/edit/diet')}>
                <GoalListItem variant="purple">
                  <div>
                    <GoalIcon style={{
                      background: `url(/svgs/icon_diet_1.svg) no-repeat`,
                      backgroundSize: "1.5rem 1.5rem",
                      backgroundPosition: "center",
                      backgroundColor: "white"
                    }} />
                    <GoalValue>
                      <div>목표식단 수정하기</div>
                      <div>{convertGoal("diet", memberInfo.dietType)}</div>
                    </GoalValue>
                  </div>
                  <NextArrow></NextArrow>
                </GoalListItem>
              </li>
              <li onClick={() => router.push('/member/mypage/edit/workout')}>
                <GoalListItem variant="purple">
                  <div>
                    <GoalIcon style={{
                      background: `url(/svgs/icon_diet.svg) no-repeat`,
                      backgroundSize: "1.5rem 1.5rem",
                      backgroundPosition: "center",
                      backgroundColor: "white"
                    }} />
                    <GoalValue>
                      <div>운동목표 수정하기</div>
                      <div>{convertGoal("exercise", memberInfo.exerciseFrequency)}</div>
                    </GoalValue>
                  </div>
                  <NextArrow></NextArrow>
                </GoalListItem>
              </li>
              <li onClick={() => router.push('/member/mypage/edit/weight')}>
                <GoalListItem variant="purple">
                  <div>
                    <GoalIcon style={{
                      background: `url(/svgs/icon_weight.svg) no-repeat`,
                      backgroundSize: "1.5rem 1.5rem",
                      backgroundPosition: "center",
                      backgroundColor: "white"
                    }} />
                    <GoalValue>
                      <div>목표체중 수정하기</div>
                      <div>{memberInfo.targetWeight} kg</div>
                    </GoalValue>
                  </div>
                  <NextArrow></NextArrow>
                </GoalListItem>
              </li>
            </ul>
          </div>
        </ContentSection>
        <ContentSection>
          <ul>
            <MenuList>
              <div>공지사항</div>
              <NextArrow></NextArrow>
            </MenuList>
            <MenuList onClick={() => router.push('/member/mypage/account')}>
              <div>계정관리</div>
              <NextArrow></NextArrow>
            </MenuList>
          </ul>
        </ContentSection>
      </BaseContentWrap>
    </>
  )
}

export default page