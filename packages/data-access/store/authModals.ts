import { create } from "zustand";

interface IAuthModals {
  login: boolean;
  register: boolean;
  resetPassword: boolean;
  otp: boolean;
  setIsLogin: (isOpen: boolean) => void;
  setIsRegister: (isOpen: boolean) => void;
  setIsResetPassword: (isOpen: boolean) => void;
  setIsOtp: (isOpen: boolean) => void;
}

export const useAuthModals = create<IAuthModals>((set) => ({
  login: false,
  setIsLogin: (isOpen: boolean) =>
    set((state) => ({ ...state, login: isOpen })),
  resetPassword: false,
  setIsResetPassword: (isOpen: boolean) =>
    set((state) => ({ ...state, resetPassword: isOpen })),
  register: false,
  setIsRegister: (isOpen: boolean) =>
    set((state) => ({ ...state, register: isOpen })),
  otp: false,
  setIsOtp: (isOpen: boolean) => set((state) => ({ ...state, otp: isOpen })),
}));
