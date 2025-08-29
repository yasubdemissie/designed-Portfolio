"use client";
import { ReactNode, createContext, useContext, useState } from "react";

const context = createContext({
  isOverlayOpen: false,
  setIsOverlayOpen: (open: boolean) => {},
});

export default function ContactContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  return (
    <context.Provider value={{ isOverlayOpen, setIsOverlayOpen }}>
      {children}
    </context.Provider>
  );
}

export function useContactContext() {
  return useContext(context);
}
