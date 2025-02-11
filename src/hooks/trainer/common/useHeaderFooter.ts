"use client";
import { useEffect } from "react";
import { useLayout } from "@/context/trainer/TrainerLayoutContext";

export const useHeaderFooter = (
  hasHeader: boolean,
  hasFooter: boolean,
  title: string,
  variant: "withBack" | "center" | "plus" | "logo",
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
