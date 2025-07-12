import { Box, TextField, Typography } from "@mui/material";

const NewplantName = ({
  newPlantValue,
  setNewPlantValue,
  formErrors,
  setFormErrors,
}) => {
  return (
    <Box p={2}>
      <Typography variant="subtitle2" color={"text.subtitle"} mt={4}>
        Enter the name of the Plant you would like to add.
      </Typography>
      <Typography variant="caption" fontWeight={"bold"} color={"text.subtitle"}>
        Example: Tomato, Carrot, Rosemary, etc.
      </Typography>

      <TextField
        sx={{ mt: 2 }}
        required
        id="plant-name"
        label="Plant Name"
        variant="outlined"
        fullWidth
        value={newPlantValue}
        onChange={(e) => {
          setNewPlantValue(
            e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
          );
          setFormErrors({ ...formErrors, plant: "" });
        }}
        error={formErrors.plant ? true : false}
        helperText={formErrors.plant ? formErrors.plant : ""}
      />
    </Box>
  );
};

export default NewplantName;
