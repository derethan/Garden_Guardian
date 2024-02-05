import './App.css'

// Import MUI Dependencies
import {
	BrowserRouter,
	Routes,
	Route,
  } from "react-router-dom";

  import { createTheme, ThemeProvider } from '@mui/material';

// Import Components
import Header from './components/header/header';
// import Navbar from './components/navbar';


import { siteLinks } from './routes'


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
			default: '#242424', //black
			card: '#2d2d2d', //dark grey
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
			primary: '#CCCCCC', //white
			secondary: '#bdbdbd', //black
		},
		
	},
	typography: {
		primary: {
			main: '#008000', //green
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
					props: { variant: 'dark' },
					style: {
						backgroundColor: '#2d2d2d', //dark grey
						marginBottom: 2,
						boxShadow: 3,
					},
				},
			],
		}
	}



});


// Main App Component
export default function App() {

	return (
		<BrowserRouter>

		<ThemeProvider theme={theme}>

		<div className="App">
			
			<header className="App-header">
				<Header />
			</header>

			<main className='app-body'>
				<Routes>
					{siteLinks.map((link) => (
						<Route 
							key={link.ID}
							path={link.path}
							element={<link.Component />}
						/>
					))}
				</Routes>
			</main>

		</div>
		</ThemeProvider>
		</BrowserRouter>

	)
	

}// end App
