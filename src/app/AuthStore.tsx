// AuthStore.tsx

import { create } from "zustand";

type Auth = {
  user: boolean;
  login: () => void;
  logout: () => void;
};

const useAuthStore = create<Auth>((set) => ({
  user: localStorage.getItem("token") !== null,
  login: () => {
    localStorage.setItem("token", "your_token_here");
    set({ user: true });
  },
  logout: () => {
    localStorage.removeItem("token");
    set({ user: false });
  },
}));

export default useAuthStore;
