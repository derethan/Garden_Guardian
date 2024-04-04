import { Toolbar, IconButton, Box, useTheme, Tooltip } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";

import { drawerWidth } from "../../globalVar";

//Notification Icons
import NotificationsNone from "@mui/icons-material/NotificationsNoneOutlined";
// import NotificationsActive from '@mui/icons-material/NotificationsActive';

//Other Navbar icons
import SettingsIcon from "@mui/icons-material/SettingsRounded";

//Import components
import PageTitle from "./PageTitle";
import DeviceStatusIcon from "./DeviceStatusIcon";

import { useAuth } from "../../hooks/useAuthProvider";

//import props validation
import PropTypes from "prop-types";

import shield from "../../assets/shield.png";
import AccountMenuIcon from "./AccountMenuIcon";

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

  const { hasDevice, deviceID } = useAuth();

  return (
    <AppBar
      position="fixed"
      open={open}
      sx={{ backgroundColor: theme.palette.sidebar.primary }}
    >
      <Toolbar>
        {!isMobile && (
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
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box name="PageTitle" display={"flex"} alignItems={"center"} gap={1}>
            {isMobile && (
              <Box
                component="img"
                src={shield}
                alt="logo"
                sx={{
                  width: { xs: "25px", sm: "36px" },
                  height: { xs: "25px", sm: "36px" },
                }}
              />
            )}
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
          </Box>

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
              <Tooltip title="Notifications" arrow>
                <IconButton
                  color="inherit"
                  aria-label="account"
                  edge="end"
                  size="large"
                  sx={{ marginRight: 1 }}
                >
                  <NotificationsNone />
                </IconButton>
              </Tooltip>
            )}

            <AccountMenuIcon />
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
