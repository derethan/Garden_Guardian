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
import Navbar from './components/navbar';


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
	},
	typography: {
		primary: {
			main: '#008000', //light grey
		},
		secondary: {
			main: '#bdbdbd', //white
		},
		title: {
			main: 'AniMe', //font
		},
	},
	background: {
		primary: {
			main: '#8B4513', //brown
		},
		secondary: {
			main: '#242424', //dark grey
		},
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
{/* 
			<nav className='app-nav'>
				<Navbar />
			</nav> */}

			{/* // Views go here */}
			<main className='app-body'>
				<Routes>
					{siteLinks.map((link) => (
						<Route 
							key={link.ID}
							path={link.path}
							element={<link.Component />}
						/>
					))
					}
				</Routes>
			</main>

		</div>
		</ThemeProvider>
		</BrowserRouter>

	)
	

}// end App
