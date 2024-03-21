import { Toolbar, IconButton, Box } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material";
import AccountIcon from "@mui/icons-material/AccountCircle";

import { drawerWidth } from "../../globalVar";

//Notification Icons
import NotificationsNone from "@mui/icons-material/NotificationsNoneOutlined";
// import NotificationsActive from '@mui/icons-material/NotificationsActive';

//Other Navbar icons
import SettingsIcon from "@mui/icons-material/SettingsRounded";

//Import components
import PageTitle from "./PageTitle";
import DeviceStatusIcon from "./DeviceStatusIcon";

import { useEffect } from "react";

import { useGetDeviceInfo } from "../../hooks/useGetDeviceInfo";

import { useAuth } from "../../hooks/useAuthProvider";

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
const AppBarTop = ({ open, handleDrawerOpenClose, title, isMobile }) => {
  const theme = useTheme();

  //Check if the user has a device - MIGHT MOVE TO AUTHPROVIDER
  const { checkForDevice } = useGetDeviceInfo();
  const { hasDevice, setHasDevice, deviceID, setDeviceID } = useAuth();

  useEffect(() => {
    async function fetchData() {
      //check if the user has a device
      const response = await checkForDevice();

      if (response.status) {
        setHasDevice(true);
        setDeviceID(response.device_id);
        return;
      }
    }
    if (!hasDevice) {
      fetchData();
    }
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
          <PageTitle
            title={title}
            sx={{
              // Material responsive breakpoint for fontSize
              fontSize: {
                xs: "1rem",
                sm: "1.2rem",
              },
            }}
          />

          {hasDevice && <DeviceStatusIcon deviceID={deviceID} />}

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 0,
            }}
          >
            {!isMobile && (
              <IconButton
                color="inherit"
                aria-label="account"
                edge="end"
                sx={{ marginRight: 1 }}
              >
                <SettingsIcon />
              </IconButton>
            )}

            {!isMobile && (
              <IconButton
                color="inherit"
                aria-label="account"
                edge="end"
                sx={{ marginRight: 5 }}
              >
                <NotificationsNone />
              </IconButton>
            )}

            {!isMobile && (
              <IconButton
                color="inherit"
                aria-label="account"
                edge="end"
                sx={{ marginRight: 2 }}
              >
                <AccountIcon fontSize="large" />
              </IconButton>
            )}
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
  isMobile: PropTypes.bool,
};

export default AppBarTop;
