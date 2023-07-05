import { EntriesContext, entriesReducer } from "./";
import { FC, useReducer } from "react";

export interface EntriesState {}

const ENTRIES_INITIAL_STATE: EntriesState = {};

interface Props {
  children: React.ReactElement;
}
export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  return (
    <EntriesContext.Provider value={{}}>{children}</EntriesContext.Provider>
  );
};
