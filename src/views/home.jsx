/************************************************
 *   Welcome/Home page for the application
 *************************************************/

import { Container } from "@mui/material";

import LandingSiteNav from "../components/nav/LandingSiteNav";
import HomeBanner from "../components/LandingContent/HomeBanner";

export default function Home() {
  return <>
    <LandingSiteNav />
    <HomeBanner />
  </>;
}
