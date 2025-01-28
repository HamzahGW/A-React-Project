import { axiosInstance } from "@tx/util-helpers";
import { create } from "zustand";

type TAuthStatus = "LOADING" | "DONE";
interface IAuthStore {
  isAuthenticated: boolean;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  authStatus: TAuthStatus;
  setAuthStatus: (newStatus: TAuthStatus) => void;
}

export const useAuthStore = create<IAuthStore>((set) => ({
  isAuthenticated: false,
  token: null,
  login: (token: string) =>
    set(() => {
      window.localStorage.setItem("token", token);
      return { token: token, isAuthenticated: true, authStatus: "DONE" };
    }),
  logout: () =>
    set(() => {
      window.localStorage.removeItem("token");
      return { token: null, isAuthenticated: false };
    }),
  authStatus: "LOADING",
  setAuthStatus: (newStatus: TAuthStatus) => set({ authStatus: newStatus }),
}));

const listenToToken = useAuthStore.subscribe((state) => {
  axiosInstance.defaults.headers.common["Authorization"] =
    "Bearer " + state.token;
});
