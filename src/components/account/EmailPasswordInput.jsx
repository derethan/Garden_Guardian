import { TextField } from "@mui/material";

const EmailPasswordInput = ({ loginData, formErrors, handleChange }) => {
  return (
    <>
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
          backgroundColor: "background.default",
          "& input:-webkit-autofill": {
            "WebkitTextFillColor": "black",
          },
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
          backgroundColor: "background.default",
          "& input:-webkit-autofill": {
            "WebkitTextFillColor": "black",
            
          },
        }}
        onChange={handleChange}
        value={loginData.password}
        error={!!formErrors.password}
        helperText={formErrors.password}
      />
    </>
  );
};

export default EmailPasswordInput;
