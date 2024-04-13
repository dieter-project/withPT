export interface VariantProps {
  variant?: string;
}

export interface ModalProps {
  displayModal: boolean;
  setDisplayModal: React.Dispatch<React.SetStateAction<boolean>>;
}