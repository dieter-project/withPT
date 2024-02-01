import React, { useState, useEffect } from "react";
import moment from "moment";

//특정 이벤트 추가할 날짜
const dayList = [
  "2023-03-10",
  "2023-03-21",
  "2024-02-02",
  "2023-11-24",
  "2023-04-27",
];

// 각 날짜 타일에 컨텐츠 추가
const AddContent = ({ date }) => {
  const contents = [];

  // date(각 날짜)가 리스트의 날짜와 일치하면 해당 컨텐츠(이모티콘) 추가
  if (dayList.find(day => day === moment(date).format("YYYY-MM-DD"))) {
    contents.push(
      <div
        style={{
          width: "1vh",
          height: "1vh",
          borderRadius: "0.5rem",
          backgroundColor: "var(--primary)",
        }}
      />,
    );
  }
  return <div>{contents}</div>; // 각 날짜마다 해당 요소가 들어감
};

export default AddContent;
