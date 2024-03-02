import { Box, TextField, Typography } from "@mui/material";


const PasswordWithConfirmInput = ({formData, formErrors, handleChange}) => {

    return (

        <>
        <Typography variant="subtitle1" color="text.card">
          Password Details
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            padding: 2,
          }}
        >
          <TextField
            label="Password"
            type="password"
            name="password"
            id="password"
            variant="outlined"
            size="small"
            sx={{
              backgroundColor: "background.default",
            }}
            value={formData.password}
            onChange={handleChange}
            error={formErrors.password ? true : false}
            helperText={formErrors.password}
          />
          <TextField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            variant="outlined"
            size="small"
            sx={{
              backgroundColor: "background.default",
            }}
            value={formData.confirmPassword}
            onChange={handleChange}
            error={formErrors.confirmPassword ? true : false}
            helperText={formErrors.confirmPassword}
          />
        </Box>

</>
    )
}

export default PasswordWithConfirmInput;