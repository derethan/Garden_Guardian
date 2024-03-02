/************************************************ 
*   Autentication Callback Page for the application
*************************************************/

// Import necessary libraries
import { Container } from '@mui/material';


export default function Oauthcallback() {
    return (
        <Container maxWidth='sm' sx={{paddingTop: 4}}>
            <h1>OAuth Callback</h1>
            <p>Redirecting...</p>
        </Container>

    );
}