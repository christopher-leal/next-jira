import { createContext } from "react";
import { Entry } from "../../interfaces";

interface ContextProps {
  entries: Entry[];
  addEntry: (desc: string) => void;
  updateEntry: (entry: Entry) => void;
}
export const EntriesContext = createContext({} as ContextProps);
