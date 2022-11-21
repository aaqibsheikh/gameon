import React from "react";
import { Routes, Route } from "react-router-dom";

// importing all the themes
import ThemeOne from "../themes/theme-one";
import ProjectOne from "../themes/project-one";
import ProjectTwo from "../themes/project-two";
import ProjectThree from "../themes/project-three";
import ProjectFour from "../themes/project-four";
import ProjectSingle from "../themes/project-single";
import StakingOne from "../themes/staking-one";
import StakingTwo from "../themes/staking-two";
import Farming from "../themes/farming";
import Leaderboard from "../themes/leaderboard";
import Apply from "../themes/apply";
import Wallet from "../themes/wallet-connect";
import HelpCenter from "../themes/help-center";
import Contact from "../themes/contact";
import Login from "../themes/login";
import Register from "../themes/register";
import Reset from "../themes/reset";
import Tokenomics from "../themes/tokenomics";
import Tier from "../themes/tier-system";
import Blog from "../themes/blog";
import BlogSingle from "../themes/blog-single";
import PeskyKanga from "../themes/PeskyKanga";
import LilWhale from "../themes/LilWhale";
import LadyApes from "../themes/LadyApes";
import LoadedLion from "../themes/LoadedLion";
import CronosCruiser from "../themes/CronosCruiser"
import Projects from "../themes/projects"

const MyRouts = () => {
    return (
      <div>
          <Routes>
            <Route exact path="/" element={ <ThemeOne /> } />
            <Route exact path="/project-one" element={ <ProjectOne /> } />
            <Route exact path="/project-two" element={ <ProjectTwo /> } />
            <Route exact path="/project-three" element={ <ProjectThree /> } />
            <Route exact path="/project-four" element={ <ProjectFour /> } />
            <Route exact path="/project-single" element={ <ProjectSingle /> } />
            <Route exact path="/staking-one" element={ <StakingOne /> } />
            <Route exact path="/staking-two" element={ <StakingTwo /> } />
            <Route exact path="/farming" element={ <Farming /> } />
            <Route exact path="/leaderboard" element={ <Leaderboard /> } />
            <Route exact path="/apply" element={ <Apply /> } />
            <Route exact path="/wallet-connect" element={ <Wallet /> } />
            <Route exact path="/help-center" element={ <HelpCenter /> } />
            <Route exact path="/contact" element={ <Contact /> } />
            <Route exact path="/login" element={ <Login /> } />
            <Route exact path="/register" element={ <Register /> } />
            <Route exact path="/reset" element={ <Reset /> } />
            <Route exact path="/tokenomics" element={ <Tokenomics /> } />
            <Route exact path="/tier-system" element={ <Tier /> } />
            <Route exact path="/blog" element={ <Blog /> } />
            <Route exact path="/blog-single" element={ <BlogSingle /> } />
            <Route exact path="/Pesky-Kanga" element={ <PeskyKanga /> } />
            <Route exact path="/loaded-lion" element={<LoadedLion /> } />
            <Route exact path="/Cronos-Cruiser" element={<CronosCruiser /> } />
            <Route exact path ="Lady-Apes" element={<LadyApes /> } />
            <Route exact path="Lil-Whale" element={<LilWhale /> } />
            <Route exact path= "Projects" element={<Projects /> } />


          </Routes>
      </div>
    );
}
export default MyRouts;