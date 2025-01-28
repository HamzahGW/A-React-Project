import {
  BrowserRouter,
  HashRouter,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactNode, useEffect, useState } from "react";
import { useAuthStore } from "@tx/data-access";
import { defaultFallbackInView } from "@tx/util-hooks";
import PopUps from "./PopUps";

export interface AppWrapperProps {
  children: ReactNode;
}

export function AppWrapper({ children }: AppWrapperProps) {
  useEffect(() => {
    try {
      fetch("https://thearchcapital.com//wp-json")
        .then((e) => e.json())
        .then((e) => {
          document.title = e.name;
          const favicon = document.getElementById(
            "favicon",
          ) as HTMLLinkElement | null;
          const description = document.getElementById(
            "description",
          ) as HTMLMetaElement | null;

          if (favicon) {
            favicon.href = e.site_icon_url;
          }
          if (description) {
            description.content = e.description;
          }
        });
    } catch (error) {}
  }, []);
  return (
    <div className="h-full" dir="rtl">
      <HashRouter>
        <PopUps />

        <ToastContainer />
        {children}
      </HashRouter>
    </div>
  );
}

defaultFallbackInView(true);

export default AppWrapper;
