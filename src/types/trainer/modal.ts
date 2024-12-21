export type ModalType = "default" | "alert";

export interface BaseModalProps {
  type: ModalType;
  onClose: () => void;
}

export interface DefaultModalProps extends BaseModalProps {
  type: "default";
  title: string;
  content: React.ReactNode;
}

export interface AlertModalProps extends BaseModalProps {
  type: "alert";
  message: string;
}

export type ModalProps = DefaultModalProps | AlertModalProps;
