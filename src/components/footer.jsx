import { HiArrowCircleUp } from "react-icons/hi";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import images from "../constants/images";



const Footer = () => {

        const scrollToTopClick = () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth' 
          });
        }

    return(
        <footer>
            <div className="footer-content">
                <HiArrowCircleUp onClick={scrollToTopClick} className="go-to-top"/>
                <div className="footer-logo-container">
                    <img src={images.footer_logo} alt="Carlos Carrillo's logo" className="footer-img"/>
                    <p>&copy; 2025 CACS All Rights Reserved.</p>
                </div>
                <div className="footer-links">
                   <a href="mailto:carlos.cs.2799@gmail.com" target="_blank"><SiGmail /></a> 
                   <a href="https://github.com/CarlosC27" target="_blank"><ImGithub /></a> 
                   <a href="https://www.linkedin.com/in/cacs27/" target="_blank"><FaLinkedin /></a> 
                   <a href="https://www.instagram.com/carlosjtj13/" target="_blank"><FaInstagramSquare /></a> 
                </div>
            </div>
        </footer>
    )
}

export default Footer