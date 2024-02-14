//Import necessary libraries
import { Box, Button, Card, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useValidate } from "../hooks/useValidate";
import { usePostRequest } from "../hooks/usePostRequest";

import AccountDetailsInput from "./account/accountDetailsInput";
import PasswordWithConfirmInput from "./account/PasswordWithConfirmInput";

// Function to handle the registration form
const RegisterForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // const [isRegistered, setIsRegistered] = useState(false);

  const [formErrors, validateForm] = useValidate(formData);
  const [postStatus, postMessage, , setPostMessage, postData] = usePostRequest();

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
    <Card variant="dark" sx={{ padding: 2, margin: 2 }}>
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
            color="secondary"
            sx={{ mt: 3, mb: 2 }}
          >
            Register Account
          </Button>
        </Box>

        <Link to="/login">
          <Typography
            variant="body2"
            color="text.primary"
            sx={{
              "&:hover": {
                color: "primary.main", // Change this to your desired color
              },
            }}
          >
            Already have an account? Sign in
          </Typography>
        </Link>
      </Box>
    </Card>
  );
};

export default RegisterForm;
