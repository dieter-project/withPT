"use client";

import React from "react";
import { LayoutProvider } from "@/context/TrainerLayoutContext";
import TrainerLayout from "@/components/trainer/templates/TrainerLayout";

interface TrainerRootLayoutProps {
  children: React.ReactNode;
}

export default function TrainerRootLayout({
  children,
}: TrainerRootLayoutProps) {
  return (
    <LayoutProvider>
      <TrainerLayout
        title="트레이너 페이지"
        hasHeader={true}
        hasFooter={true}
        variant="iconBack"
      >
        {children}
      </TrainerLayout>
    </LayoutProvider>
  );
}
