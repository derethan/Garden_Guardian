/************************************************
 *   Welcome/Home page for the application
 *************************************************/

import LandingSiteNav from "../components/nav/LandingSiteNav";
import HomeBanner from "../components/LandingContent/HomeBanner";
import AboutSection from "../components/LandingContent/AboutSection";
import InfoGraphicSection from "../components/LandingContent/InfoGraphicSection";
import KeyFeaturesSection from "../components/LandingContent/KeyFeaturesSection";

export default function Home() {
  return <>
    <LandingSiteNav />
    <HomeBanner />
    <AboutSection />
    <InfoGraphicSection />
    <KeyFeaturesSection />
  </>;
}
