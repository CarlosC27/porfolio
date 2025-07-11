import React,{useState} from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import './image-carousel.css';

const ImageCarousel = ({images, primaryColor = '#2C5243', secondaryColor = '#E5D599', buttonColor = 'F1E9D2', height: width = '400px', className }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    if(!images || images.length === 0){
        return(
            <div className={`carousel-empty ${className}`} style={{'--carousel-width': width}}>
                <p>No images to display</p>
            </div>
        )
    };

    const carouselStyles = {
        '--primaryColor': primaryColor,
        '--secondaryColor': secondaryColor,
        '--buttonColor': buttonColor,
        '--carouselWidth': width
    };

    return(
        <div className={`carousel-container ${className}`} style={carouselStyles}>
            <div className='carousel-main'>
                {images.length > 1 && (
                    <button onClick={goToPrevious} className='carousel-nav-btn carousel-nav-left'>
                        <ChevronLeft size={24}/>
                    </button>
                )}
                <div className='carousel-img-container'>
                    <img 
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        className='carousel-img'
                        />
                </div>
                {images.length > 1 && (
                    <button onClick={goToNext} className='carousel-nav-btn carousel-nav-right'>
                        <ChevronRight size={24}/>
                    </button>
                )}
            </div>
            {images.length > 1 && (
                <div className='carousel-dots'>
                    {images.map((_, index)=>(
                        <button key={index} onClick={() => goToSlide(index)} className={`carousel-dot ${index === currentIndex ? 'carousel-dot-active' : ''}`}/>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageCarousel;