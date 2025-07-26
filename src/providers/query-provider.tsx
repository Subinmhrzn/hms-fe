import {
  MutationCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import type { PropsWithChildren } from "react";
import toast from "react-hot-toast";

const mutationCache = new MutationCache({
  onSuccess(_data, _variables, _context, mutation) {
    const message = mutation.meta?.successMessage;
    console.log({ message });
    if (message) {
      toast.success(message);
    }
  },
  onError(_data, _variables, _context, mutation) {
    const message = mutation.meta?.errorMessage;
    if (message) {
      toast.error(message);
    }
  },
  onSettled(_data, _error, _variables, _context, mutation) {
    if (mutation.meta?.invalidatesQuery) {
      queryClient.invalidateQueries({
        queryKey: [mutation.meta?.invalidatesQuery],
      });
    }
  },
});

const queryClient = new QueryClient({
  mutationCache,
});

export const QueryProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
