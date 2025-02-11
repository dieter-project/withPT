export type ModalType = "default" | "alert";

export interface BaseModalProps {
  title?: string;
  content?: React.ReactNode;
  onClose?: () => void;
  zIndex?: number;
  type: ModalType;
}

export interface DefaultModalProps extends BaseModalProps {
  onBackdropClick?: () => void;
}

export interface AlertModalProps extends BaseModalProps {
  type: "alert";
  message?: string;
  content?: React.ReactNode;
}

export type ModalProps = DefaultModalProps | AlertModalProps;
