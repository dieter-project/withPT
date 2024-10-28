"use client";

import Header from "@/components/Header";
import { AddRecordButton } from "@/styles/AddButton";
import { BaseContentWrap, ContentSection } from "@/styles/Layout";
import { LabelTitle } from "@/styles/Text";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  GraphWrap,
  DietList,
  MyGoal,
  NutritionProgress,
  ProgressWrap,
  TrainerFeedback,
  DietSectionTitle,
} from "./style";
import { getDietByDate } from "@/services/member/diet";
import { format } from "date-fns";
import dynamic from "next/dynamic";
import { DietRecord } from "@/types/member/record";
import { DIET_CATEGORY } from "@/constants/record";
import { FlexRowBetween } from "@/styles/components/Flex";
import PageHeader from "@/components/PageHeader";
import { CalendarIcon } from "@/styles/components/Header";
import { PlusButton } from "@/styles/Button";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const page = () => {
  const todayDietInit = {
    dietInfos: [],
    feedback: null,
    id: 0,
    targetDietType: "",
    totalCalorie: 0,
    totalCarbohydrate: 0,
    totalFat: 0,
    totalProtein: 0,
    uploadDate: "",
  };
  const [todayDiet, setTodayDiet] = useState<DietRecord>(todayDietInit);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const cobMax = 160;
  const proMax = 80;
  const fatMax = 20;

  const handleGetDiet = async () => {
    const {
      data: { data },
    } = await getDietByDate(format(new Date(), "yyyy-MM-dd"));
    console.log("response data: ", data);
    setTodayDiet(data);
  };

  useEffect(() => {
    handleGetDiet();
  }, []);

  useEffect(() => {
    // console.log('todayDiet.record.length : ', todayDiet?.record.length);
    // console.log('todayDiet: ', todayDiet);
  }, [todayDiet]);

  return (
    <>
      <Header title={"식단"} back={true} calendar={true} />
      <PageHeader
        back
        title="식단"
        rightElement={<CalendarIcon onClick={() => setShowModal(true)} />}
      />
      <BaseContentWrap>
        <section>달력</section>
        <MyGoal>
          <div className="section-contents">
            <div>나의 목표</div>
            <div className="goal-contents">
              <div></div>
              <div>탄단지식단</div>
            </div>
          </div>
        </MyGoal>
        <ContentSection>
          {todayDiet && (
            <GraphWrap>
              <div>1일 목표칼로리 1500kcal</div>
              <div className="nutrition-graph">
                <div>
                  <ReactApexChart
                    type="donut"
                    series={[
                      Number(todayDiet.totalCalorie),
                      1500 - Number(todayDiet.totalCalorie),
                    ]}
                    options={{
                      chart: {
                        type: "donut",
                      },
                      colors: ["#6C69FF", "#cccccc"],
                      dataLabels: {
                        enabled: false,
                        dropShadow: {
                          enabled: false,
                        },
                      },
                      legend: {
                        show: false,
                      },
                      plotOptions: {
                        pie: {
                          customScale: 0.7,
                          donut: {
                            size: "80%",
                            labels: {
                              show: true,
                              total: {
                                showAlways: false,
                                show: true,
                                fontSize: "1rem",
                                color: "#6C69FF",
                                fontWeight: "bold",
                                label: "섭취 칼로리",
                              },
                              value: {
                                fontSize: "3.5rem",
                                show: true,
                                color: "#6C69FF",
                                fontWeight: "bold",
                              },
                            },
                          },
                        },
                      },
                    }}
                    width={250}
                    height={250}
                  />
                </div>
                <NutritionProgress>
                  <ProgressWrap type="carb">
                    <div>탄수화물</div>
                    <progress
                      value={todayDiet.totalCarbohydrate}
                      max={cobMax}
                    ></progress>
                    <div>
                      {todayDiet.totalCarbohydrate}g / <span>{cobMax}g</span>
                    </div>
                  </ProgressWrap>
                  <ProgressWrap type="prot">
                    <div>단백질</div>
                    <progress
                      value={todayDiet.totalProtein}
                      max={proMax}
                    ></progress>
                    <div>
                      {todayDiet.totalProtein}g / <span>{proMax}g</span>
                    </div>
                  </ProgressWrap>
                  <ProgressWrap type="fats">
                    <div>지방</div>
                    <progress
                      value={todayDiet.totalFat}
                      max={fatMax}
                    ></progress>
                    <div>
                      {todayDiet.totalFat}g / <span>{fatMax}g</span>
                    </div>
                  </ProgressWrap>
                </NutritionProgress>
              </div>
            </GraphWrap>
          )}
        </ContentSection>
        <ContentSection>
          <DietSectionTitle>
            <FlexRowBetween>
              <LabelTitle>식단</LabelTitle>
              <PlusButton
                onClick={() => router.push("/member/record/diet/register")}
              />
            </FlexRowBetween>
          </DietSectionTitle>
          {todayDiet && Object.keys(todayDiet).length > 0 ? (
            <div>
              <ul>
                {todayDiet?.dietInfos?.map((diet, idx) => {
                  return (
                    <DietList
                      key={diet.id}
                      onClick={() =>
                        router.push(`/member/record/diet/${diet.id}`)
                      }
                    >
                      <div className="diet-img">
                        <img src="" alt="" />
                      </div>
                      <div className="diet-detail">
                        <div>
                          <div className="time">
                            {
                              DIET_CATEGORY.find(
                                cate => cate.value === diet.dietCategory,
                              )?.title
                            }
                          </div>
                          <div className="calorie">
                            {diet.totalCalorie} kcal
                          </div>
                        </div>
                        <div className="nutrition">
                          탄 {diet.totalCarbohydrate}g / 단 {diet.totalProtein}g
                          / 지 {diet.totalFat}g
                        </div>
                        <div className="menu">
                          {diet?.dietFoods[0]?.name}{" "}
                          {`${
                            diet?.dietFoods.length > 1
                              ? `외 ${diet?.dietFoods.length - 1} 개`
                              : ""
                          }`}
                        </div>
                      </div>
                    </DietList>
                  );
                })}
              </ul>
            </div>
          ) : (
            <AddRecordButton
              variant="purple"
              onClick={() => router.push("/member/record/diet/register")}
            >
              <div>!</div>
              <p>눌러서 식단을 입력해주세요</p>
            </AddRecordButton>
          )}
        </ContentSection>
        {todayDiet?.feedback && (
          <ContentSection>
            <LabelTitle>트레이너 피드백</LabelTitle>
            <TrainerFeedback variant="purple">
              단백질이 부족해요ㅜ 매 끼니에 단백질을 더 드셔야 합니다!
            </TrainerFeedback>
          </ContentSection>
        )}
      </BaseContentWrap>
    </>
  );
};

export default page;
