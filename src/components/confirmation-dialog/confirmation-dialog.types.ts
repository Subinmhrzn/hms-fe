import type { ReactNode } from "react";

export type ConfirmationDialogProps = {
  button: ReactNode;
  dialogTitle: string;
  dialogDescription: string;
  cancelText?: string;
  confirmText?: string;
  onConfirm: () => void;
  isConfirming: boolean;
};
