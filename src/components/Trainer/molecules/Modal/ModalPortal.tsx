import React from "react";
import { createPortal } from "react-dom";
import { DefaultModalComponent } from "./DefaultModal";
import { ModalProps } from "@/types/trainer/modal";

export function ModalPortal(props: ModalProps) {
  if (!document) return null;

  if (props.type === "alert") {
    return createPortal(
      <DefaultModalComponent {...props} type="alert" />,
      document.getElementById("modal-root")!,
    );
  }

  return createPortal(
    <DefaultModalComponent {...props} type="default" />,
    document.getElementById("modal-root")!,
  );
}
