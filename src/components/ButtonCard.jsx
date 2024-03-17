import { Button, Typography } from "@mui/material";

const ButtonCard = ({ title, children }) => {
  return (
    <Button
      variant="card"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <Typography variant="body1" sx={{ fontWeight: "bold", fontSize: "14px" }}>
        {title}
      </Typography>
      {children}
    </Button>
  );
};

export default ButtonCard;
