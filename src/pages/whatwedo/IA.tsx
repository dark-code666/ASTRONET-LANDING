
import ScrollingLogos from "../../components/sections/Parallax-Action/ScrollingLogos";
import StartProyectOne from "../../components/sections/Parallax-Action/StarProyectOne";
import HeroCommunity from "../../components/sections/Parallax-Action/Hero/HeroCommunity";
import FeatureCommunity from "../../components/sections/Parallax-Action/Feature/FeatureCommunity";
import GridsCommunity from "../../components/sections/Parallax-Action/Grids/GridsCommunity";
import ScrollHorOne from "../../components/sections/Parallax-Action/ScrollHorOne";

export default function IA() {
 return (
   <>
     <HeroCommunity />
     <FeatureCommunity/>
     <ScrollingLogos />
     <GridsCommunity />
     <StartProyectOne
       title="Start Your AI Project"
       description="Tell us about your operational challenges, workflows, or product goals. Our team will help you identify the right AI-powered systems and execution strategy to improve efficiency and scale operations."
       buttonLabel="Book a Strategy Call"
     />
      <ScrollHorOne/>

   </>
 )
}
