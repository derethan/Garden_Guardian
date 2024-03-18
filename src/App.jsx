import "./App.css";

// Import MUI Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

// Import Components
import Header from "./components/header/header";
import SideBarWrapper from "../src/components/SideBarWrapper";

// Import Routes
import { siteLinks, privateAppRoutes } from "./routes";
import PrivateRoute from "./hooks/PrivateRoute";

// Import MUI Styles
import CssBaseline from "@mui/material/CssBaseline";

// Import Theme
import theme from "./theme";

import AuthProvider from "./hooks/useAuthProvider";

// Main App Component
export default function App() {
  return (
    
    <BrowserRouter>

      <ThemeProvider theme={theme}>
      <CssBaseline />

        <div
          className="App"
          style={{
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
          }}
        >
          {/* <header className="App-header">
            <Header />
          </header> */}

          <main
            className="app-body"
            style={{
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.primary,
            }}
          >
            <AuthProvider>
              <Routes>
                {/* Maps the Public Routes */}
                {siteLinks.map((link) => (
                  <Route
                    key={link.ID}
                    path={link.path}
                    element={<link.Component />}
                  />
                ))}

                {/* Maps the Private Routes */}
                <Route element={<PrivateRoute />}>
                  {privateAppRoutes.map((link) => (
                    <Route
                      key={link.ID}
                      path={link.path}
                      element={
                        <SideBarWrapper view={link.path} key={link.ID} title={link.Name}>
                          <link.Component />
                        </SideBarWrapper>
                      }
                    />
                  ))}
                </Route>
              </Routes>
            </AuthProvider>
          </main>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
} // end App
