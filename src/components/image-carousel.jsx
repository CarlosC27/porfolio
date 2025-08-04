import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import './image-carousel.css';

const ImageCarousel = ({ 
    images, 
    primaryColor = '#2C5243', 
    secondaryColor = '#E5D599', 
    buttonColor = '#F1E9D2', 
    maxWidth = '600px', // FIXED: was height: width (typo)
    className = ''
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Handle empty or invalid image arrays
    if (!images || images.length === 0) {
        return (
            <div className={`carousel-empty ${className}`}>
                <p>No images to display</p>
            </div>
        );
    }

    // CSS custom properties for theming and sizing
    const carouselStyles = {
        '--primaryColor': primaryColor,
        '--secondaryColor': secondaryColor,
        '--buttonColor': buttonColor,
        '--carouselMaxWidth': maxWidth // FIXED: Now properly named
    };

    return (
        <div className={`carousel-container ${className}`} style={carouselStyles}>
            <div className="carousel-main">
                {/* Left navigation - only show if multiple images */}
                {images.length > 1 && (
                    <button 
                        onClick={goToPrevious} 
                        className="carousel-nav-btn carousel-nav-left"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={24} />
                    </button>
                )}
                
                {/* Image container */}
                <div className="carousel-img-container">
                    <img 
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1} of ${images.length}`}
                        className="carousel-img"
                        loading="lazy" // Better performance
                        onError={(e) => {
                            // Handle broken images
                            e.target.style.backgroundColor = '#f3f4f6';
                            e.target.alt = 'Image failed to load';
                        }}
                    />
                </div>
                
                {/* Right navigation - only show if multiple images */}
                {images.length > 1 && (
                    <button 
                        onClick={goToNext} 
                        className="carousel-nav-btn carousel-nav-right"
                        aria-label="Next image"
                    >
                        <ChevronRight size={24} />
                    </button>
                )}
            </div>
            
            {/* Dot indicators - only show if multiple images */}
            {images.length > 1 && (
                <div className="carousel-dots">
                    {images.map((_, index) => (
                        <button 
                            key={index} 
                            onClick={() => goToSlide(index)} 
                            className={`carousel-dot ${index === currentIndex ? 'carousel-dot-active' : ''}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageCarousel;