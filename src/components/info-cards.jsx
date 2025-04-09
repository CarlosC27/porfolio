import React from "react";
import PropTypes from 'prop-types';
import images from "../constants/images";
import AirplaneTextButton from "./airplane-text-buttons";
import '../index.css';

const InfoCard  = ({title, techStack, description, projectLink, imgSource}) => {
    return (
        <div className="info-card">
            <img src={imgSource} alt= {`${title} project preview`} className="info-card-img" />
            <div className="info-card-overlay">
                <h3 className="info-card-title">{title}</h3>
                <p className="info-card-tech-stack">{techStack}</p>
                <div className="info-card-description-container">
                    <p className="info-card-description">{description}</p>
                </div>
                <AirplaneTextButton to={projectLink} text="Learn More" image={images.green_pa}/>
            </div>
        </div>
    );
};

InfoCard.propTypes = {
    title: PropTypes.string.isRequired,
    techStack: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    projectLink: PropTypes.string.isRequired,
    imgSource: PropTypes.string.isRequired
};

export default InfoCard;