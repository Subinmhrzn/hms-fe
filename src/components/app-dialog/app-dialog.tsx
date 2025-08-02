import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import type { AppDialogProps } from "./app-dialog.types";

export const AppDialog: React.FC<AppDialogProps> = ({
  button,
  children,
  dialogTitle,
  dialogDescription,
  cancelText = "Cancel",
  confirmText = "Confirm",
  onConfirm,
  isConfirming,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>
        <form id={dialogTitle}>{children}</form>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">{cancelText}</Button>
          </DialogClose>
          <Button
            form={dialogTitle}
            type="submit"
            onClick={onConfirm}
            disabled={isConfirming}
          >
            {confirmText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
