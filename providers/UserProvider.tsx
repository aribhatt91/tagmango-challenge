"use client";

import { getUser } from "@/lib/userAPI";
import { User } from "@/types/types";
import { createContext, useContext, useEffect, useState } from "react";


interface UserContextType {
    user: User | null;
    pending: boolean;
    error: string | null;
}
const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [ state, setState ] = useState<UserContextType>({
        pending: false,
        error: null,
        user: null
    })

    useEffect(() => {
        (async () => {
            setState((prev) => ({...prev, pending: true}));
            const res = (await getUser()) as User;
            setState({pending: false, error: null, user: res});
        })();
    }, []);

    return (
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used inside UserProvider");
  return ctx;
}