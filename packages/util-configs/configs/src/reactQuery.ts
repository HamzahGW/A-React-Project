import type { QueryClientConfig } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const REACT_QUERY_CONFIG: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: (failureCount, err) => {
        const res = err as AxiosError;
        if (res?.response?.status !== 500) return false;
        if (failureCount >= 3) return false;
        return true;
      },
      refetchOnWindowFocus: false, // uncomment for production ???
    },
  },
};
