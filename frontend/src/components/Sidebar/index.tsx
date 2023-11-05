import {
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Inbox, Drafts } from "@mui/icons-material";

// import {} from "@emotion/styled";

// const useStyles = makeStyles((theme) => ({
//   drawer: {
//     width: 240,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: 240,
//   },
//   toolbar: theme.mixins.toolbar,
// }));

const Sidebar = () => {
  // const classes = useStyles();

  return (
    <Drawer variant="permanent" anchor="left">
      <div />
      <List>
        <ListItem>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Drafts />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
