/*************************************
 *      Error503.jsx file            *
 * 
 * This file contains the 503 error  *
 * page that is displayed when the   *
 * server is down.                   *
 * ***********************************/

import { Card, Container, Typography } from "@mui/material";
import LandingSiteNav from "../components/nav/LandingSiteNav";

import { useEffect } from "react";
import { PrimaryButton } from "../imports";
import { useNavigate } from "react-router-dom";

const Error503 = () => {
  const navigate = useNavigate();


  // Check if the server is back online, if so redirect user to the dashboard
  useEffect(() => {
    const checkServerStatus = async () => {
      //ENV variable for the server URL
      const URL = import.meta.env.VITE_API_URL;

      try {
        const response = await fetch(URL + 'api/status'); 
    
        if (response.ok) {
          console.log("Server is back online");
          // server is back online, redirect user
          navigate("/dashboard");
        } else {
          // server is still down, try again in 5 seconds
          setTimeout(checkServerStatus, 15000);
        }

      } catch (error) {
        // network error, try again in 5 seconds
        setTimeout(checkServerStatus, 15000);
      }
    };

    checkServerStatus();
  }, []);

  return (
    <>
      <LandingSiteNav />

      <Container maxWidth="sm" sx={{ paddingTop: 4 }}>
        <Card
          variant="light"
          sx={{ display: "flex", flexDirection: "column", padding: 4 }}
        >
          <Typography variant="h4" color={"text.main"}>
            503 Service Unavailable
          </Typography>
          <Typography variant="body1" pt={2}>
            The server is currently unavailable. We apologize for the
            inconvenience and are working to restore service as soon as
            possible. Please try again later.
          </Typography>

          <Typography
            variant="caption"
            pt={4}
            sx={{ color: "text.subtitle", fontWeight: "bold" }}
          >
            You May click below to return to the homepage, or wait for the
            server to come back online.
          </Typography>

          <PrimaryButton text={"Return Home"} onClick={() => navigate("/")} />
        </Card>
      </Container>
    </>
  );
};

export default Error503;
