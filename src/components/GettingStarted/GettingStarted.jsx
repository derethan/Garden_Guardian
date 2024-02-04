//import mui components
import { Container, Box } from "@mui/material";

//import components
import HelpCard from "../HelpCard";
import LoginBox from "../LoginBox";

const GettingStarted = () => {
    return (
        <Container sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            gap: 2,
            
        }}>

            <Box maxWidth={'sm'} >
                <LoginBox />
            </Box>
            <Box maxWidth={'sm'} >
                <HelpCard />
            </Box>

        </Container>
    );
}

export default GettingStarted;