import type { PropsWithChildren } from "react";
import { BrowserRouterProvider } from "./router-provider";
import { QueryProvider } from "./query-provider";
import { ToastProvider } from "./toast-provider";

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryProvider>
      <BrowserRouterProvider />
      {children}
      <ToastProvider />
    </QueryProvider>
  );
};
