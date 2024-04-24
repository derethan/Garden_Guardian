// Import necessary libraries
import { Card, CardContent, Typography, Box, useTheme } from "@mui/material";

import { useLogin } from "../../hooks/useLogin";
import { useAuth } from "../../hooks/useAuthProvider";
import { useEffect } from "react";

import EmailPasswordInput from "./EmailPasswordInput";
import LoginFormButtons from "./LoginFormButtons";

import { useLocation } from "react-router-dom";


const LoginForm = () => {
  const { loginData, formErrors, handleChange, handleSubmit, handleDemoLogin } = useLogin();
  const {postStatus, postMessage } = useAuth();

  const theme = useTheme();

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const demo = params.get("demo");

  // Automatically log the user in with demo account
  useEffect(() => {
    if (demo) {
      const demoAccount = {
        email: "demo",
        password: "demo",
      };

      handleDemoLogin(demoAccount);
    }
  }, []);

  return (
    <Card variant="light" sx={{ padding: 2 }}>
      <CardContent>
        <Typography variant="h4" color={theme.typography.primary.cardTitle} sx={{
          fontWeight: 600,
        }}>
          Sign In
        </Typography>
        <Typography variant="subtitle2" color={theme.typography.primary.subtitle} sx={{paddingTop:'8px'}}>
          Enter your login details to proceed
        </Typography>
      </CardContent>

      <Box type="form" component="form" noValidate onSubmit={handleSubmit}>
        <EmailPasswordInput
          loginData={loginData}
          formErrors={formErrors}
          handleChange={handleChange}
        />

        {postStatus && postStatus !==201 && (
          <CardContent>
            <Typography variant="body1" color={"error"}>
              {postMessage}
            </Typography>
          </CardContent>
        )}

        <LoginFormButtons />
      </Box>
    </Card>
  );
};

// Export the component
export default LoginForm;
