/************************************************
 *   Wrapper for the Standard MUI Button component
 *************************************************/

import { Button } from "@mui/material";

export const PrimaryButton = ({ fullWidth, text, ...props }) => {
  return (
    <Button
      {...props}
      fullWidth={fullWidth}
      variant="contained"
      color="primary"
      sx={{
        borderRadius: 20,
        opacity: props.opacity,
        marginTop: 2,
        ...props.sx,
      }}
    >
      {props.children}

      {text}
    </Button>
  );
};
