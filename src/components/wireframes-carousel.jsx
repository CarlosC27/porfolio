import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './wireframes-carousel.css';


const WirefamesCarousel = ({ 
  images = [], 
  primaryColor = "#f9fafb", 
  secondaryColor = "#374151", 
  buttonColor = "#ffffff",
  className = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRefs = useRef([]);

  // Default images if none provided
  const portfolioImages = images.length > 0 ? images : [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=2000&fit=crop',
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=2000&fit=crop',
    'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?w=800&h=2000&fit=crop',
    'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=2000&fit=crop',
  ];

  // Reset scroll position when changing slides
  useEffect(() => {
    const currentContainer = scrollContainerRefs.current[currentIndex];
    if (currentContainer) {
      currentContainer.scrollTop = 0;
    }
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowLeft') {
        setCurrentIndex((prev) => prev === 0 ? portfolioImages.length - 1 : prev - 1);
      } else if (event.key === 'ArrowRight') {
        setCurrentIndex((prev) => prev === portfolioImages.length - 1 ? 0 : prev + 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [portfolioImages.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? portfolioImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === portfolioImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div 
      className={`wf-carousel-container ${className}`}
      style={{
        '--primary-color': primaryColor,
        '--secondary-color': secondaryColor,
        '--button-color': buttonColor
      }}
    >
      {/* Carousel Container with External Navigation */}
      <div className="wf-carousel-wrapper">
        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          className="wf-carousel-arrow"
          aria-label="Previous image"
        >
          <ChevronLeft />
        </button>

        {/* Hero/Viewport Container - Fixed aspect ratio */}
        <div className="wf-carousel-viewport">
          {/* Scrollable Image Container */}
          <div 
            ref={(el) => scrollContainerRefs.current[currentIndex] = el}
            className="wf-carousel-scroll-container"
          >
            <img 
              src={portfolioImages[currentIndex]} 
              alt={`Portfolio item ${currentIndex + 1}`}
              className="wf-carousel-image"
            />
          </div>

          {/* Scroll Indicator */}
          <div className="wf-carousel-scroll-indicator">
            ↕ Scroll to explore
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          className="wf-carousel-arrow"
          aria-label="Next image"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Dot Navigation */}
      <div className="wf-carousel-dots">
        {portfolioImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`wf-carousel-dot ${index === currentIndex ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default WirefamesCarousel;