import { Button, Typography } from "@mui/material";

const ButtonCard = ({ title, children, ...props }) => {
  return (
    <Button
      variant="card"
      {...props}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
        ...props.sx,
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
