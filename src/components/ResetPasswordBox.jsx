// Import Components
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Box,
  useTheme,
} from "@mui/material";

import { PrimaryButton } from "../components/PrimaryButton";

const handleSubmit = (event) => {
  event.preventDefault();

  const data = new FormData(event.currentTarget);

  console.log({
    email: data.get("email"),
  });
};

const ResetPasswordBox = () => {
  const theme = useTheme();
  return (
    <Card variant="light"
      sx={{
        padding: 2,
      }}
    >
      <CardContent>
      <Typography variant="h4" color={theme.typography.primary.cardTitle} sx={{
          fontWeight: 600,
        }}>
          Reset Password
        </Typography>
        <Typography variant="subtitle2" color={theme.typography.primary.subtitle} sx={{paddingTop:'8px'}}>
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
            backgroundColor: 'background.default',
          }}
        />
        
        <PrimaryButton fullWidth type='submit' text="Reset Password" />

      </Box>
    </Card>
  );
};

export default ResetPasswordBox;
