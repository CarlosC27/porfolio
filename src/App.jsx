import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/homepage";
import Projects from "./components/Projects/projects-page";
import About from "./components/About/about-page";
import Contact from "./components/Contact/contact-page";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/footer";
import Construction from "./components/construction-page";
import Aegeliss from "./components/Projects/Case-Studies/Aegeliss/aegeliss-page";
import Rotator from "./components/Projects/Case-Studies/Rotator/rotator-page";
import Coast2Coast from "./components/Projects/Case-Studies/c2c-page";
import TheCityBetween from "./components/Projects/Case-Studies/TCB/citybtwn-page";
import Revisime from "./components/Projects/Case-Studies/Reviseme/revisime-page";
import ViableVegansim from "./components/Projects/Case-Studies/viable-veganism-page";
import HuskyFitness from "./components/Projects/Case-Studies/husky-fitness-page";

function App(){
  return (
    <Router>
      <div>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="construction" element={<Construction/>}/>
            <Route path="Aegeliss" element={<Aegeliss/>}/>
            <Route path="Rotator-Creative" element={<Rotator/>}/>
            <Route path="Coast-2-Coast-Cousins-BBQ" element={<Coast2Coast/>}/>
            <Route path="The-City-Between-Article" element={<TheCityBetween/>}/>
            <Route path="RÉVISEMÉ" element={<Revisime/>}/>
            <Route path="Viable-Veganism" element={<ViableVegansim/>}/>
            <Route path="Husky-Fitness" element={<HuskyFitness/>}/>
          </Routes>
        <Footer />
        </div>
    </Router>
  )
}

export default App;
