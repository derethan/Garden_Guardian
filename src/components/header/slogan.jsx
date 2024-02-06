import { Box, Typography } from "@mui/material";

function SiteSlogan() {
    return (
        <Box>
            <Typography variant='h5' component='h5' sx={{
                fontFamily: (theme) => theme.typography.title.main,
                color: (theme) => theme.typography.secondary.main,            
            }}>
            Monitor, Maintain, Protect
            </Typography>
        </Box>
    );
}

export default SiteSlogan;