import  React, {useState} from 'react'
import PropTypes from 'prop-types'
import { ChevronDown, ChevronUp } from 'lucide-react';
import './expandableCards.css';

const ExpandableCard = ({image, title, description, expandedContent, className='', defaultExpanded = false}) => {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded)

    const cardClasses = `expanded-card ${className} ${isExpanded ? 'expanded' : ''}`.trim()

    return(
        <div className={cardClasses}>
            {image && (
                <div className='img-container'>
                    <div className='img-ring'>
                        <img src={image} alt={title} className='card-img' />
                        <div className='gradient-overlay'></div>
                    </div>
                </div>
            )}
            <h3 className='card-title'>{title}</h3>
            <p className='card-description'>{description}</p>
            {isExpanded && expandedContent && (
                <div className="expanded-content">
                    {expandedContent}
                </div>
            )}
            {expandedContent && (
                <button onClick={() => setIsExpanded(!isExpanded)} className='expanded-button' aria-label={isExpanded ? 'Collapse' : 'Expand'}>
                    {isExpanded ? (<ChevronUp size={24} />) : (<ChevronDown size={24} />)}
                </button>
            )}
        </div>
    )
};

ExpandableCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    expandedContent: PropTypes.node,
    className: PropTypes.string,
    defaultExpanded: PropTypes.bool
}

export default ExpandableCard;