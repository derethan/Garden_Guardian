// Import Components
import {
  Card,
  CardContent,
  Button,
  Typography,
  TextField,
  Box,
  useTheme,
} from "@mui/material";

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
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
        >
          Reset Password
        </Button>
      </Box>
    </Card>
  );
};

export default ResetPasswordBox;
