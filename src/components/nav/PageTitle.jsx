//Imports - No React
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";


const PageTitle = ({ title, ...props }) => {
    const theme = useTheme();


  return (
    <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ color: theme.typography.primary.textDark, fontWeight: "bold", ...props.sx}}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default PageTitle;
