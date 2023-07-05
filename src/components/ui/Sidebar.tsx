import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import { useContext } from "react";
import { UIContext } from "../../context";

const menuItems = ["Inbox", "Starred"];

export const Sidebar = () => {
  const { isSideMenuOpen, closeSidebar } = useContext(UIContext);

  return (
    <Drawer anchor="left" open={isSideMenuOpen} onClose={closeSidebar}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menu</Typography>
        </Box>
        <List>
          {menuItems.map((item, index) => (
            <ListItemButton key={item}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <StarIcon />}
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
