"use client";
import styled from "styled-components";

const MainContainer = styled.div`
  background-color: #efefef;
`;

const MainHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  justify-content: space-between;
  z-index: 100;
`;

const MainContentWrap = styled.div`
  height: 100vh;
  margin-bottom: 0.2rem;
  padding: 3.5rem 1.2rem 5rem;
  overflow: auto;
`;

const MainTitle = styled.h4`
  font-weight: bold;
`;

const TrainerMainWrap = styled.div`
  background-color: #ffffff;
  padding: 1rem;
  margin-top: 0.3rem;
`;

const TrainerScheduleContentWrap = styled.div``;

const TrainerScheduleTap = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const TrainerScheduleItem = styled.button`
  all: unset;
  font-weight: bold;
`;

const ScheduleContentItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid gray;
`;

const CheckAllScheduleBtn = styled.button`
  width: 100%;
  background-color: #eaeaea;
  color: #000000;
  border: none;
  padding: 0.7rem;
  margin-top: 1rem;
  font-weight: bold;
`;

const MonthMemberWrap = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`;

const MonthMemberMonth = styled.span`
  font-weight: bold;
  color: gray;
`;

const MonthMemberNum = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

const MemberInfo = styled.div`
  margin-top: 0.3rem;
  font-size: 0.9rem;
`;

const MemberInfoType = styled.span``;

const MainFooter = styled.footer`
  display: fixed;
  height: 3rem;
  padding: 1rem 2rem 1rem;
  align-items: center;
  background-color: #ffffff;
  justify-content: space-between;
  z-index: 100;
`;

const FooterCtgWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterCtgItem = styled.button`
  all: unset;
  align-items: center;
`;

const FooterItemImg = styled.img`
  display: block;
`;

export default function ManagementSchedule() {
  return (
    <MainContainer>
      <MainHeader>회원 관리</MainHeader>

      <MainContentWrap>
        <div>
          <div>
            <span>총 회원 수 : 31명</span>
            <span>2023. 11월</span>
          </div>
          <div>
            <span>아자 아자 피트니스 센터</span>
            <span>5명</span>
          </div>
          <div>
            <span>으라차차 피트니스 센터</span>
            <span>5명</span>
          </div>
          <div>
            <span>득근득근 피트니스 센터</span>
            <span>5명</span>
          </div>
        </div>

        <div>
          <div>
            <h4>스케줄</h4>
            <div>
              <div>달력</div>
              <button> 수업 일정 확인하기</button>
            </div>
          </div>
        </div>
      </MainContentWrap>
    </MainContainer>
  );
}
