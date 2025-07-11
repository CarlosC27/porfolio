import React from "react";
import PropTypes from 'prop-types';
import '../index.css';


const StickyNote = ({text}) => {
    return(
        <div className="sticky-note-text">
            <p>{text}</p>
        </div>
    )
};

StickyNote.propTypes = {
    text: PropTypes.string.isRequired
};

export default StickyNote;