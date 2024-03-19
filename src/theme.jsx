//import theme
import { createTheme } from "@mui/material/styles";

// Theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#3F9E3F", //green
      secondary: "#007F00", //darker green
    },
    dark: {
      main: "#F0F0F0", //light grey
    },
    secondary: {
      main: "#2F2C43", //dark blue
    },
    background: {
      default: "#EBEBEB", //White
      dark: "#242424", //dark grey
      lightGrey: "#D6D5D7", //light grey
      shaded: "#F0F0F0", //light grey
    },
    error: {
      main: "#FF0000", //red
    },
    warning: {
      main: "#FFA500", //orange
    },
    info: {
      main: "#87CEEB", //light blue
    },
    success: {
      main: "#007F00", //darker green
      light: "#32CD32", //lime
    },
    text: {
      primary: "#2A2A2A", //white
      secondary: "#848386", //light grey
    },
    sidebar: {
      primary: "#D6D5D7", //light grey
      navLinks: "#007F00", //Darker green
    },
  },
  typography: {
    primary: {
      main: "#008000", //green
      cardTitle: "#2A2A2A", //dark grey
      subtitle: "#848386", //light grey
      textDark: "#2A2A2A", //dark grey
    },
    secondary: {
      main: "CCCCCC", //white
    },
    title: {
      main: "AniMe", //font
    },
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#2A2A2A", //dark grey
        },
      },
    },
    MuiCard: {
      variants: [
        {
          props: { variant: "light" },
          style: {
            backgroundColor: "#F5F5F5", //dark grey
            marginBottom: 2,
            boxShadow: "0 0 4px 1px #D6D5D7",
          },
        },

        {
          props: { variant: "dark" },
          style: {
            backgroundColor: "#2d2d2d", //dark grey
            marginBottom: 2,
            boxShadow: "0 0 10px 0 #1a1a1a",
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "card" },
          style: {
            backgroundColor: "#F5F5F5", //light grey
            borderRadius: 10,
            padding: "1rem",
            boxShadow: "0 0 10px 0 #D6D5D7",

            "&:hover": {
              backgroundColor: "#EBEBEB", //light grey
            },
          },
        },
      ],

      styleOverrides: {
        card: {
          "& .MuiTouchRipple-root": {
            color: "#007F00", //darker green
          },
        },
      },
      
    },
  },

  /********
 * 	Color Scheme beta
 * 
 * Anti-Flash White - #EBEBEB - Primary Background
 * Shaded White for flat Cards - F0F0F0 - Secondary Background
 * 
 * jet - #2A2A2A - Primary Text

 * Office Green - 007F00 - Darker Green - Links, Fonts, etc
 * Pigment Green - #3F9E3F - Lighter Green - Primary Color for Buttons, etc
 * 
 * Davy's Grey - #4F4E50 - Darkest Shade of grey
 * French grey - #B9B8BC - Middle Shade of grey
 * TimerWolf Grey - #D6D5D7 - Lightest Shade of grey
 * 
 * Wenge - #635A6C - Dark Purple - Accent 
 * Space Cadet - #2F2C43 - Dark Blue - Accent
 */
});

export default theme;
