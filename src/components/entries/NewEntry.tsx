import { Box, Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { EntriesContext } from "../../context";
import SaveIcon from "@mui/icons-material/Save";
import AddIcon from "@mui/icons-material/Add";

export const NewEntry = () => {
  const { addEntry } = useContext(EntriesContext);

  const [isAdding, setIsAdding] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isInputTouched, setIsInputTouched] = useState(false);

  const onSave = () => {
    if (inputValue.length === 0) return;
    addEntry(inputValue);
    resetFields();
  };

  const resetFields = () => {
    setIsAdding(false);
    setInputValue("");
    setIsInputTouched(false);
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      {isAdding ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="New entry"
            autoFocus
            multiline
            label="New entry"
            helperText={
              isInputTouched && inputValue.length === 0 && "Type a value"
            }
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            error={isInputTouched && inputValue.length === 0}
            onBlur={() => setIsInputTouched(true)}
          />
          <Box display={"flex"} justifyContent={"space-between"}>
            <Button
              variant="outlined"
              color="error"
              onClick={() => setIsAdding(false)}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveIcon />}
              onClick={onSave}
            >
              Save
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddIcon />}
          fullWidth
          variant="outlined"
          onClick={() => setIsAdding(true)}
        >
          Add entry
        </Button>
      )}
    </Box>
  );
};
