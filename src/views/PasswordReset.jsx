/************************************************ 
*   Password Reset page for the application
*************************************************/

// Import necessary libraries
import { Container } from '@mui/material';
import ResetPasswordBox from '../components/ResetPasswordBox';


export default function Login() {
    return (
        <Container maxWidth='sm' sx={{paddingTop: 4}}>
            <ResetPasswordBox />
        </Container>

    );
}