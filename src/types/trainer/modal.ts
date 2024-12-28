export type ModalType = "default" | "alert";

export interface BaseModalProps {
  title?: string;
  content?: React.ReactNode;
  onClose?: () => void;
  zIndex?: number;
  type: ModalType;
}

export interface DefaultModalProps extends BaseModalProps {
  type: "default";
}

export interface AlertModalProps extends BaseModalProps {
  type: "alert";
  content?: never;
  message: string;
}

export type ModalProps = DefaultModalProps | AlertModalProps;
