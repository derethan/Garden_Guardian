//Import necessary libraries
import { Box, Button, Card, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useValidate } from "../../hooks/useValidate";
import { usePostRequest } from "../../hooks/usePostRequest";

import AccountDetailsInput from "./accountDetailsInput";
import PasswordWithConfirmInput from "./PasswordWithConfirmInput";
import LoginLink from "./LoginLink";

// Function to handle the registration form
const RegisterForm = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // const [isRegistered, setIsRegistered] = useState(false);

  const [formErrors, validateForm] = useValidate(formData);
  const [postStatus, postMessage, , setPostMessage, postData] =
    usePostRequest();

  // Function to handle the form input changes, Updates the formdata state with the new value
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });

    if (event.target.name === "email") {
      setPostMessage(""); // Removes duplicate Email warning
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Form Data: ", formData);

    // If the form is valid, Post the data to the server
    if (validateForm()) {
      const URL = import.meta.env.VITE_API_URL;
      // Post the data to the server
      const success = await postData(URL + "users/register", formData);

      // If the user is registered, redirect to the login page
      if (success) {
        console.log("register status: ", success);
        // setIsRegistered(success);

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });

        navigate("/login");
      }
    } else {
      console.log("Form is invalid");
    }
  };

  return (
    <Card variant="light" sx={{ padding: 2, margin: 2 }}>
      <Typography
        variant="h4"
        color={theme.typography.primary.cardTitle}
        sx={{
          fontWeight: 600,
        }}
      >
        Create Account
      </Typography>
      <Typography
        variant="subtitle2"
        color={theme.typography.primary.subtitle}
        sx={{ paddingTop: "8px" }}
      >
        Enter your details to create an account
      </Typography>

      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <AccountDetailsInput
          formData={formData}
          formErrors={formErrors}
          handleChange={handleChange}
        />
        {postStatus === 409 && (
          <Typography variant="body1" color="error">
            {postMessage}
          </Typography>
        )}

        <PasswordWithConfirmInput
          formData={formData}
          formErrors={formErrors}
          handleChange={handleChange}
        />

        <Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Register Account
          </Button>
        </Box>
          <LoginLink />
      </Box>
    </Card>
  );
};

export default RegisterForm;
