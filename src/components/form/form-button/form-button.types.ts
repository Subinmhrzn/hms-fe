import { Button } from "@/components/ui/button";
import type { CustomComponentPropsWithRef, PropsWithChildren } from "react";

export type FormButtonProps = PropsWithChildren &
  CustomComponentPropsWithRef<typeof Button> & {
    loading?: boolean;
    loadingText?: string;
  };
