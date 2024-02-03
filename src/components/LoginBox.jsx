// This component is a card that contains a title, a subtitle, and a body of text. 
// It also contains two buttons for login and registration.

// Import necessary libraries
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const primaryTextColor = (theme) => theme.typography.secondary.main;

// Define the component
const LoginBox = () => {
    return (
        <Card sx={{
            backgroundColor: (theme) => theme.background.card.main,
            marginBottom: 2,
            boxShadow: 3,
        }}>
            <CardContent>
                <Typography variant="h4" color={primaryTextColor}>Login below to get started.</Typography>
                <Typography variant="subtitle2" color={primaryTextColor}></Typography>
                <Typography variant="body1" color={primaryTextColor}>
                </Typography>
            </CardContent>
            <CardActions sx={{
                justifyContent:"center",   
                }}>
                    
                <Link to={'/login'}>
                    <Button variant="contained" color="secondary">Login</Button>
                </Link>
                <Link to={'/register'}>
                    <Button variant="contained" color="secondary">Register</Button>
                </Link>

        
            </CardActions>          
        </Card>
    );
}

// Export the component
export default LoginBox;