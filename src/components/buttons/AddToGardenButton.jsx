//Import MUI components
import { Box, Fab, Menu, MenuItem, Typography } from "@mui/material";

//Import MUI icons
import AddIcon from "@mui/icons-material/Add";

//Import React hooks
import { useState } from "react";
import { PrimaryButton } from "../PrimaryButton";

const AddToGardenButton = ({ handleAddGarden }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  //Function to handle the click event
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //Function to handle the close event
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { xs: "center", md: "flex-end" },
        p: 2,
      }}
    >

      <PrimaryButton
        text={'ADD'}
        color="primary"
        aria-label="newItem"
        id="newItem"
        size="small"
        onClick={handleClick}
        aria-controls={open ? "createMenu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx={{width: '100px'}}
      >
        <AddIcon sx={{color: 'white',mr:1}} />
      </PrimaryButton>

      <Menu
        id="createMenu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "newItem",
        }}
        sx={{ mt: 2 }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            handleAddGarden(true);
          }}
        >
          Add a New Garden
        </MenuItem>
        <MenuItem onClick={handleClose}>Create a Plant Group</MenuItem>
        <MenuItem onClick={handleClose}>
          Add a New Plant to Your Garden
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default AddToGardenButton;
