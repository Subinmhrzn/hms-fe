import type { PropsWithChildren, ReactNode } from "react";

export type AppDialogProps = PropsWithChildren & {
  button: ReactNode;
  dialogTitle: string;
  dialogDescription: string;
  cancelText?: string;
  confirmText?: string;
  onConfirm: () => void;
  isConfirming: boolean;
};
