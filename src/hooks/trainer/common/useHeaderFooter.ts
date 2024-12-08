"use client";
import { useEffect } from "react";
import { useLayout } from "@/context/TrainerLayoutContext";

export const useHeaderFooter = (
  hasHeader: boolean,
  hasFooter: boolean,
  title: string,
  variant: "iconBack" | "center" | "plus",
  action: string = "",
  onPlusClick?: () => void,
) => {
  const { dispatch } = useLayout();

  useEffect(() => {
    dispatch({
      type: "UPDATE_LAYOUT",
      payload: {
        showHeader: hasHeader,
        showFooter: hasFooter,
        title,
        variant,
        selectedAction: action,
        onPlusClick,
      },
    });
  }, [hasHeader, hasFooter, title, variant, action, onPlusClick, dispatch]);
};
