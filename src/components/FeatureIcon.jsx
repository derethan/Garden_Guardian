import { Card, Typography, useTheme } from "@mui/material";

const FeatureIcon = ({ icon, title, description }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const Icon = icon;
  return (
    <Card
      variant="light"
      sx={{
        p: 2,
        borderRadius: 4,
      }}
    >
      <Icon
        sx={{
          fontSize: 40,
          color: isDark
            ? theme.palette.dark.main
            : theme.palette.primary.main,
        }}
      />
      <Typography
        variant="h6"
        component="h6"
        gutterBottom
        sx={{ color: "theme.Typography.primary.textDark" }}
      >
        {title}
      </Typography>
      <Typography variant="caption" component="p">
        {description}
      </Typography>
    </Card>
  );
};

export default FeatureIcon;
