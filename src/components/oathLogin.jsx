// Import necessary libraries
import { Box, Button, Card, Typography } from '@mui/material';
import { useOathLogin } from '../hooks/useOathLogin';

// Define the component
const OathLogin = () => {
    const { handleGoogleLogin } = useOathLogin();

    return (
        <Box>
        <Typography variant='h6' sx={{marginTop: 2}}>Or</Typography>

        <Card variant='dark' sx={{padding: 2, marginTop: 2, marginBottom: 2}}>
            <Button variant="contained" color="primary" onClick={handleGoogleLogin}>
            Login with Google
            </Button>
        </Card>
        </Box>
    )
}

export default OathLogin