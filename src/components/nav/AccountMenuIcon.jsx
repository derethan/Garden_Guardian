import { useState } from "react";

import {
  Box,
  IconButton,
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

import AccountIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

//Import Private Routes
import { privateAppRoutes } from "../../routes";

const settings = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Account", path: "/account" },
  { name: "Settings", path: "/settings" },
  { name: "Logout", path: "/logout" },
];

const AccountMenuIcon = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Options">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Avatar" src="../../assets/logo.png">
            <AccountIcon fontSize="large" />
          </Avatar>
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
        {privateAppRoutes.map(
          (link) =>
            link.Type === "User" && (
              <MenuItem
                component={Link}
                to={link.path}
                key={link.Name}
                onClick={handleCloseUserMenu}
              >
                <Typography textAlign="center">{link.Name}</Typography>
              </MenuItem>
            )
        )}
      </Menu>
    </Box>
  );
};

export default AccountMenuIcon;
