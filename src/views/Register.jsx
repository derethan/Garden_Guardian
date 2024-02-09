/************************************************
 *   Account Registration page for the application
 *************************************************/

// Import necessary libraries
import { Container } from "@mui/material";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  return (
    <Container maxWidth="sm" sx={{ paddingTop: 4 }}>
      <h1>Create Your Account</h1>

      <RegisterForm />
    </Container>
  );
}
