'use client';

import Header from "@/components/Header";
import { BaseContentWrap, ContentSection } from "@/styles/Layout";
import { LabelTitle } from "@/styles/Text";
import { GoalIcon, GoalListItem, GoalValue, MenuList, NextArrow, ProfileWrap } from "./styles";
import { useRouter } from "next/navigation";



const page = () => {
  const title = "마이페이지"
  const router = useRouter();

  return (
    <>
      <Header title={title} back={true}/>
      <BaseContentWrap>
        <ContentSection>
          <ProfileWrap>
            <div className="profile-name">
              <div>맥도날드님!</div>
              <p>오늘도 힘찬 하루 보내세요!</p>
            </div>
            <div className="profile-img">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/McDonald%27s_Twitter_logo.png/200px-McDonald%27s_Twitter_logo.png" alt="" />
            </div>
          </ProfileWrap>
        </ContentSection>
        <ContentSection>
          <LabelTitle>내 목표</LabelTitle>
          <div>
            <ul>
              <li>
                <GoalListItem variant="purple">
                  <div>
                    <GoalIcon style={{
                      background: `url(/svgs/icon_meal_1.svg) no-repeat`,
                      backgroundSize: "1.5rem 1.5rem",
                      backgroundPosition: "center",
                      backgroundColor: "white"
                    }} />
                    <GoalValue>
                      <div>목표식단 수정하기</div>
                      <div>탄단지 식단</div>
                    </GoalValue>
                  </div>
                  <NextArrow></NextArrow>
                </GoalListItem>
              </li>
              <li>
                <GoalListItem variant="purple">
                  <div>
                    <GoalIcon style={{
                      background: `url(/svgs/icon_meal.svg) no-repeat`,
                      backgroundSize: "1.5rem 1.5rem",
                      backgroundPosition: "center",
                      backgroundColor: "white"
                    }} />
                    <GoalValue>
                      <div>운동목표 수정하기</div>
                      <div>주 3회 이상</div>
                    </GoalValue>
                  </div>
                  <NextArrow></NextArrow>
                </GoalListItem>
              </li>
              <li>
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
                      <div>51kg</div>
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
            <MenuList>
              <div>로그아웃</div>
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