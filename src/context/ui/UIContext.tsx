import { createContext } from "react";

export interface ContextProps {
  isSideMenuOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}

export const UIContext = createContext({} as ContextProps);
