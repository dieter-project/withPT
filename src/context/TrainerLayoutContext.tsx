"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface LayoutContextProps {
  showHeader: boolean;
  showFooter: boolean;
  setShowHeader: (value: boolean) => void;
  setShowFooter: (value: boolean) => void;
  selectedAction: string;
  setSelectedAction: (action: string) => void;
}

const LayoutContext = createContext<LayoutContextProps | undefined>(undefined);

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const [selectedAction, setSelectedAction] = useState("");

  return (
    <LayoutContext.Provider
      value={{
        showHeader,
        showFooter,
        setShowHeader,
        setShowFooter,
        selectedAction,
        setSelectedAction,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context)
    throw new Error("useLayout must be used within a LayoutProvider");
  return context;
};
