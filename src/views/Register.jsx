/************************************************
 *   Account Registration page for the application
 *************************************************/

// Import necessary libraries
import { Container } from "@mui/material";
import RegisterForm from "../components/account/RegisterForm";

import { useEffect } from "react";
import { useAuth } from "../contextProviders";
import { useNavigate } from "react-router-dom";

import LandingSiteNav from "../components/nav/LandingSiteNav";


export default function Register() {
  const user = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.isLoggedIn) {
      navigate("/dashboard");
    }
  }, []); // eslint-disable-line

  return (
    <>
      {" "}
      <LandingSiteNav />
      <Container maxWidth="sm" sx={{ paddingTop: 4 }}>
        <RegisterForm />
      </Container>
    </>
  );
}
