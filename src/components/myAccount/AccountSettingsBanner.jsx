import {
  Box,
  Container,
  Typography,
  Grid,
  Input,
  TextField,
} from "@mui/material";
import { useState } from "react";

import { PrimaryButton } from "../PrimaryButton";
import PasswordWithConfirmInput from "../account/PasswordWithConfirmInput";

const AccountSettingsBanner = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      currentPassword: "",
      newPassword: "",
    });
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
              flexDirection: { xs: "column", md: "row" },
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
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                placeholder="Current Password"
                color="primary"
                size="small"
                variant="outlined"
                sx={{
                  backgroundColor: "background.default",
                }}
              />
              <TextField
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="New Password"
                color="primary"
                size="small"
                variant="outlined"
                sx={{
                  backgroundColor: "background.default",
                }}
              />
              <PrimaryButton type="submit" text="Change Password" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AccountSettingsBanner;
