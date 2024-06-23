/* eslint-disable react/prop-types */
import { DefaultModal } from "../../imports";

import {
  Box,
  DialogContentText,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  FormHelperText,
} from "@mui/material";

import { useState } from "react";
import { useValidate } from "../../hooks/useValidate";

import { useGardenFunctions } from "../gardens/utils/useGardenFunctions";

export const AddGarden = ({ show, handleClose, setGardens, setResultMessage }) => {
  /************ Imports ***********************/
  const { createGarden } = useGardenFunctions();

  /************ State ***********************/
  const [formData, setFormData] = useState({
    gardenName: "",
    gardenLocation: "",
    gardenType: "",
  });

  const [formErrors, validateForm] = useValidate(formData);

  /************ Functions ***********************/

  const handleChange = (event) => {
    const { name, value, checked } = event.target;

    if (name === "hydroponic") {
      setFormData({ ...formData, [name]: checked });
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //Validate Form Data
    const isValid = validateForm();

    if (isValid) {
      //Create the new garden
      const addGarden = createGarden(formData, setGardens);

      //Set the result message
      setResultMessage(addGarden);
      
      // Reset the form data
      setFormData({
        gardenName: "",
        gardenLocation: "",
        gardenType: "",
      });

      // Close the modal
      handleClose();

      return addGarden;
    }
  };

  return (
    <DefaultModal
      displayModal={show}
      setDisplayModal={handleClose}
      modalTitle="Create a Garden"
      cancel={true}
      handleSubmit={handleSubmit}
    >
      <DialogContentText sx={{ pb: 2 }}>
        Enter your Garden details Below
      </DialogContentText>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          width: { xs: "100%", md: "400px" },
          mt: 2,
        }}
      >
        <TextField
          fullWidth
          required
          id="gardenName"
          label="Garden Name"
          name="gardenName"
          autoComplete="gardenName"
          onChange={handleChange}
          error={formErrors.gardenName ? true : false}
          helperText={formErrors.gardenName}
        />

        <TextField
          fullWidth
          required
          id="gardenLocation"
          label="Garden Location"
          name="gardenLocation"
          autoComplete="gardenLocation"
          onChange={handleChange}
          error={formErrors.gardenLocation ? true : false}
          helperText={formErrors.gardenLocation}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <FormControl error={formErrors.gardenType ? true : false}>
            <InputLabel id="gardenType">Garden Type</InputLabel>
            <Select
              labelId="gardenType"
              id="gardenType"
              label="Garden Type"
              name="gardenType"
              value={formData.gardenType}
              onChange={handleChange}
              sx={{ width: "200px" }}
            >
              <MenuItem disabled value="placeholder">
                <em>Select an Option</em>
              </MenuItem>
              <MenuItem value="greenhouse">Greenhouse</MenuItem>
              <MenuItem value="outdoor">Outdoor</MenuItem>
              <MenuItem value="indoor">Indoor</MenuItem>
            </Select>
            {formErrors.gardenType && (
              <FormHelperText>{formErrors.gardenType}</FormHelperText>
            )}
          </FormControl>

          {/* <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <FormGroup>
              <FormControlLabel
                label={"Hydroponic"}
                labelPlacement="top"
                control={
                  <Switch
                    id="hydroponic"
                    name="hydroponic"
                    checked={formData.hydroponic}
                    onChange={handleChange}
                  />
                }
              />
            </FormGroup>
          </Box> */}
        </Box>
      </Box>
    </DefaultModal>
  );
};

export default AddGarden;
