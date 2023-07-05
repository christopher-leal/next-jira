import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import { UIContext } from "../../context";

export const Navbar = () => {
  const { openSidebar } = useContext(UIContext);

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge={"start"} onClick={openSidebar}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Next Jira</Typography>
      </Toolbar>
    </AppBar>
  );
};
