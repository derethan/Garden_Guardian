import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Avatar,
  Tooltip,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import logo from "../../assets/shield.png";

import { useState } from "react";
import { useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuthProvider";

const pages = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },
  { name: "Contact Us", path: "/contact" },
  { name: "Premium", path: "/premium" },
];
const settings = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Account", path: "/account" },
  { name: "Settings", path: "/settings" },
  { name: "Logout", path: "/logout" },
];

//AppBarTop Component
const LandingSiteNav = () => {
  const theme = useTheme();

  const { isLoggedIn } = useAuth();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "background.default" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0",
            [theme.breakpoints.up("md")]: {
              padding: "0 24px",
            },
          }}
        >
          {/* Desktop View Logo */}
          <Typography
            variant="h6"
            noWrap
            component="h6"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,

              fontFamily: "AniMe",
              fontWeight: 700,
              fontSize: "1rem",
              letterSpacing: ".2rem",
              color: theme.typography.primary.textDark,
              textDecoration: "none",
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="logo"
              sx={{ width: "50px", height: "50px" }}
            />
            <Link to="/">Garden Guardian</Link>
          </Typography>

          {/* Mobile View Navbar Links and Icon */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  component={Link}
                  to={page.path}
                  key={page.name}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile View Logo */}
          <Typography
            variant="h5"
            noWrap
            component="h5"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              fontSize: "1rem",
              letterSpacing: ".3rem",
              color: theme.typography.primary.textDark,
              textDecoration: "none",
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="logo"
              sx={{ width: "50px", height: "50px" }}
            />
            Garden <br /> Guardian
          </Typography>

          {/* Dektop View Navbar Links */}
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                component={Link}
                to={page.path}
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Mobile View Login Link */}
          <Box
            sx={{
              flexGrow: 0,
              display: {
                xs: isLoggedIn ? "none" : "flex",
                md: isLoggedIn ? "none" : "flex",
              },
            }}
          >
            <Button
              component={Link}
              to="/login"
              sx={{
                my: 2,
                color: theme.typography.primary.textDark,
                display: "block",
                fontFamily: "AniMe",
              }}
            >
              Login
            </Button>
          </Box>

          {/* Avatar and Profile Menu
              - TODO: Customize and add later
                      - Add conditional to display Login or Avatar Based on Auth Status */}

          {isLoggedIn && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    component={Link}
                    to={setting.path}
                    key={setting.name}
                    onClick={handleCloseUserMenu}
                  >
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default LandingSiteNav;
