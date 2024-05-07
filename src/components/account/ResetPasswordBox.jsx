// Import Components
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Box,
  useTheme,
} from "@mui/material";

import { PrimaryButton } from "../PrimaryButton";
import DontHaveAccount from "./DontHaveAccountLink";
import LoginLink from "./LoginLink";

import { useState } from "react";
import { useValidate } from "../../hooks/useValidate";

const ResetPasswordBox = () => {
  const theme = useTheme();

  const [formData, setFormData] = useState({
    email: "",
  });
  const [formErrors, validateForm, setErrors] = useValidate(formData);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
    if (validateForm()) {
      console.log("Valid Form");
    } else {
      console.log("Invalid Form");
    }
  };

  return (
    <Card
      variant="light"
      sx={{
        padding: 2,
      }}
    >
      <CardContent>
        <Typography
          variant="h4"
          color={theme.typography.primary.cardTitle}
          sx={{
            fontWeight: 600,
          }}
        >
          Reset Password
        </Typography>
        <Typography
          variant="subtitle2"
          color={theme.typography.primary.subtitle}
          sx={{ paddingTop: "8px" }}
        >
          Enter your email address to reset your password
        </Typography>
      </CardContent>
      <Box type="form" component="form" noValidate onSubmit={handleSubmit}>
        <TextField
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          margin="normal"
          color="primary"
          size="small"
          variant="outlined"
          sx={{
            backgroundColor: "background.default",
          }}
          onChange={(event) => {
            setFormData({ ...formData, email: event.target.value });
            setErrors({ ...formErrors, email: "" });
          }}
          error={formErrors.email ? true : false}
          helperText={formErrors.email}
        />

        <PrimaryButton disabled fullWidth type="submit" text="Reset Password" />
      </Box>

      <Box
        sx={{
          paddingTop: 4,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <DontHaveAccount />
        <LoginLink />
      </Box>
    </Card>
  );
};

export default ResetPasswordBox;
