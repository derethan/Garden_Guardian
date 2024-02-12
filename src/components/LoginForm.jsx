// Import necessary libraries
import { Card, CardContent, Typography, Box } from "@mui/material";

import { useLogin } from "../hooks/useLogin";

import EmailPasswordInput from "./account/EmailPasswordInput";
import LoginFormButtons from "./LoginFormButtons";

// Define the component
const LoginForm = () => {
  // Use the useLogin hook to setup the form data and event handlers
  const { loginData, formErrors, handleChange, handleSubmit } = useLogin();

  return (
    <Card variant="dark" sx={{ padding: 2 }}>
      <CardContent>
        <Typography variant="h5" color={"typography.secondary.main"}>
          Login below to get started.
        </Typography>
      </CardContent>

      <Box type="form" component="form" noValidate onSubmit={handleSubmit}>
        <EmailPasswordInput
          loginData={loginData}
          formErrors={formErrors}
          handleChange={handleChange}
        />

        <LoginFormButtons />
      </Box>
    </Card>
  );
};

// Export the component
export default LoginForm;
