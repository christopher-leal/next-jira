import { Entry } from "../../interfaces";
import { EntriesState } from "./EntriesProvider";

type ActionType =
  | {
      type: "Entries - add entry";
      payload: Entry;
    }
  | {
      type: "Entries - update entry";
      payload: Entry;
    };
export const entriesReducer = (
  state: EntriesState,
  action: ActionType
): EntriesState => {
  switch (action.type) {
    case "Entries - add entry":
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
    case "Entries - update entry":
      const entries = state.entries.map((entry) => {
        if (entry._id === action.payload._id) {
          return action.payload;
        }
        return entry;
      });
      return {
        ...state,
        entries,
      };

    default:
      return state;
  }
};
