import { Toolbar, IconButton, Box } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material";
import AccountIcon from "@mui/icons-material/AccountCircle";

import { drawerWidth } from "../../globalVar";

//Notification Icons
import NotificationsNone from '@mui/icons-material/NotificationsNoneOutlined';
// import NotificationsActive from '@mui/icons-material/NotificationsActive';

//Other Navbar icons
import SettingsIcon from '@mui/icons-material/SettingsRounded';

//Import components
import PageTitle from "./PageTitle";
import DeviceStatusIcon from "./DeviceStatusIcon";

import { useState, useEffect } from "react";

import { useGetDeviceInfo } from "../../hooks/useGetDeviceInfo";

//import props validation
import PropTypes from "prop-types";

//AppBar Styled Component
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

//AppBarTop Component
const AppBarTop = ({ open, handleDrawerOpenClose, title }) => {
  const theme = useTheme();

  const [hasDevice, setHasDevice] = useState(false);
  const { checkForDevice } = useGetDeviceInfo();

  useEffect(() => {
    async function fetchData() {
      //check if the user has a device
      const deviceExists = await checkForDevice();

      if (deviceExists) {
        setHasDevice(true);
        return;
      }
    }
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AppBar
      position="fixed"
      open={open}
      sx={{ backgroundColor: theme.palette.sidebar.primary }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpenClose}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <PageTitle title={title} />

          {hasDevice && (
            <DeviceStatusIcon />
          )}

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 2,
            }}
          >
            
            <IconButton
              color="inherit"
              aria-label="account"
              edge="end"
              sx={{ marginRight: 1 }}
            >
              <SettingsIcon />
            </IconButton>

            <IconButton
              color="inherit"
              aria-label="account"
              edge="end"
              sx={{ marginRight: 5 }}
            >
              <NotificationsNone />
            </IconButton>

            <IconButton
              color="inherit"
              aria-label="account"
              edge="end"
              sx={{ marginRight: 2 }}
            >
              <AccountIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

AppBarTop.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDrawerOpenClose: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default AppBarTop;
