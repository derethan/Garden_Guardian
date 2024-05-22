import { Box, TextField } from '@mui/material';

const Step2 = ({ newVarietyValue, setNewVarietyValue }) => {
    return (
        <Box p={2}>
        <TextField
          id="plant-variety"
          label="Plant Variety"
          variant="outlined"
          fullWidth
          value={newVarietyValue}
          onChange={(e) => setNewVarietyValue(e.target.value)}
        />
      </Box>
    )
}


export default Step2;