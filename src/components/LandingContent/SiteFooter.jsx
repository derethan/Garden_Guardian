import { Box, Container, IconButton, Typography, useTheme } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SiteFooter = () => {
    const theme = useTheme();

  return (
    <Container
      component="footer"
      maxWidth="none"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: theme.palette.primary.main,
        padding: "1rem",
      }}
    >
      <Typography variant="caption" sx={{ fontWeight: "bold", fontSize: '14px' }}>
        © 2024 All Rights Reserved
      </Typography>

      <Box sx={{ display: "flex", gap: "1rem" }}>
        <IconButton
          href="https://github.com/derethan"
            target="_blank"
            rel="noreferrer"
            >
            <GitHubIcon sx={{
                color: theme.palette.primary.main,
                fontSize: "2rem",
            }} />
        </IconButton>

        <IconButton
            href="https://www.linkedin.com/in/andrew-patterson93"
            target="_blank"
            rel="noreferrer"
            >
            <LinkedInIcon  sx={{
                color: theme.palette.primary.main,
                fontSize: "2rem",
            }} />
        </IconButton>
      </Box>
    </Container>
  );
};

export default SiteFooter;
