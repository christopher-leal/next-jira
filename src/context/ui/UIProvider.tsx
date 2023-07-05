import { FC, useReducer } from "react";
import { UIContext, uiReducer } from "./";

export interface UIState {
  isSideMenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  isSideMenuOpen: false,
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

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
