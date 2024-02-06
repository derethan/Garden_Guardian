/************************************************ 
*   Welcome/Home page for the application
*************************************************/

import { Container } from "@mui/material";

import IntroBanner from "../components/introBanner/IntroBanner";
import GettingStarted from "../components/GettingStarted/GettingStarted";


export default function Home() {
    return (

        <Container>
            <IntroBanner />
            <GettingStarted />

        </Container>



    );
}
