import React, { useState, useEffect } from "react";
import moment from "moment";

//특정 이벤트 추가할 날짜
const dayList = [
  "2023-03-10",
  "2023-03-21",
  "2024-02-02",
  "2023-11-24",
  "2024-03-01",
  "2024-03-02",
  "2024-03-03",
  "2024-03-29",
  "2024-03-30",
];

// 각 날짜 타일에 컨텐츠 추가
const AddContent = ({ date }) => {
  const contents = [];

  // date(각 날짜)가 리스트의 날짜와 일치하면 해당 컨텐츠(이모티콘) 추가
  if (dayList.find(day => day === moment(date).format("YYYY-MM-DD"))) {
    contents.push(
      <div
        style={{
          width: "0.4rem",
          height: "0.4rem",
          marginTop: "0.7rem",
          borderRadius: "50%",
          backgroundColor: "var(--primary)",
        }}
      />,
    );
  }
  return <div>{contents}</div>; // 각 날짜마다 해당 요소가 들어감
};

export default AddContent;
