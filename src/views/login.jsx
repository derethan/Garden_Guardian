/************************************************ 
*   Login page for the application
*************************************************/

// Import necessary libraries
import { Container } from '@mui/material';
import LoginForm from '../components/LoginForm';
import OathLogin from '../components/oathLogin';
import { useAuth } from "../hooks/useAuthProvider";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



export default function Login() {

    
    const user = useAuth();
    const navigate = useNavigate();
    console.log(user.isLoggedIn);
    
    useEffect(() => {
        if (user.isLoggedIn) {
            navigate('/dashboard');
        }
    }, [user.isLoggedIn, navigate]);

    return (

        <Container maxWidth='sm' sx={{paddingTop: 4}}>
            
            <LoginForm />

            <OathLogin />

        </Container>

    );
}

