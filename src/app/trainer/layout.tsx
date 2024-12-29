"use client";

import React from "react";
import PageHeader from "@/components/trainer/molecules/Header/Header";
import Footer from "@/components/trainer/organisms/Footer/TrainerFooter";
import {
  LayoutProvider,
  useLayout,
} from "@/context/trainer/TrainerLayoutContext";
import { useHeaderFooter } from "@/hooks/trainer/common/useHeaderFooter";
import { Container, ContentBody } from "@/styles/Trainer/TrainerLayout";

interface TrainerLayoutProps {
  children: React.ReactNode;
  title: string;
  hasHeader?: boolean;
  hasFooter?: boolean;
  variant?: "withBack" | "center" | "plus" | "logo";
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
  bgColor = "white",
}) => {
  const { layoutConfig } = useLayout();

  useHeaderFooter(hasHeader, hasFooter, title, variant, action, onPlusClick);

  return (
    <Container $bgColor={bgColor}>
      <ContentBody>
        {layoutConfig.showHeader && (
          <PageHeader
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

const RootTrainerLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <LayoutProvider>{children}</LayoutProvider>;
};

export default RootTrainerLayout;
export { TrainerLayout };
