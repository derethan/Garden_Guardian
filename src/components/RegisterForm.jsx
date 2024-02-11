//Import necessary libraries
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

import { useValidate } from "../hooks/useValidate";
import { usePostRequest } from "../hooks/usePostRequest";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, validateForm] = useValidate(formData);
  const [isRegistered, setIsRegistered] = useState(false);
  const [postMessage, postData] = usePostRequest();

  // Function to handle the form input changes, Updates the formdata state with the new value
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // If the form is valid, Post the data to the server
    if (validateForm()) {
      const URL = import.meta.env.VITE_API_URL;
      // Post the data to the server
      const success = await postData(URL + 
        "users/register",
        formData
      );

      console.log("register status: ", success);
      setIsRegistered(success);
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
        <Typography variant="subtitle1" color="text.card">
          Account Details
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            padding: 2,
          }}
        >
          <TextField
            required
            label="First Name"
            name="firstName"
            id="firstName"
            variant="outlined"
            size="small"
            sx={{
              backgroundColor: "background.default",
            }}
            value={formData.firstName}
            onChange={handleChange}
            error={formErrors.firstName ? true : false}
            helperText={formErrors.firstName}
          />
          <TextField
            required
            label="Last Name"
            name="lastName"
            id="lastName"
            variant="outlined"
            size="small"
            sx={{
              backgroundColor: "background.default",
            }}
            value={formData.lastName}
            onChange={handleChange}
            error={formErrors.lastName ? true : false}
            helperText={formErrors.lastName}
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            id="email"
            variant="outlined"
            size="small"
            sx={{
              backgroundColor: "background.default",
            }}
            value={formData.email}
            onChange={handleChange}
            error={formErrors.email ? true : false}
            helperText={formErrors.email}
          />
        </Box>

        <Typography variant="subtitle1" color="text.card">
          Password Details
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            padding: 2,
          }}
        >
          <TextField
            label="Password"
            type="password"
            name="password"
            id="password"
            variant="outlined"
            size="small"
            sx={{
              backgroundColor: "background.default",
            }}
            value={formData.password}
            onChange={handleChange}
            error={formErrors.password ? true : false}
            helperText={formErrors.password}
          />
          <TextField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            variant="outlined"
            size="small"
            sx={{
              backgroundColor: "background.default",
            }}
            value={formData.confirmPassword}
            onChange={handleChange}
            error={formErrors.confirmPassword ? true : false}
            helperText={formErrors.confirmPassword}
          />
        </Box>

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

        {isRegistered && (
          <Typography variant="body1" color="text.primary">
            Registration Successful
          </Typography>
        )}

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
