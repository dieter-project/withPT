import React from "react";
import { createPortal } from "react-dom";
import { AlertModalComponent } from "./AlertModal";
import { DefaultModalComponent } from "./DefaultModal";
import { ModalProps } from "@/types/trainer/modal";

export function ModalPortal(props: ModalProps) {
  if (!document) return null;

  if (props.type === "alert") {
    return createPortal(
      <AlertModalComponent message={props.message} onClose={props.onClose} />,
      document.getElementById("modal-root")!,
    );
  }

  return createPortal(
    <DefaultModalComponent
      title={props.title}
      content={props.content}
      onClose={props.onClose}
    />,
    document.getElementById("modal-root")!,
  );
}
