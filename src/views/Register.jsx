/************************************************
 *   Account Registration page for the application
 *************************************************/

// Import necessary libraries
import { Container } from "@mui/material";
import RegisterForm from "../components/RegisterForm";

import { useEffect } from "react";
import { useAuth } from "../hooks/useAuthProvider";
import { useNavigate } from "react-router-dom";



export default function Register() {
  const user = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.isLoggedIn) {
      navigate("/dashboard");
    }
  }, [user.isLoggedIn, navigate]);
  
  return (
    <Container maxWidth="sm" sx={{ paddingTop: 4 }}>
      <RegisterForm />
    </Container>
  );
}
