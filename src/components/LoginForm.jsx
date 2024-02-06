
// Import necessary libraries
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  TextField,
  Box,
  Grid,
} from "@mui/material";

import { Link } from "react-router-dom";

const primaryTextColor = (theme) => theme.typography.secondary.main;
const textFieldBackgroundColor = (theme) => theme.palette.background.default;

// Define the component
const LoginForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Card variant="dark" sx={{padding: 2}}>
      <CardContent>
        <Typography variant="h4" color={primaryTextColor}>
          Login below to get started.
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
            backgroundColor: textFieldBackgroundColor,
          }}
        />

        <TextField
          required
          fullWidth
          id="password"
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          size="small"
          sx={{
            backgroundColor: textFieldBackgroundColor,
            color: "#FFFFFF",
          }}
        />

        <CardActions
          sx={{
            justifyContent: "center",
            flexDirection: "column",
            paddingTop: 4,
            gap: 4,
          }}
        >
          <Button type="submit" fullWidth variant="contained" color="secondary">
            Login
          </Button>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Link to="/passwordReset">
                <Typography
                  variant="body2"
                  color="text.primary"
                  sx={{
                    '&:hover': {
                      color: 'primary.main'
                    }
                  }}
                >
                  Forgot password?
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link to="/register">
                <Typography variant="body2" color="text.primary" sx={{
                  '&:hover': {
                    color: 'primary.main'
                  }
                }}>
                  Don&apos;t have an account? <br /> Sign up
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </CardActions>
      </Box>
    </Card>
  );
};

// Export the component
export default LoginForm;
