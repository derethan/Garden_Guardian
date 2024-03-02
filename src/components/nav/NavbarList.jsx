import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import { privateAppRoutes } from "../../routes";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material";

import { cloneElement } from "react";

// Props validation
import PropTypes from "prop-types";

const NavbarList = ({ open, view, type}) => {
    const theme = useTheme();

    return (

        <List>
            {privateAppRoutes.map(
              (link) =>
                link.Type === type && (
                  <NavLink
                    to={link.path}
                    key={link.ID}
                    style={{
                      textDecoration: "none",
                      color: theme.typography.primary.textDark,
                    }}
                  >
                    <ListItem
                      key={link.ID}
                      disablePadding
                      sx={{ display: "block" }}
                    >
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {cloneElement(link.icon, {style: {color: link.path === view && !open ? theme.palette.sidebar.navLinks : theme.typography.primary.textDark}})}
                          {/* This is the Icon For the Link, Set in Routes.JSX */}
                        </ListItemIcon>
                        <ListItemText
                          primary={link.Name}
                          sx={{
                            opacity: open ? 1 : 0,
                            color:
                              link.path === view
                                ? theme.palette.sidebar.navLinks
                                : theme.typography.primary.textDark,
                          }}
                          primaryTypographyProps={{
                            style: {fontWeight: link.path === view ? "bold" : "normal"},
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </NavLink>
                )
            )}
          </List>

    )
}

NavbarList.propTypes = {
    open: PropTypes.bool.isRequired,
    view: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default NavbarList;

