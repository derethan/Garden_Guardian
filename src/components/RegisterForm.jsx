//Import necessary libraries
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    console.log({
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
    });
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
            label="First Name"
            name="firstName"
            id="firstName"
            variant="outlined"
            size="small"
            sx={{
              backgroundColor: "background.default",
            }}
          />
          <TextField
            label="Last Name"
            name="lastName"
            id="lastName"
            variant="outlined"
            size="small"
            sx={{
              backgroundColor: "background.default",
            }}
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
