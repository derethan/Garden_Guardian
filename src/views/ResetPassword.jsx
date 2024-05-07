/************************************************ 
*   Password Reset page for the application
*************************************************/

// Import necessary libraries
import { Container } from '@mui/material';
import ResetPasswordBox from '../components/account/ResetPasswordBox';

import LandingSiteNav from "../components/nav/LandingSiteNav";


export default function ResetPassword() {
    return (
        <>
        <LandingSiteNav />
        <Container maxWidth='sm' sx={{paddingTop: 4}}>
            <ResetPasswordBox />
        </Container>

        </>

    );
}