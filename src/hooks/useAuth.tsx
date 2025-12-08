import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";


type Role = "general" | "registered" | "admin";

interface User {
  name: string;
  role: Role;
  savedQueries: string[];
}

interface AuthContextValue {
  user: User | null;
  login: () => void;
  logout: () => void;
  saveQuery: (query: string) => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = () => {
    // mock "registered user"
    setUser({
      name: "Antonio Fabrizio",
      role: "registered",
      savedQueries: [],
    });
  };

  const logout = () => {
    setUser(null);
  };

  const saveQuery = (query: string) => {
    if (!user) return;
    setUser({
      ...user,
      savedQueries: [...user.savedQueries, query],
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, saveQuery }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}
