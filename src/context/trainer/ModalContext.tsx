"use client";

import React, { createContext, useContext, useCallback, useState } from "react";
import { ModalPortal } from "@/components/trainer/molecules/Modal/ModalPortal";
import { ModalProps, ModalType } from "@/types/trainer/modal";

interface ModalContextType {
  modals: ModalProps[];
  openModal: (modal: Omit<ModalProps, "onClose">) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modals, setModals] = useState<ModalProps[]>([]);

  const openModal = useCallback((modal: Omit<ModalProps, "onClose">) => {
    setModals(prev => [...prev, { ...modal, onClose: () => closeModal() }]);
  }, []);

  const closeModal = useCallback(() => {
    setModals(prev => prev.slice(0, -1));
  }, []);

  return (
    <ModalContext.Provider value={{ modals, openModal, closeModal }}>
      {children}
      {modals.map((modal, index) => (
        <ModalPortal key={index} {...modal} />
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
