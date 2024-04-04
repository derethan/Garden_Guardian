/*
    BottomNav.jsx is a component that is used to display the bottom navigation bar in the application.
    This component is used in the SideBarWrapper.jsx component.

    
*/

import { useState } from "react";
import { Link } from "react-router-dom";
import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";

import { privateAppRoutes } from "../../routes";

const BottomNav = ({ view }) => {
  const [value, setValue] = useState(view);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "sidebar.primary",
      }}
      elevation={3}
    >
      <BottomNavigation
        sx={{
          maxWidth: 500,
          margin: "auto",
          backgroundColor: "sidebar.primary",
        }}
        value={value}
        onChange={handleChange}
      >
        {privateAppRoutes.map(
          (link) =>
            link.Type === "App" && (
              <BottomNavigationAction
                component={Link}
                to={link.path}
                label={link.ID}
                value={link.path}
                key={link.ID}
                icon={link.icon}
              />
            )
        )}
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
