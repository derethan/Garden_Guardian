
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
import { useLogin } from "../hooks/useLogin";

// Define the component
const LoginForm = () => {

  // Use the useLogin hook to setup the form data and event handlers
  const {loginData, formErrors, handleChange, handleSubmit } = useLogin();


  return (
    <Card variant="dark" sx={{padding: 2}}>
      <CardContent>
        <Typography variant="h4" color={'typography.secondary.main'}>
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
          margin="normal"
          color="primary"
          size="small"
          variant="outlined"
          sx={{
            backgroundColor: 'background.default',
          }}
          onChange={handleChange}

          value={loginData.email}
          error={!!formErrors.email}
          helperText={formErrors.email}

        />

        <TextField
          required
          fullWidth
          id="password"
          label="Password"
          name="password"
          type="password"
          margin="normal"
          variant="outlined"
          size="small"
          sx={{
            backgroundColor: 'background.default',
            color: "#FFFFFF",
          }}
          onChange={handleChange}

          value={loginData.password}
          error={!!formErrors.password}
          helperText={formErrors.password}
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
