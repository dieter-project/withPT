import React from "react";
import { CardWrapper } from "./CardWrapper.styles";

interface ScheduleCardProps {
  title: string;
  time: string;
  onDelete?: () => void;
}

const ScheduleCard = ({ title, time, onDelete }: ScheduleCardProps) => {
  return (
    <CardWrapper>
      <div>
        <div style={{ fontWeight: "bold" }}>{title}</div>
        <div style={{ color: "#666" }}>{time}</div>
      </div>
      {onDelete && (
        <button
          onClick={e => {
            e.stopPropagation();
            onDelete();
          }}
          style={{
            background: "none",
            border: "none",
            color: "#FF6B6B",
            cursor: "pointer",
          }}
        >
          X
        </button>
      )}
    </CardWrapper>
  );
};

export default ScheduleCard;
