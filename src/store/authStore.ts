import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  email: string;
  login: (email: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  email: "",
  login: (email) => set({ isLoggedIn: true, email }),
  logout: () => set({ isLoggedIn: false, email: "" }),
}));