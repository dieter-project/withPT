import React from "react";
import { CardWrapper } from "./CardWrapper.styles";

interface UserCardProps {
  title: string;
  subtitle: string;
  avatarUrl: string;
  isSelected?: boolean;
}

const UserCard = ({
  title,
  subtitle,
  avatarUrl,
  isSelected,
}: UserCardProps) => {
  return (
    <CardWrapper isSelected={isSelected}>
      <img
        src={avatarUrl}
        alt="User Avatar"
        style={{ width: "40px", height: "40px", borderRadius: "50%" }}
      />
      <div>
        <div style={{ fontWeight: "bold" }}>{title}</div>
        <div style={{ color: "#666" }}>{subtitle}</div>
      </div>
    </CardWrapper>
  );
};

export default UserCard;
