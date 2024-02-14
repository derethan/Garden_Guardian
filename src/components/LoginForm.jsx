// Import necessary libraries
import { Card, CardContent, Typography, Box } from "@mui/material";

import { useLogin } from "../hooks/useLogin";
import { useAuth } from "../hooks/useAuthProvider";

import EmailPasswordInput from "./account/EmailPasswordInput";
import LoginFormButtons from "./LoginFormButtons";

const LoginForm = () => {
  const { loginData, formErrors, handleChange, handleSubmit } = useLogin();
  const {postStatus, postMessage } = useAuth();

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
