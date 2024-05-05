import "./App.css";

const isDevelopment = import.meta.env.MODE === 'development';
const basename = isDevelopment ? '/' : '/';

// Import Dependencies
import { BrowserRouter,HashRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";

// Import Routes
import { siteLinks, privateAppRoutes } from "./routes";
import PrivateRoute from "./hooks/PrivateRoute";

// Import Theme
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

// Import Components
import SideBarWrapper from "../src/components/SideBarWrapper";
import LoadingScreen from "./components/LoadingScreen";

// Import context Providers
import AuthProvider from "./hooks/useAuthProvider";

// Main App Component
export default function App() {

  const Router = isDevelopment ? BrowserRouter : HashRouter;


  return (
    <Router basename={basename}>
      <ThemeProvider theme={theme}>
        <div
          className="App"
          style={{
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
          }}
        >
          <main
            className="app-body"
            style={{
              backgroundColor: theme.palette.background.shaded,
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
                    element={
                      <Suspense fallback={<LoadingScreen />}>
                        <link.Component />
                      </Suspense>
                    }
                  />
                ))}
                {/* Maps the Private Routes */}
                <Route element={<PrivateRoute />}>
                  {privateAppRoutes.map((link) => (
                    <Route
                      key={link.ID}
                      path={link.path}
                      element={
                        <SideBarWrapper
                          view={link.path}
                          key={link.ID}
                          title={link.Name}
                        >
                          <Suspense fallback={<LoadingScreen />}>
                            <link.Component />
                          </Suspense>
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
    </Router>
  );
} // end App
