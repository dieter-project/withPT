// app/trainer/layout.tsx
"use client";

import React from "react";
import styled from "styled-components";
import PageTitle from "@/components/TrainerPageTitle";
import Footer from "@/components/TrainerFooter";
import { LayoutProvider, useLayout } from "@/context/TrainerLayoutContext";
import { useHeaderFooter } from "@/hooks/trainer/common/useHeaderFooter";
import { Container, ContentBody } from "@/styles/Trainer/TrainerLayout";

interface TrainerLayoutProps {
  children: React.ReactNode;
  title: string;
  hasHeader?: boolean;
  hasFooter?: boolean;
  variant?: "iconBack" | "center" | "plus";
  onPlusClick?: () => void;
  action?: string;
}

// 실제 레이아웃을 담당하는 컴포넌트
const TrainerLayout: React.FC<TrainerLayoutProps> = props => {
  const { layoutConfig } = useLayout();
  const {
    children,
    title,
    hasHeader = true,
    hasFooter = true,
    variant = "iconBack",
    onPlusClick,
    action = "",
  } = props;

  useHeaderFooter(hasHeader, hasFooter, title, variant, action, onPlusClick);

  return (
    <Container>
      <ContentBody>
        {layoutConfig.showHeader && (
          <PageTitle
            title={layoutConfig.title}
            variant={layoutConfig.variant}
            onPlusClick={layoutConfig.onPlusClick}
          />
        )}
        {children}
        {layoutConfig.showFooter && <Footer />}
      </ContentBody>
    </Container>
  );
};

// Next.js app router를 위한 레이아웃
export default function RootTrainerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutProvider>{children}</LayoutProvider>;
}

export { TrainerLayout };
