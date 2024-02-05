// Import Components
import {
  Card,
  CardContent,
  Button,
  Typography,
  TextField,
  Box,
} from "@mui/material";

// Define the component
const primaryTextColor = (theme) => theme.typography.secondary.main;

const handleSubmit = (event) => {
  event.preventDefault();

  const data = new FormData(event.currentTarget);

  console.log({
    email: data.get("email"),
  });
};

const ResetPasswordBox = () => {
  return (
    <Card variant="dark"
      sx={{
        padding: 2,
      }}
    >
      <CardContent>
        <Typography variant="h4" color={primaryTextColor}>
          Reset Password
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
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          sx={{ mt: 3, mb: 2 }}
        >
          Reset Password
        </Button>
      </Box>
    </Card>
  );
};

export default ResetPasswordBox;
