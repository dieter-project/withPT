export type ModalType = "default" | "alert";

export interface BaseModalProps {
  title: string;
  onClose: () => void;
  zIndex: number;
  type: ModalType;
}

export interface DefaultModalProps extends BaseModalProps {
  type: "default";
  content: React.ReactNode;
  message?: string;
}

export interface AlertModalProps extends BaseModalProps {
  type: "alert";
  message: string;
}

export type ModalProps = DefaultModalProps | AlertModalProps;
