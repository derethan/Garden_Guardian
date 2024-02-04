import { Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material";

const StyledTitleLink = styled(RouterLink)(({ theme }) => ({
  fontFamily: theme.typography.title.main, //font
  color: theme.palette.primary.main,
  textShadow: "1px 1px 4px #000000",
  textDecoration: "none",
  fontSize: "2rem",
  paddingLeft: "40px",

  "&:hover": {
    color: theme.palette.text.primary,
    textDecoration: "none",
  },
  // [theme.breakpoints.down('md')]: {
  //     fontSize: '1.5rem',
  // },
}));

function SiteTitle() {
  return (
    <Box sx={{ marginTop: "-40px" }}>
      <StyledTitleLink to="/">Garden Guardian</StyledTitleLink>
    </Box>
  );
}

export default SiteTitle;
