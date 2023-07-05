import { UIState } from "./";

type UIType =
  | {
      type: "UI - open sidebar";
    }
  | {
      type: "UI - close sidebar";
    };

export const uiReducer = (state: UIState, action: UIType): UIState => {
  switch (action.type) {
    case "UI - open sidebar":
      return {
        ...state,
        isSideMenuOpen: true,
      };
    case "UI - close sidebar":
      return {
        ...state,
        isSideMenuOpen: false,
      };

    default:
      return state;
  }
};
