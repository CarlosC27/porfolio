import React from "react";
import PropTypes from 'prop-types';
import '../index.css';

const JouneyCard = ({date, title, imgSource, altText, paragraph}) => {
    return (<div className="journey-card">
        <div className="date-and-title">
            <p>{date}</p>
            <p>{title}</p>
        </div>
            <img src={imgSource} alt={altText} className="journey-card-img"/>
            <p>{paragraph}</p>
    </div>
    );
};

JouneyCard.PropTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imgSource: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired
};

export default JouneyCard;