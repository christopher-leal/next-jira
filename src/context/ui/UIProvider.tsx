import { FC, useReducer } from "react";
import { UIContext, uiReducer } from "./";

export interface UIState {
  isSideMenuOpen: boolean;
  isAddingEntry: boolean;
}

const UI_INITIAL_STATE: UIState = {
  isSideMenuOpen: false,
  isAddingEntry: false,
};

interface Props {
  children: React.ReactElement;
}

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSidebar = () => {
    dispatch({ type: "UI - open sidebar" });
  };

  const closeSidebar = () => {
    dispatch({ type: "UI - close sidebar" });
  };

  const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({ type: "UI - set is adding entry", payload: isAdding });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        setIsAddingEntry,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
