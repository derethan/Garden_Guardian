import { Box, Typography } from '@mui/material';

function SiteTitle() {
    return (
        <Box>
            <Typography variant='h3' component='h1' sx={{
                fontFamily: (theme) => theme.typography.title.main,
                color: (theme) => theme.typography.primary.main,
                marginTop: '-40px',
                textShadow: '1px 1px 4px #000000',
            }}>
                Garden Guardian
            </Typography>
        </Box>
    );
}

export default SiteTitle;