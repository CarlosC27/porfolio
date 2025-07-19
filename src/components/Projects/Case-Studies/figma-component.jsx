import React, { useState, useEffect } from 'react';
import '../Case-Studies/FigmaEbed.css'; 

const FigmaEmbed = ({ 
  figmaUrl, 
  title = "Figma Prototype",
  aspectRatio = "16/9" // Default aspect ratio
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="figma-embed-container">
      <div className="figma-embed-header">
        <h3>{title}</h3>
        {isMobile && (
          <p className="mobile-notice">
            📱 Tap and drag to interact with the prototype
          </p>
        )}
      </div>
      
      <div 
        className="figma-embed-wrapper"
        style={{ aspectRatio }}
      >
        {isLoading && (
          <div className="figma-loading">
            <div className="spinner"></div>
            <p>Loading prototype...</p>
          </div>
        )}
        
        <iframe
          src={figmaUrl}
          title={title}
          className="figma-iframe"
          allowFullScreen
          onLoad={handleIframeLoad}
          loading="lazy"
        />
      </div>
      
      <div className="figma-embed-footer">
        <a 
          href={new URLSearchParams(figmaUrl.split('?')[1]).get('url') || figmaUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="figma-link"
        >
          🔗 View in Figma
        </a>
      </div>
    </div>
  );
};

export default FigmaEmbed;