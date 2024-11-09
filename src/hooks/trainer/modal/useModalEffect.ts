import { useEffect, useState } from "react";

export const useModalEffect = (isModalOpen: boolean) => {
  const [showModalContent, setShowModalContent] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      const timer = setTimeout(() => {
        setShowModalContent(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      setShowModalContent(false);
    }
  }, [isModalOpen]);

  return showModalContent;
};
