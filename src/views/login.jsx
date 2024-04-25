/************************************************
 *   Login page for the application
 *************************************************/

// Import necessary libraries
import { Container } from "@mui/material";
import LoginForm from "../components/account/LoginForm";
import OathLogin from "../components/oathLogin";
import { useAuth } from "../hooks/useAuthProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import LandingSiteNav from "../components/nav/LandingSiteNav";


export default function Login() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  

  // Redirect to dashboard if user is already logged in
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);



  return (
    <>
      <LandingSiteNav />

      <Container maxWidth="sm" sx={{ paddingTop: 4 }}>
        <LoginForm />

        {/* <OathLogin /> */}
      </Container>
    </>
  );
}
