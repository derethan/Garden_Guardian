import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import { useState } from "react";

import { PrimaryButton } from "../PrimaryButton";

//Form Validation Import
import { useValidate } from "../../hooks/useValidate";

import { usePostRequest } from "../../hooks/usePostRequest";
import { useAuth } from "../../hooks/useAuthProvider";

const AccountSettingsBanner = () => {
  // User Data
  const { user } = useAuth();

  const {postMessage, setPostMessage, postData} =
    usePostRequest();

  // State Variables
  const [formData, setFormData] = useState({
    password: "",
    newPassword: "",
  });

  const [snackBarState, setSnackBarState] = useState({
    open: false,
    horizontal: "right",
    vertical: "bottom",
  });

  // Form Validation
  const [formErrors, validateForm, setErrors] = useValidate(formData);

  const handleChange = (e) => {
    //Clear form errors
    setErrors({});

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // If Demo Account do not allow password change
    if (user.email === "demo") {
      setErrors({ password: "Password cannot be changed on a demo account" });
      return;
    }

    // Validate Form Data
    if (validateForm()) {
      // If the Passwords are the same do not allow password change
      if (formData.password === formData.newPassword) {
        setErrors({
          password: "New password cannot be the same as the old password",
          newPassword: "New password cannot be the same as the old password",
        });
        return;
      }

      // Post Request Goes Here
      const URL = import.meta.env.VITE_API_URL;

      postData(URL + "users/changePassword", formData).then((response) => {
        if (response.status === 401) {
          setErrors({ password: response.message });
          return;
        }

        if (response.status === 200) {
          setPostMessage(response.message);
        }

        //Reset form data
        setFormData({
          password: "",
          newPassword: "",
        });

        //Show Snackbar
        setSnackBarState({ ...snackBarState, open: true });
      });
    } else {
      console.log("Form is invalid");
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box
        sx={{
          backgroundColor: "background.lightGrey",
          padding: "1rem",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Account Settings
        </Typography>

        {/* Grid container to display Account Settings Options */}
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              color={"text.secondary"}
              fontWeight={"bold"}
            >
              Change Password
            </Typography>

            <Box
              type="form"
              component="form"
              noValidate
              autoComplete="false"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem",
                pt: 2,
              }}
              onSubmit={handleSubmit}
            >
              <TextField
                type="password"
                name="password"
                label="Password"
                autoComplete="off"
                value={formData.password}
                onChange={handleChange}
                placeholder="Current Password"
                color="primary"
                size="small"
                variant="outlined"
                sx={{
                  backgroundColor: "background.lightGrey",
                  width: { xs: "100%", sm: "300px" },
                }}
                error={formErrors.password ? true : false}
                helperText={formErrors.password}
              />
              <TextField
                type="password"
                name="newPassword"
                label="New Password"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="New Password"
                color="primary"
                size="small"
                variant="outlined"
                sx={{
                  backgroundColor: "background.lightGrey",
                  width: { xs: "100%", md: "300px" },
                }}
                error={formErrors.newPassword ? true : false}
                helperText={formErrors.newPassword}
              />

              <PrimaryButton type="submit" text="Change Password" />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Snackbar to display success message */}
      <Snackbar
        anchorOrigin={{
          vertical: snackBarState.vertical,
          horizontal: snackBarState.horizontal,
        }}
        open={snackBarState.open}
        autoHideDuration={6000}
        onClose={() => setSnackBarState({ ...snackBarState, open: false })}
      >
        <Alert
          onClose={() => setSnackBarState({ ...snackBarState, open: false })}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {postMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AccountSettingsBanner;
