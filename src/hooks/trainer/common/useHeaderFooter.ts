"use client";
import { useEffect } from "react";
import { useLayout } from "@/context/TrainerLayoutContext";

const useHeaderFooter = (
  showHeader: boolean,
  showFooter: boolean,
  action: string,
) => {
  const { setShowHeader, setShowFooter, setSelectedAction } = useLayout();

  useEffect(() => {
    setShowHeader(showHeader);
    setShowFooter(showFooter);
    setSelectedAction(action);

    return () => {
      setShowHeader(true);
      setShowFooter(true);
      setSelectedAction("");
    };
  }, [
    showHeader,
    showFooter,
    action,
    setShowHeader,
    setShowFooter,
    setSelectedAction,
  ]);
};

export default useHeaderFooter;
