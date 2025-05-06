import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/homepage";
import Projects from "./components/Projects/projects-page";
import About from "./components/About/about-page";
import Contact from "./components/Contact/contact-page";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/footer";
import Construction from "./components/construction-page";

function App(){
  return (
    <Router>
      <div>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Construction />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        <Footer />
        </div>
    </Router>
  )
}

export default App;
