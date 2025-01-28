import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import App from "./views/App";
import { REACT_QUERY_CONFIG } from "@tx/configs";

export const queryClient = new QueryClient({
  ...REACT_QUERY_CONFIG,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  // </React.StrictMode>,
);
