'use client'
import { useEffect, useState } from 'react';

const SlideshowBackground: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = ['images/2.jpg', '/images/3.jpg', '/images/4.jpg', '/images/5.jpg', '/images/8.jpg', '/images/10.jpg']; // Replace with your own image URLs

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);


    }, 5000); // Change the interval duration (in milliseconds) as per your requirement

    return () => clearInterval(interval);
  }, [images.length]);

  /*images.map((image, index) => (
    console.log(image, index)
  ));*/

  return (
    <div style={{ zIndex: -100 }} className="h-screen fixed inset-0 overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}

          style={{ filter: 'brightness(50%)', transformOrigin: 'center center' }}


          alt={`Slideshow Image ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
        />
      ))}
    </div>
  );
};

export default SlideshowBackground;