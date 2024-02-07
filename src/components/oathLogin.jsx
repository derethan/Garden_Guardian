// Import necessary libraries
import { Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';


const OathLogin = () => {


    const navigate = useNavigate();

    const handleGoogleLogin = () => {
  
      navigate('/')
      
      // Redirect the user to Google's OAuth page. Replace YOUR_CLIENT_ID with your actual client ID.
      // window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=${encodeURIComponent('http://yourwebsite.com/oauthcallback')}&response_type=token&scope=email%20profile`;
    };


    return (
        <Button variant="contained" color="primary" onClick={handleGoogleLogin}>
        Login with Google
        </Button>
    )
}

export default OathLogin