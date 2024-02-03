// Desc: This is a card component that will be used to help users get started with the app.

// Import necessary libraries
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';


// Define the component
const HelpCard = () => {
    return (
        <Card sx={{
            backgroundColor: (theme) => theme.background.card.main,
            marginBottom: 2,
            boxShadow: 3,
        }}>
            <CardContent>
                <Typography variant="h4" color={(theme) => theme.typography.secondary.main}>Getting Started in Your Garden</Typography>
                <Typography variant="subtitle2" color={(theme) => theme.typography.secondary.main}>Not sure where to begin?</Typography>
                <Typography variant="body1" color={(theme) => theme.typography.secondary.main}>
                Welcome to our gardening and farming community! Whether you're a seasoned pro or just starting, we're here to help you cultivate a thriving garden or farm.
                </Typography>
            </CardContent>
            <CardActions sx={{
                justifyContent:"center",   
                }}>
                <Button variant="contained" color="secondary">Learn More</Button>
        
            </CardActions>          
        </Card>
    );
}

// Export the component
export default HelpCard;