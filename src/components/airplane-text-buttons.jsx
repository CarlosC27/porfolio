import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import '../index.css';

const AirplaneTextButton = ({to, text, image, external = false}) => {
    if (external) {
        return(
            <a href={to} className="airplane-text-button" target="_blank" rel="noopener noreferrer">
                <span className="anchor-text">{text}</span>
                <img src={image} alt="paper airplane" className="airplane-image-button" />
            </a>
        );
    }
    return(
        <Link to={to} className="airplane-text-button">
            <span className="anchor-text">{text}</span>
            <img src={image} alt="paper airplane" className="airplane-image-button" />
        </Link>
    );
};

AirplaneTextButton.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    external: PropTypes.bool
};

export default AirplaneTextButton;