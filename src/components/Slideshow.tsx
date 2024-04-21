'use client'
import { useEffect, useState } from 'react';

const SlideshowBackground: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['images/x02.jpg', 'public/images/3.jpg', 'public/images/4.jpg']; // Replace with your own image URLs

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change the interval duration (in milliseconds) as per your requirement

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="fixed inset-0 overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slideshow Image ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

export default SlideshowBackground;