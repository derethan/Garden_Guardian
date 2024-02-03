//import MUI Components
import { Container, Box, Typography } from '@mui/material';
import { keyframes } from '@mui/material';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const typing = keyframes`
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
`;



const IntroBanner = () => {
    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-apart',
            marginBottom: '4rem'
            }}>


            <Box paddingTop={'2rem'}>
                <Typography variant='h2' sx={{
                    animation: `${fadeIn} 4s`,
                    textAlign: 'center'
                }}>
                What&apos;s Garden Guardian?
                </Typography>
            </Box>

            <Box paddingTop={'4rem'} position={'relative'}>
                <Typography variant='h5' component='div' sx={{
                position: 'absolute',
                right: 0,
                width: 0,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                animation: `${typing} 4s steps(40, end) forwards`,
                animationDelay: '3s',
                textAlign: 'right',
                marginRight: '1rem'
                }}>
                    Crop Management for the Modern Farmer
                </Typography>
            </Box>

            <Box paddingTop={'4rem'}>
                <Typography variant='h5' component='div' sx={{
                width: 0,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                animation: `${typing} 4s steps(40, end) forwards`,
                animationDelay: '6s',
                textAlign: 'left'
                }}>
                    Enviornmental Monitoring for the Greenhouse
                </Typography>
            </Box>

            <Box paddingTop={'4rem'} position={'relative'}>
                <Typography variant='h5' component='div' sx={{
                position: 'absolute',
                right: 0,
                width: 0,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                animation: `${typing} 4s steps(40, end) forwards`,
                animationDelay: '9s',
                textAlign: 'right',
                marginRight: '1rem'
                }}>
                    Garden planning for the Home Gardener
                </Typography>
            </Box>
    </Container>

    )
}

export default IntroBanner;