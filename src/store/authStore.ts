import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
}

const useAuthStore = create(
    persist<AuthState>(
        (set) => ({
            isLoggedIn: false,
            login: () => set({ isLoggedIn: true }),
            logout: () => set({ isLoggedIn: false }),
        }),
        {
            name: "auth-storage", // Key for localStorage
        }
    )
);

export default useAuthStore;