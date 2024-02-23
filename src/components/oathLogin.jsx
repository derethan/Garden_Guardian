// Import necessary libraries
import { Box, Typography } from '@mui/material';
import { PrimaryButton } from './PrimaryButton';
import { useOathLogin } from '../hooks/useOathLogin';

// Define the component
const OathLogin = () => {
    const { handleGoogleLogin } = useOathLogin();

    return (
        <Box>
        <Typography variant='body1' sx={{marginTop: 2, marginBottom: 2}}>Or</Typography>

        <PrimaryButton text="Login with Google" onClick={handleGoogleLogin} opacity='0.6' />
        </Box>
    )
}

export default OathLogin