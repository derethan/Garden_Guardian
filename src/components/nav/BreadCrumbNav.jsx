import { Box, Breadcrumbs, Typography, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

// Import Icons
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import SensorsIcon from "@mui/icons-material/Sensors";
import GardenIcon from "@mui/icons-material/GrassOutlined";

const BreadCrumbNav = ({ Icon, path, ...props }) => {
  const theme = useTheme();
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);
  const currentPath = pathnames[pathnames.length - 1].replace(/%20/g, " ");

  return (
    <Box
      pt={4}
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {/* BreadCrumbs*/}
      <div
        style={{
          backgroundColor: theme.palette.background.lightGrey,
          padding: "8px",
          width: "fit-content",
        }}
      >
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link
            color="inherit"
            to="/dashboard"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <HomeIcon fontSize="inherit" sx={{ mr: 1 }} />
            <Typography
              color="text.cardTitle"
              sx={{
                fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" },
              }}
            >
              Home
            </Typography>
          </Link>

          <Link
            color="inherit"
            to={"/" + pathnames[0]}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {pathnames[0] === "sensor" ? (
              <SensorsIcon fontSize="inherit" sx={{ mr: 1 }} />
            ) : (
              <GardenIcon fontSize="inherit" sx={{ mr: 1 }} />
            )}
            <Typography
              color="text.cardTitle"
              sx={{
                fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" },
              }}
            >
              {path}
              {/* {pathnames[0].charAt(0).toUpperCase() + pathnames[0].slice(1)} */}
            </Typography>
          </Link>

          <Typography
            color="primary.secondary"
            sx={{
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" },
            }}
          >
            <Icon fontSize="inherit" sx={{ mr: 1 }} />
            {props.plantName || props.sensorName || currentPath}
          </Typography>
        </Breadcrumbs>
      </div>

      {/* Arrow For BreadCrumbs*/}
      <div
        style={{
          width: "0",
          height: "0",
          borderTop: "20px solid transparent",
          borderBottom: "20px solid transparent",
          borderLeft: "20px solid " + theme.palette.background.lightGrey,
        }}
      />
    </Box>
  );
};

export default BreadCrumbNav;
