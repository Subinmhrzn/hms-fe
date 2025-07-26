import { Button } from "@/components/ui/button";
import type { FormButtonProps } from "./form-button.types";
import { Loader2Icon } from "lucide-react";

export const FormButton: React.FC<FormButtonProps> = ({
  loading = false,
  loadingText = "Loading",
  children,
  ...buttonProps
}) => {
  return loading ? (
    <Button {...buttonProps} disabled={true}>
      <Loader2Icon />
      {loadingText}
    </Button>
  ) : (
    <Button {...buttonProps}>{children}</Button>
  );
};
