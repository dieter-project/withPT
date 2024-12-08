"use client";

import React from "react";
import ContentHeader from "@/components/TrainerPageTitle";
import Footer from "@/components/TrainerFooter";
import { useLayout } from "@/context/TrainerLayoutContext";
import { useHeaderFooter } from "@/hooks/trainer/common/useHeaderFooter";

interface TrainerLayoutProps {
  children: React.ReactNode;
  title: string;
  hasHeader?: boolean;
  hasFooter?: boolean;
  variant?: "iconBack" | "center" | "plus";
  onPlusClick?: () => void;
  action?: string;
}

const TrainerLayout: React.FC<TrainerLayoutProps> = ({
  children,
  title,
  hasHeader = true,
  hasFooter = true,
  variant = "iconBack",
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
