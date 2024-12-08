"use client";

import React from "react";
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
  variant?: "withBack" | "center" | "plus" | "logo";
  onPlusClick?: () => void;
  action?: string;
}

const TrainerLayout: React.FC<TrainerLayoutProps> = props => {
  const { layoutConfig } = useLayout();
  const {
    children,
    title,
    hasHeader = true,
    hasFooter = true,
    variant = "withBack",
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

export default function RootTrainerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutProvider>{children}</LayoutProvider>;
}

export { TrainerLayout };
