import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  capitalize,
} from "@mui/material";
import { Layout } from "../../components/layouts";
import SaveIcon from "@mui/icons-material/Save";
import { EntryStatus } from "../../interfaces";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { ChangeEvent, SyntheticEvent, useMemo, useState } from "react";

const validStatus: EntryStatus[] = ["pending", "inProgress", "done"];

const EntryPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [entryStatus, setEntryStatus] = useState<EntryStatus>("pending");
  const [isInputTouched, setIsInputTouched] = useState(false);

  const isInvalid = useMemo(
    () => isInputTouched && inputValue.length === 0,
    [inputValue, isInputTouched]
  );

  const onInputChanged = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(event.target.value);
  };

  const onStatusChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setEntryStatus(event.target.value as EntryStatus);
  };

  const onSave = () => {
    if (!isInputTouched) return;
  };

  return (
    <Layout>
      <Grid container justifyContent={"center"} sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader title="Entry" subheader={`Created ago`} />
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder="New entry"
                multiline
                label="New entry"
                value={inputValue}
                onChange={onInputChanged}
                helperText={isInvalid && "Type a value"}
                onBlur={() => {
                  setIsInputTouched(true);
                }}
                error={isInvalid}
              />
              <FormControl>
                <FormLabel>Status:</FormLabel>
                <RadioGroup row value={entryStatus} onChange={onStatusChanged}>
                  {validStatus.map((status) => (
                    <FormControlLabel
                      key={status}
                      value={status}
                      control={<Radio />}
                      label={capitalize(status)}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>

            <CardActions>
              <Button
                startIcon={<SaveIcon />}
                variant="contained"
                fullWidth
                onClick={onSave}
                disabled={inputValue.length === 0}
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <IconButton
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          backgroundColor: "red",
          color: "white",
        }}
      >
        <DeleteForeverIcon />
      </IconButton>
    </Layout>
  );
};

export default EntryPage;
