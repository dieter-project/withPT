"use client";

import React from "react";
import ContentHeader from "@/components/trainer/molecules/header/Header";
import Footer from "@/components/trainer/organisms/Footer/TrainerFooter";
import { useLayout } from "@/context/trainer/TrainerLayoutContext";
import { useHeaderFooter } from "@/hooks/trainer/common/useHeaderFooter";

interface TrainerLayoutProps {
  children: React.ReactNode;
  title: string;
  hasHeader?: boolean;
  hasFooter?: boolean;
  variant?: "withBack" | "center" | "plus";
  onPlusClick?: () => void;
  action?: string;
  bgColor?: "white" | "primary";
}

const TrainerLayout: React.FC<TrainerLayoutProps> = ({
  children,
  title,
  hasHeader = true,
  hasFooter = true,
  variant = "withBack",
  onPlusClick,
  action = "",
}) => {
  const { layoutConfig } = useLayout();

  useHeaderFooter(
    hasHeader,
    hasFooter,
    title, // title 추가
    variant, // variant 추가
    action,
    onPlusClick,
  );

  return (
    <>
      {layoutConfig.showHeader && (
        <ContentHeader
          title={title}
          variant={variant}
          onPlusClick={onPlusClick}
        />
      )}
      <main>{children}</main>
      {layoutConfig.showFooter && <Footer />}
    </>
  );
};

export default TrainerLayout;
