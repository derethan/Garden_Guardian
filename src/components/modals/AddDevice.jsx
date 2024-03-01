import { Card, Container } from "@mui/material";
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

const AddDevice = ({ display, setShowAddDeviceModal }) => {
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
        >
          <DeviceUnknownIcon fontSize="large" sx={{color: 'green'}} />
          <DialogTitle>Add a Device</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{paddingBottom: 2}}>
              {
                "Oops! It looks like you haven't added a device yet. Please enter your Device ID to get started."
              }
            </DialogContentText>
            <TextField
              autoFocus
              required
              fullWidth
              id="deviceIDField"
              name="deviceIDfield"
              label="Device ID"
              type="text"
              margin="normal"
              color="primary"
              size="small"
              variant="outlined"
            />
          </DialogContent>
          <DialogActions sx={{justifyContent:'center'}}>
            <PrimaryButton text="Cancel" onClick={() => setShowAddDeviceModal(false)} />
            <PrimaryButton text="Submit" type="submit" />
          </DialogActions>
        </Card>
      </Container>
    </div>
  );
};

export default AddDevice;