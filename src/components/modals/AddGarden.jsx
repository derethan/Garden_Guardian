import DefaultModal from "./DefaultModal";

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
} from "@mui/material";

import { useState } from "react";

const AddGarden = ({ show, handleClose }) => {
  const [gardenType, setGardenType] = useState("placeholder");
  const [isHydro, setIsHydro] = useState(false);

  const handleChange = (event) => {
    if (event.target.name === "hydroponic") {
      setIsHydro(event.target.checked);
      console.log(event.target.checked);
    } else {
      setGardenType(event.target.value);
      console.log(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    e.preventDefault();

    const gardenName = event.target.gardenName.value;
    const gardenLocation = event.target.gardenLocation.value;
    const gardenType = event.target.gardenType.value;
    const hydroponic = event.target.hydroponic.checked;

    console.log(gardenName, gardenLocation, gardenType, hydroponic);
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
          width: { xs: "100%", md: "400px"},
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
        />

        <TextField
          fullWidth
          required
          id="gardenLocation"
          label="Garden Location"
          name="gardenLocation"
          autoComplete="gardenLocation"
        />

        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
          <FormControl>
            <InputLabel id="gardenType">Garden Type</InputLabel>
            <Select
              labelId="gardenType"
              id="gardenType"
              label="Garden Type"
              name="gardenType"
              value={gardenType}
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
          </FormControl>


          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <FormGroup>
              <FormControlLabel
                label={"Hydroponic"}
                labelPlacement="top"
                control={
                  <Switch
                    id="hydroponic"
                    name="hydroponic"
                    checked={isHydro}
                    onChange={handleChange}
                  />
                }
              />
            </FormGroup>
          </Box>
        </Box>
      </Box>
    </DefaultModal>
  );
};

export default AddGarden;
