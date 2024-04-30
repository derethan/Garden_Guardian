import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers";

import { useState } from "react";
import dayjs from "dayjs";

import { useGardenFunctions } from "../utils/useGardenFunctions";

const EditProperty = ({
  open,
  setOpen,
  property,
  plantData,
  setStateData,
  children,
  formData,
  setFormData,
  title,
  caption,
}) => {
  const { addPlantAttributes } = useGardenFunctions();

  // When the form is submitted, the data is sent to the addPlantAttributes function
  const handleSubmit = (event) => {
    event.preventDefault();

    //Update the stored plant Data with the new property (local Storage)
    addPlantAttributes(formData, property, plantData);

    // Update the State for the Plant page
    setStateData(formData);

    //Close the dialog
    setOpen(false);

    //Reset the formData
    setFormData(null);
  };

  const handClose = () => {
    setOpen(false);
    setFormData(null);
  };

  return (
    <Dialog
      open={open}
      onClose={handClose}
      PaperProps={{
        component: "form",
        onSubmit: handleSubmit,
        sx: {
          p: 2,
          width: { xs: "100%", sm: "400px" },
        },
      }}
    >
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>
        <DialogContentText>{caption}</DialogContentText>

        {children}
      </DialogContent>

      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button type="submit" disabled={!formData}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProperty;

// const formData = new FormData(event.currentTarget);
// const formJson = Object.fromEntries(formData.entries());
