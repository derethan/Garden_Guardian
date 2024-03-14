/************************************************ 
*   Login page for the application
*************************************************/

// Import necessary libraries
import { Container } from '@mui/material';
import LoginForm from '../components/account/LoginForm';
import OathLogin from '../components/oathLogin';
import { useAuth } from "../hooks/useAuthProvider";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



export default function Login() {

    
    const {isLoggedIn} = useAuth();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (isLoggedIn) {
            navigate('/dashboard');
        }
    }, [isLoggedIn, navigate]);

    return (

        <Container maxWidth='sm' sx={{paddingTop: 4}}>
            
            <LoginForm />

            <OathLogin />

        </Container>

    );
}

