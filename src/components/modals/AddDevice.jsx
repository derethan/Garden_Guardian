import { Box, Card, Container } from "@mui/material";
import "./modals.css";
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
} from "@mui/material";

import DeviceUnknownIcon from "@mui/icons-material/DeviceUnknown";

import { PrimaryButton } from "../../components/PrimaryButton";

import { useState } from "react";

import { usePostRequest } from "../../hooks/usePostRequest";

const AddDevice = ({ display, setShowAddDeviceModal }) => {
  const [deviceData, setDeviceID] = useState({
    device_id: "",
    device_name: "",
  });

  //Create the post request hook
  const [postStatus, postMessage, , , postData] = usePostRequest();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDeviceID((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    const URL = import.meta.env.VITE_API_URL;

    event.preventDefault();

    // Post the device data to the API
    try {
      postData(URL + 'users/addDevice', deviceData);
    }
    catch (error) {
      console.error(error);
    }

    console.log(`Device ID: ${JSON.stringify(deviceData)}`);
  };

  // If the display prop is false, Do not show Modal
  if (!display) {
    return null;
  }
  return (
    <div className="add-device-wrapper">
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          variant="light"
          sx={{
            padding: 2,
            maxWidth: { md: "100%", lg: "100%" },
          }}
          component="form"
          onSubmit={handleSubmit}
          noValidate
        >
          <DeviceUnknownIcon fontSize="large" sx={{ color: "green" }} />
          <DialogTitle>Add a Device</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ paddingBottom: 2 }}>
              {
                "Oops! It looks like you haven't added a device yet. Please enter your Device ID to get started."
              }
            </DialogContentText>
            <Box sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            
            }}>
              <TextField
                id="deviceIDField"
                name="device_id"
                label="Device ID"
                type="text"
                margin="normal"
                color="primary"
                size="small"
                variant="outlined"
                value={deviceData.ID}
                onChange={handleChange}
              />
              <TextField
                id="deviceNameField"
                name="device_name"
                label="Enter a Name for your Device"
                type="text"
                margin="normal"
                color="primary"
                size="small"
                variant="outlined"
                value={deviceData.Name}
                onChange={handleChange}
              />
            </Box>
          </DialogContent>
          <DialogActions sx={{ justifyContent: "center" }}>
            <PrimaryButton
              text="Cancel"
              onClick={() => setShowAddDeviceModal(false)}
            />
            <PrimaryButton text="Submit" type="submit" />
          </DialogActions>
        </Card>
      </Container>
    </div>
  );
};

export default AddDevice;
