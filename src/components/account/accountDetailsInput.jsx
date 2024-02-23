import { Box, TextField } from "@mui/material";

const AccountDetailsInput = ({formData, formErrors, handleChange}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: 2,
        }}
      >
        <TextField
          required
          label="First Name"
          name="firstName"
          id="firstName"
          variant="outlined"
          size="small"
          sx={{
            backgroundColor: "background.default",
          }}
          value={formData.firstName}
          onChange={handleChange}
          error={formErrors.firstName ? true : false}
          helperText={formErrors.firstName}
        />
        <TextField
          required
          label="Last Name"
          name="lastName"
          id="lastName"
          variant="outlined"
          size="small"
          sx={{
            backgroundColor: "background.default",
          }}
          value={formData.lastName}
          onChange={handleChange}
          error={formErrors.lastName ? true : false}
          helperText={formErrors.lastName}
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
          value={formData.email}
          onChange={handleChange}
          error={formErrors.email ? true : false}
          helperText={formErrors.email}
        />
      </Box>
    </>
  );
};


export default AccountDetailsInput;