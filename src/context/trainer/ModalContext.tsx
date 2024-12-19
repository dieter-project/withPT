// contexts/ModalContext.tsx
"use client";
import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";

interface ModalContextType {
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
  isOpen: boolean;
}

const ModalContext = createContext<ModalContextType>({
  openModal: () => {},
  closeModal: () => {},
  isOpen: false,
});

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null,
  );
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (content: React.ReactNode) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
      {modalContent &&
        typeof window !== "undefined" &&
        createPortal(
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              {modalContent}
            </div>
          </div>,
          document.getElementById("modal-root")!,
        )}
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
