"use client";

import React, { createContext, useContext, useCallback, useState } from "react";
import { ModalPortal } from "@/components/trainer/molecules/modal/ModalPortal";
import { ModalProps } from "@/types/trainer/modal";

interface ModalContextValue {
  openModal: (modal: ModalProps) => string;
  closeModal: (modalId?: string) => void;
  closeAllModals: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modals, setModals] = useState<(ModalProps & { id: string })[]>([]);

  const closeModal = useCallback((modalId?: string) => {
    if (modalId) {
      setModals(prev => prev.filter(modal => modal.id !== modalId));
    } else {
      setModals(prev => prev.slice(0, -1));
    }
  }, []);

  const closeAllModals = useCallback(() => {
    setModals([]);
  }, []);

  const openModal = useCallback(
    (modal: Omit<ModalProps, "onClose">) => {
      const id = Math.random().toString(36).slice(2);
      const zIndex = 1000 + modals.length * 10;

      setModals(prev => [
        ...prev,
        {
          ...modal,
          id,
          zIndex,
          onClose: () => closeModal(id),
        } as ModalProps & { id: string },
      ]);

      return id;
    },
    [modals, closeModal],
  );

  return (
    <ModalContext.Provider value={{ openModal, closeModal, closeAllModals }}>
      {children}
      {modals.map(modal => (
        <ModalPortal
          key={modal.id}
          {...modal}
          onBackdropClick={() => closeModal(modal.id)}
        />
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
