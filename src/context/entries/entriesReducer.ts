import { EntriesState } from "./EntriesProvider";

type ActionType =
  | {
      type: "";
    }
  | {
      type: "h";
    };
export const entriesReducer = (
  state: EntriesState,
  action: ActionType
): EntriesState => {
  switch (action.type) {
    case "":
      return {
        ...state,
      };

    default:
      return state;
  }
};
