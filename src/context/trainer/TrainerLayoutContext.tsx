"use client";

import React, { createContext, useContext, useReducer, ReactNode } from "react";

interface LayoutConfig {
  showHeader: boolean;
  showFooter: boolean;
  title: string;
  variant: "withBack" | "center" | "plus";
  selectedAction: string;
  onPlusClick?: () => void;
}

type LayoutAction =
  | { type: "UPDATE_LAYOUT"; payload: Partial<LayoutConfig> }
  | { type: "RESET" };

interface LayoutContextProps {
  layoutConfig: LayoutConfig;
  dispatch: React.Dispatch<LayoutAction>;
}

const defaultConfig: LayoutConfig = {
  showHeader: true,
  showFooter: true,
  title: "",
  variant: "withBack",
  selectedAction: "",
  onPlusClick: undefined,
};

function layoutReducer(
  state: LayoutConfig,
  action: LayoutAction,
): LayoutConfig {
  switch (action.type) {
    case "UPDATE_LAYOUT":
      return { ...state, ...action.payload };
    case "RESET":
      return defaultConfig;
    default:
      return state;
  }
}

const LayoutContext = createContext<LayoutContextProps | undefined>(undefined);

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [layoutConfig, dispatch] = useReducer(layoutReducer, defaultConfig);

  return (
    <LayoutContext.Provider value={{ layoutConfig, dispatch }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }

  const { layoutConfig, dispatch } = context;

  return {
    layoutConfig,
    dispatch,
    setShowHeader: (value: boolean) =>
      dispatch({ type: "UPDATE_LAYOUT", payload: { showHeader: value } }),
    setShowFooter: (value: boolean) =>
      dispatch({ type: "UPDATE_LAYOUT", payload: { showFooter: value } }),
    setTitle: (value: string) =>
      dispatch({ type: "UPDATE_LAYOUT", payload: { title: value } }),
    setVariant: (value: "withBack" | "center" | "plus") =>
      dispatch({ type: "UPDATE_LAYOUT", payload: { variant: value } }),
    setSelectedAction: (action: string) =>
      dispatch({ type: "UPDATE_LAYOUT", payload: { selectedAction: action } }),
    setOnPlusClick: (callback: () => void) =>
      dispatch({ type: "UPDATE_LAYOUT", payload: { onPlusClick: callback } }),
    resetLayout: () => dispatch({ type: "RESET" }),
  };
};
