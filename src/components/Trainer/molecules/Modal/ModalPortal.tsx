import React from "react";
import { createPortal } from "react-dom";
import { DefaultModalComponent } from "./DefaultModal";
import { ModalProps } from "@/types/trainer/modal";

export function ModalPortal(
  props: ModalProps & { id: string; onBackdropClick?: () => void },
) {
  if (!document) return null;

  if (props.type === "alert") {
    return createPortal(
      <DefaultModalComponent {...props} type="alert" />,
      document.getElementById("modal-root")!,
    );
  }

  return createPortal(
    <DefaultModalComponent
      {...props}
      type="default"
      onBackdropClick={props.onBackdropClick}
    />,
    document.getElementById("modal-root")!,
  );
}
