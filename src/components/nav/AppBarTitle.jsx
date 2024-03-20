import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Shield from "../../assets/shield_small.png";

const AppBarTitle = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Box
        component="img"
        src={Shield}
        alt="Garden Guardian Logo"
        sx={{ width: "50px", height: "50px" }}
      />
      <Link to="/">
        <h1 style={{ color: "#2A2A2A", fontFamily: "AniMe", fontSize: "14px" }}>
          Garden <br /> Guardian
        </h1>
      </Link>
    </div>
  );
};

export default AppBarTitle;
