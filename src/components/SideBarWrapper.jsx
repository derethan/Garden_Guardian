import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";


import AppBarTitle from "./header/AppBarTitle";

import { useTheme } from "@mui/material";
import React, { useState } from "react";

import AppBarTop from "./nav/AppBarTop";
import NavbarList from "./nav/NavbarList";

import { drawerWidth } from "../globalVar";

// Props Validation
import PropTypes from "prop-types";

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



//Drawer Styled Component
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

//Main Component
export default function SideBarWrapper({ children, view, title }) {
  const theme = useTheme();

  // Open or Close state
  const [open, setOpen] = useState(() => {
    const savedState = localStorage.getItem("sidebarOpen");
    return savedState !== null ? JSON.parse(savedState) : false;
  });

  //Use Effect to save the state of the sidebar to Local Storage
  React.useEffect(() => {
    localStorage.setItem("sidebarOpen", JSON.stringify(open));
  }, [open]);

  const handleDrawerOpenClose = () => {
    //If the drawer is closed, open it
    if (!open) {
      setOpen(true);
    }
    //If the drawer is open, close it
    else {
      setOpen(false);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>

    <AppBarTop open={open} handleDrawerOpenClose={handleDrawerOpenClose} title={title} />

      <Drawer variant="permanent" open={open}>

        <Box
          sx={{
            height: "100%",
            backgroundColor: theme.palette.sidebar.primary,
          }}
        >
          <Box>
            <DrawerHeader>
              {open ? <AppBarTitle /> : null}

              <IconButton onClick={handleDrawerOpenClose}>
                {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </DrawerHeader>

            <Divider />
          </Box>

          {/* App Pages */}
          <NavbarList open={open} view={view} type="App" />

          <Divider />

          {/* User Pages */}

          <NavbarList open={open} view={view} type="User" />
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <div>{children}</div>
      </Box>
    </Box>
  );
}

//Props Validation
SideBarWrapper.propTypes = {
  children: PropTypes.node,
  view: PropTypes.string,
  title: PropTypes.string,
};