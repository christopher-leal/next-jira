import { Entry } from "../../interfaces";
import { EntriesState } from "./EntriesProvider";

type ActionType =
  | {
      type: "Entries - Add entry";
      payload: Entry;
    }
  | {
      type: "h";
    };
export const entriesReducer = (
  state: EntriesState,
  action: ActionType
): EntriesState => {
  switch (action.type) {
    case "Entries - Add entry":
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };

    default:
      return state;
  }
};
