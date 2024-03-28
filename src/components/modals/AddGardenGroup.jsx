import { DefaultModal } from "../../imports";
import {
  DialogContentText,
  Box,
  TextField,
  FormControl,
  Select,
} from "@mui/material";

import { MenuItem, InputLabel } from "@mui/material";

import { useValidate } from "../../hooks/useValidate";

import { useState } from "react";

import { useGardenFunctions } from "../gardens/utils/useGardenFunctions";

const AddGardrenGroup = ({ gardenData, show, handleClose, setGardenGroups }) => {
    //Garden Functions
    const { createGardenGroup } = useGardenFunctions();

  const [formData, setFormData] = useState({
    groupName: "",
    gardenID: "",
  });

  // Form Validation Hook
  const [formErrors, validateForm] = useValidate(formData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //Validate Form Data
    const isValid = validateForm();

    if (isValid) {

    //Create Garden Group
    createGardenGroup(formData, setGardenGroups);

    //Reset Form
    setFormData({
      groupName: "",
      gardenID: "",
    });


    //Close Modal
    handleClose(false);
    }
  };

  return (
    <DefaultModal
      displayModal={show}
      setDisplayModal={handleClose}
      modalTitle="Create a Plant Group"
      cancel={true}
      handleSubmit={handleSubmit}
    >
      <DialogContentText sx={{ pb: 2 }}>
        Enter a Name for your Plant Group
      </DialogContentText>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          width: { xs: "100%", md: "400px" },
          mt: 2,
        }}
      >
        <FormControl sx={{ mt: 2 }} error= {formErrors.garden ? true:false}>
          <InputLabel id="gardenID">Select a Garden</InputLabel>
          <Select
            labelId="gardenID"
            id="gardenID"
            name="gardenID"
            variant="standard"
            value={formData.gardenID}
            onChange={handleChange}
            sx={{ width: "200px" }}
          >
            {gardenData.map((garden) => (
              <MenuItem key={garden.gardenID} value={garden.gardenID}>
                {garden.gardenName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          fullWidth
          required
          variant="filled"
          id="groupName"
          label="Group Name"
          name="groupName"
          autoComplete="groupName"
          value={formData.groupName}
          onChange={handleChange}
          error={formErrors.groupName ? true : false}
          helperText={formErrors.groupName}
        />
      </Box>
    </DefaultModal>
  );
};

export default AddGardrenGroup;
