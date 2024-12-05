"use client";

import React from "react";
import ContentHeader from "@/components/TrainerPageTitle";
import Footer from "@/components/TrainerFooter";
import { useLayout } from "@/context/TrainerLayoutContext";
import { usePathname } from "next/navigation";

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
  const { showHeader, showFooter } = useLayout();

  return (
    <>
      {showHeader && (
        <ContentHeader
          title={title}
          variant={variant}
          onPlusClick={onPlusClick}
        />
      )}
      <main>{children}</main>
      {showFooter && <Footer />}
    </>
  );
};

export default TrainerLayout;
