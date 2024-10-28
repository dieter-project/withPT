"use client";

import PageHeader from "@/components/PageHeader";
import { BaseContentWrap, ContentSection } from "@/styles/Layout";
import { LabelTitle } from "@/styles/Text";
import { api } from "@/utils/axios";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { styled } from "styled-components";
import { DateText, DietList, GraphWrap, ImgContainer } from "./style";
import { getDiets } from "@/services/member/diet";
import { DietInfos } from "@/types/member/record";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { SettingIcon } from "@/styles/components/Header";
import { DIET_CATEGORY } from "@/constants/record";

const page = ({ params }: { params: { id: number } }) => {
  const searchParams = useSearchParams();
  const dietId = searchParams.get("dietId");
  const dietInfoId = params.id;
  const [diets, setDiets] = useState<DietInfos>({
    id: 0,
    dietFoods: [],
    dietCategory: "",
    dietTime: new Date().toISOString(),
    totalCalorie: 0,
    totalProtein: 0,
    totalCarbohydrate: 0,
    totalFat: 0,
    images: [],
  });

  const getDiet = async () => {
    const { data } = await getDiets(Number(dietId), dietInfoId);
    setDiets(data.data);
  };

  function getMeridiem(date: Date) {
    const hours = date.getHours();
    return hours < 12 ? "am" : "pm";
  }

  const dietCategory =
    DIET_CATEGORY.find(cate => cate.value === diets.dietCategory)?.title || "";

  useEffect(() => {
    if (dietId && dietInfoId) getDiet();
  }, []);

  return (
    <>
      <PageHeader
        title={`${dietCategory} 식단`}
        back={true}
        rightElement={<SettingIcon onClick={() => {}} />}
      />
      <BaseContentWrap>
        <ContentSection>
          <DateText>
            {format(new Date(diets.dietTime), "yyyy년 MM월 dd일 (EE) hh:mm")}{" "}
            {getMeridiem(new Date(diets.dietTime))}
          </DateText>
          <ImgContainer>
            <div>
              <img src="" alt="" />
            </div>
          </ImgContainer>
        </ContentSection>
        <ContentSection>
          <LabelTitle>영양소 비율</LabelTitle>
          <GraphWrap>
            <div className="bar">
              <div style={{ flex: `${diets.totalCarbohydrate / 100}` }}></div>
              <div style={{ flex: `${diets.totalProtein / 100}` }}></div>
              <div style={{ flex: `${diets.totalFat / 100}` }}></div>
            </div>
            <div className="legend">
              <div>
                <div>탄수화물</div>
                <span>{diets.totalCarbohydrate}g</span>
              </div>
              <div>
                <div>단백질</div>
                <span>{diets.totalProtein}g</span>
              </div>
              <div>
                <div>지방</div>
                <span>{diets.totalFat}g</span>
              </div>
            </div>
          </GraphWrap>
        </ContentSection>
        <ContentSection>
          <DietList>
            <div className="list-top">
              <LabelTitle>식단</LabelTitle>
              <div>
                총 칼로리 <strong>{diets.totalCalorie} kcal</strong>
              </div>
            </div>
            <ul>
              {diets.dietFoods?.map(diet => (
                <li key={diet.id}>
                  <div>
                    <div>{diet.name}</div>
                    <div className="detail">
                      {diet.capacity}
                      {diet.units}
                    </div>
                  </div>
                  <div>{diet.calories} kcal</div>
                </li>
              ))}
            </ul>
          </DietList>
        </ContentSection>
      </BaseContentWrap>
    </>
  );
};

export default page;
