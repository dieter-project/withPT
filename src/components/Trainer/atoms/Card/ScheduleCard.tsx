import React from "react";
import styled from "styled-components";

interface ScheduleCardProps {
  day: string;
  time: string;
  onDelete: () => void;
}

const ScheduleCard = ({ day, time, onDelete }: ScheduleCardProps) => {
  return (
    <CardWrapper>
      <TextWrapper>
        <DayText>{day}</DayText>
        <TimeText>{time}</TimeText>
      </TextWrapper>
      <DeleteButton onClick={onDelete}>X</DeleteButton>
    </CardWrapper>
  );
};

export default ScheduleCard;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  margin-bottom: 0.5rem;
  width: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DayText = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
`;

const TimeText = styled.div`
  font-size: 0.875rem;
  color: #666;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #ff6b6b;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    color: #ff4d4d;
  }
`;
