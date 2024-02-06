import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../../assets/shield.png';

function Logo() {
    return (
            <Box sx={
                {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',}
            }>
            <Link to='/'>
            <img src={logo} alt='Garden Guardian Logo' width={'200px'} />
            </Link>
            </Box>
    );
}

export default Logo;