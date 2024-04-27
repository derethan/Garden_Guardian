/************************************************
 *   Welcome/Home page for the application
 *************************************************/

import LandingSiteNav from "../components/nav/LandingSiteNav";
import HomeBanner from "../components/LandingContent/HomeBanner";
import AboutSection from "../components/LandingContent/AboutSection";
import InfoGraphicSection from "../components/LandingContent/InfoGraphicSection";
import KeyFeaturesSection from "../components/LandingContent/KeyFeaturesSection";
import ComingSoonSection from "../components/LandingContent/ComingSoonSection";
import SiteFooter from "../components/LandingContent/SiteFooter";

export default function Home() {
  return (
<>
<LandingSiteNav />

  <HomeBanner />
  <ComingSoonSection />
  <AboutSection />
  {/* <InfoGraphicSection /> */}
  <KeyFeaturesSection />
  <SiteFooter />
</>
  
  );
}
