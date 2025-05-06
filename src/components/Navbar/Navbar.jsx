import React, {useState, useEffect} from "react";
import {Link, useLocation} from 'react-router-dom';
import './Navbar.css';


export const useNavigation  = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const mobileMenu = ()=> {
        setIsMobileMenuOpen((prev) => !prev);
    }
    return {isMobileMenuOpen, mobileMenu};
};

const NavBar = () => {
    const location = useLocation();
    const {isMobileMenuOpen, mobileMenu} = useNavigation();

    useEffect(() => {
        const pageClasses = {
            "/" : "home-page",
            "/About" : "about-page",
            "/Projects" : "projects-page",
            // "/Contact" : "contact-page",
            "/Resume" : "resume-page",
            "/Under-Constrction": "construction-page"
        }

    document.body.classList.remove('home-page', 'about-page', 'projects-page', 'resume-page', "construction-page");
    document.body.classList.add(pageClasses[location.pathname] || "home-page");
}, [location]);


    return(
        <nav className="nav-bar">
            <div className="nav-bar-brand-logo">
                <Link to="/" className="nav-bar-link-logo">CACS</Link>
            </div>
            <button className="mobile-menu-toggle" onClick={mobileMenu}>
                ☰
            </button>

            {isMobileMenuOpen && <div className="menu-overlay" onClick={mobileMenu}></div>}
            <div className={`main-nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <button className="close-menu" onClick={mobileMenu}>✕</button>
                {["Home", "About", "Projects"].map((item) => (
                <Link
                key={item}
                to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className={`nav-link ${location.pathname === `/${item === "Home" ? "" : item.toLowerCase()}` ? "active" : ""}`}
                >{item}</Link>
                ))}
                <a 
                    href="https://drive.google.com/file/d/1gVxPpOKR8x-YrDD6sy2NgT4HnajsZxxd/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="nav-link"
                    >Resume</a>
            </div>
        </nav>
    )
}

export default NavBar;