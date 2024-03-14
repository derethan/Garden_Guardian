import { Box, Typography, Divider } from "@mui/material";
import IncreaseIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import SmallArrowUp from "@mui/icons-material/ArrowDropUpOutlined";

const SensorBanner = ({ sensorData }) => {
  return (
    <Box
      sx={{
        backgroundColor: "background.lightGrey",
        padding: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="caption" fontWeight="bold">
          Current Conditions
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <IncreaseIcon />
          <Typography variant="caption" fontWeight="bold">
            Increased By{" "}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ textAlign: "left" }}>
        <Typography variant="h4" fontWeight="bold">
          Temperature:{" "}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "1rem",
        }}
      >
        <Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <SmallArrowUp />
            <Typography variant="caption">Increase </Typography>
          </Box>

          <Typography variant="body1" fontWeight="bold">
            Humidity:{" "}
          </Typography>
        </Box>

        <Divider orientation="vertical" flexItem sx={{ width: '5px' }} />
        
        <Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <SmallArrowUp />
            <Typography variant="caption">Increase </Typography>
          </Box>

          <Typography variant="body1" fontWeight="bold">
            Water Temp:{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SensorBanner;
