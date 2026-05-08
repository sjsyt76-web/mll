import { createContext, useContext, useState, type ReactNode } from "react";

type SearchCtx = {
  query: string;
  setQuery: (q: string) => void;
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
};

const Ctx = createContext<SearchCtx | null>(null);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Ctx.Provider value={{ query, setQuery, isOpen, setIsOpen }}>
      {children}
    </Ctx.Provider>
  );
}

export function useSearch() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useSearch must be used within SearchProvider");
  return ctx;
}
