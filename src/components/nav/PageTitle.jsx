//Imports - No React
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";


const PageTitle = ({ title }) => {
    const theme = useTheme();


  return (
    <Box sx={{ display: "flex", justifyContent: "flex-start", width: "200px" }}>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ color: theme.typography.primary.textDark }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default PageTitle;
