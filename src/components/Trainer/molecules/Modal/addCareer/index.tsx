import React, { useState } from "react";
import { useModal } from "@/context/trainer/ModalContext";

type Step = "careerInput" | "centerSearch";

export const CareerInputModal = () => {
  const [step, setStep] = useState<Step>("careerInput");
  const { closeModal } = useModal();

  // const views: Record<Step, JSX.Element> = {
  //   careerInput: (
  //     <CareerInputView onSearchCenter={() => setStep("centerSearch")} />
  //   ),
  //   centerSearch: <CenterSearchView onBack={() => setStep("careerInput")} />,
  // };

  //   return (
  //       <ModalHeader
  //         title={step === "careerInput" ? "경력 입력" : "센터 검색"}
  //         onBack={
  //           step === "centerSearch" ? () => setStep("careerInput") : undefined
  //         }
  //         onClose={closeModal}
  //       />
  //       <ModalContent>{views[step]}</ModalContent>
  //   );
};
