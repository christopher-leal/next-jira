import { List, Paper } from "@mui/material";
import { EntryCard } from "./EntryCard";
import { Entry, EntryStatus } from "../../interfaces/entry";
import { DragEvent, FC, useContext, useMemo } from "react";
import { EntriesContext, UIContext } from "../../context";
import styles from "./EntryList.module.css";

interface Props {
  status: EntryStatus;
}
export const EntryList: FC<Props> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDraggingEntry, setIsDraggingEntry } = useContext(UIContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries, status]
  );

  const allowDrop = (event: DragEvent) => {
    event.preventDefault();
  };

  const onDropEntry = (event: DragEvent) => {
    const id = event.dataTransfer.getData("text");
    const entry: Entry = entries.find((entry) => entry._id === id)!;
    entry.status = status;
    updateEntry(entry);
    setIsDraggingEntry(false);
  };

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDraggingEntry ? styles.dragging : ""}
    >
      <Paper
        sx={{
          height: "calc(100vh - 200px)",
          overflow: "scroll",
          backgroundColor: "transparent",
          padding: "1px 5px",
        }}
      >
        <List
          sx={{
            opacity: isDraggingEntry ? 0.5 : 1,
            transition: "all 0.3s ease-in",
          }}
        >
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
