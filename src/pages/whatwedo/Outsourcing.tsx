import GridsBooking from "../../components/sections/Parallax-Action/Grids/GridsBooking";
import HeroBooking from "../../components/sections/Parallax-Action/Hero/HeroBooking";
import FeatureBooking from "../../components/sections/Parallax-Action/Feature/FeatureBooking";
import ScrollingLogos from "../../components/sections/Parallax-Action/ScrollingLogos";
import StartProyectOne from "../../components/sections/Parallax-Action/StarProyectOne";
import ScrollHorOne from "../../components/sections/Parallax-Action/ScrollHorOne";

export default function Outsourcing() { 
    return (
        <>
        <HeroBooking/>
        <FeatureBooking/>
        <ScrollingLogos/>
        <GridsBooking/>
        <StartProyectOne
          title="Build Your Offshore Team"
          description="Tell us about your operational challenges, product roadmap, or team requirements. We will help you define the right offshore structure, execution strategy, and specialist roles to support scalable growth."
          buttonLabel="Book a Strategy Call"
        />
        <ScrollHorOne/>


        </>
    )

}
