//import theme
import { createTheme } from '@mui/material/styles';


// Theme
const theme = createTheme({
	palette: {
		primary: {
			main: '#008000', //green
		},
		secondary: {
			main: '#05394f', //dark blue
		},
		background: {
			default: '#F8F8F8', //White
			dark: '#242424', //dark grey
		},
		error: {
			main: '#FF0000', //red
		},
		warning: {
			main: '#FFA500', //orange
		},
		info: {
			main: '#87CEEB', //light blue
		},
		success: {
			main: '#32CD32', //lime
		},
		text: {
			primary: '#2A2A2A', //white
			secondary: '#848386', //light grey
		},
		
	},
	typography: {
		primary: {
			main: '#008000', //green
			cardTitle: '#2A2A2A', //green
			subtitle: '#848386', //light grey
			textDark: '#2A2A2A', //dark grey
		},
		secondary: {
			main: 'CCCCCC', //white
		},
		title: {
			main: 'AniMe', //font
		},
		
	},
	components: {
		MuiCard: {
			variants: [
				{
					props: { variant: 'light' },
					style: {
						backgroundColor: '#F5F5F5', //dark grey
						marginBottom: 2,
						boxShadow: '0 0 10px 0 #1a1a1a',				
					},
				},
				{
					props: { variant: 'dark' },
					style: {
						backgroundColor: '#2d2d2d', //dark grey
						marginBottom: 2,
						boxShadow: '0 0 10px 0 #1a1a1a',				
					},
				},
			],
		}
	}

/********
 * 	Color Scheme beta
 * 
 * Office Green - 007F00
 * Anti-Flash White - #EBEBEB
 * Pigment Green - #3F9E3F
 * Silver - #BDBDBD
 * Space Cadet - #2F2C43
 * Davy's Grey - #4F4E50
 * French grey - #B9B8BC
 * jet - #2A2A2A
 * Wenge - #635A6C
 * 
 * 
 */

});

export default theme;