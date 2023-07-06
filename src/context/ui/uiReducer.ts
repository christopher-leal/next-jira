import { UIState } from "./";

type UIType =
  | {
      type: "UI - open sidebar";
    }
  | {
      type: "UI - close sidebar";
    }
  | {
      type: "UI - set is adding entry";
      payload: boolean;
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
    case "UI - set is adding entry":
      return {
        ...state,
        isAddingEntry: action.payload,
      };

    default:
      return state;
  }
};
