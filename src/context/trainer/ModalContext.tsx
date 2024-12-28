"use client";

import React, { createContext, useContext, useCallback, useState } from "react";
import { ModalPortal } from "@/components/trainer/molecules/Modal/ModalPortal";
import { ModalProps } from "@/types/trainer/modal";

interface ModalContextValue {
  openModal: (modal: ModalProps) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modals, setModals] = useState<(ModalProps & { id: string })[]>([]);

  const closeModal = useCallback(() => {
    setModals(prev => prev.slice(0, -1));
  }, []);

  const openModal = useCallback(
    (modal: Omit<ModalProps, "onClose">) => {
      const zIndex = 1000 + modals.length * 10;
      const id = Math.random().toString(36).slice(2);
      setModals(prev => [
        ...prev,
        {
          ...modal,
          id,
          zIndex,
          onClose: () => closeModal(),
        } as ModalProps & { id: string },
      ]);
    },
    [modals, closeModal],
  );

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modals.map(modal => (
        <ModalPortal key={modal.id} {...modal} />
      ))}
    </ModalContext.Provider>
  );
}

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
