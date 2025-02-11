"use client";

import React from "react";
import { styled } from "styled-components";
import PageHeader from "@/components/trainer/molecules/Header/Header";
import Footer from "@/components/trainer/organisms/Footer/TrainerFooter";
import {
  LayoutProvider,
  useLayout,
} from "@/context/trainer/TrainerLayoutContext";
import { useHeaderFooter } from "@/hooks/trainer/common/useHeaderFooter";

interface TrainerLayoutProps {
  children: React.ReactNode;
  title: string;
  hasHeader?: boolean;
  hasFooter?: boolean;
  variant?: "withBack" | "center" | "plus" | "logo";
  onPlusClick?: () => void;
  action?: string;
  bgColor?: "white" | "primary";
  padding?: string;
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
  padding,
}) => {
  const { layoutConfig } = useLayout();

  useHeaderFooter(hasHeader, hasFooter, title, variant, action, onPlusClick);

  return (
    <Container $bgColor={bgColor}>
      <ContentBody $padding={padding}>
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

interface ContainerProps {
  $bgColor?: "white" | "primary";
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ $bgColor }) =>
    $bgColor === "primary" ? "var(--purple50)" : "white"};
  margin: 0;
  padding: 0;
`;

interface ContentBodyProps {
  $padding?: string;
}

export const ContentBody = styled.div<ContentBodyProps>`
  position: relative;
  padding: ${({ $padding }) => $padding || "5.5rem 1rem 4.7rem 1rem"};
`;
