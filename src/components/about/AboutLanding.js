import React from "react";
import AboutHero from "./AboutHero";
import Navbar from "../common/Navbar";
import Footer from "../Footer";
import AboutFounder from "./AboutFounder";
import AboutMission from "./AboutMission";
import Problems from "../Problems";
import AboutSolution from "./AboutSolution";
import AboutIsland from "./AboutIsland";
import AboutProblems from "./AboutProblems";

const AboutLanding=() =>{

return (
    <>
    <Navbar/>
    <AboutHero/>
    <AboutFounder/>
    <AboutMission/>
    <AboutProblems/>
    <AboutSolution/>
    <AboutIsland/>
    <Footer/>
    </>
)
}
export default AboutLanding;