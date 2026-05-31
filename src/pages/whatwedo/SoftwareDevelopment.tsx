import GridsCompany from "../../components/sections/Parallax-Action/Grids/GridsCompany";
import HeroCompany from "../../components/sections/Parallax-Action/Hero/HeroCompany";
import FeatureCompany from "../../components/sections/Parallax-Action/Feature/FeatureCompany";
import ScrollingLogos from "../../components/sections/Parallax-Action/ScrollingLogos";
import StartProyectOne from "../../components/sections/Parallax-Action/StarProyectOne";

export default function SoftwareDevelopment() { 
    return (
        <>
        <HeroCompany/>
        <FeatureCompany/>
        <ScrollingLogos/>
        <GridsCompany/>
        <StartProyectOne
          title="Start Your Software Project"
          description="Tell us what you are building. Our team will help you define the right product architecture, execution strategy, and offshore team structure to launch faster and scale with confidence."
          buttonLabel="Book a Strategy Call"
        />

         


        </>
    )

}
