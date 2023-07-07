import { Entry, EntryStatus } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";
import { FC, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [],
};

interface Props {
  children: React.ReactElement;
}
export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addEntry = (desc: string): void => {
    const entry: Entry = {
      _id: uuidv4(),
      description: desc,
      createdAt: Date.now(),
      status: "pending",
    };

    dispatch({ type: "Entries - add entry", payload: entry });
  };

  const updateEntry = (entry: Entry): void => {
    dispatch({ type: "Entries - update entry", payload: entry });
  };

  return (
    <EntriesContext.Provider value={{ ...state, addEntry, updateEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};
