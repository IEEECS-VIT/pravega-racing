
import React, { useEffect, useState } from 'react';

  

const PrBackground: React.FC = () => {
  const imageUrl = '/images/general/practivities/0.png'; 
  const [isLoaded, setIsLoaded] = useState(false);
  
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${
          scrollPosition * 0.5
        }px)`;
      }
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${
          scrollPosition * -0.5
        }px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative">
      <img
        src={imageUrl}
        style={{ filter: 'brightness(50%)', transformOrigin: 'center center', height: '25rem' }}
        className="left-0 w-full"
      />
      <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <p 
          className={`text-4xl mb-4 ${isLoaded? 'opacity-100' : 'opacity-0'} transition-opacity duration-2000`}
          style={{ transform: isLoaded? 'none' : 'translateX(100%)' }}
        >
          PR activities
        </p>
        <p 
          className={`text-xl whitespace-nowrap ${isLoaded? 'opacity-100' : 'opacity-0'} transition-opacity duration-2000`}
          style={{ transform: isLoaded? 'none' : 'translateX(-100%)' }}
        >
          We do our best to keep our sponsors satisfied by branding them through our various PR activities and exciting marketing campaigns
        </p>
      </div>
    </div>
  );
};


export default PrBackground;

