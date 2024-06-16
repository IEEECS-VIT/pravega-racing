
import React, { useEffect, useState } from 'react';

const PhotosBackground: React.FC = () => {
  const imageUrl = '/images/general/teams/team13/tbg1.jpg';
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative">
      <img
        src={imageUrl}
        style={{
          filter: 'brightness(50%)',
          transformOrigin: 'center center',
          height: '25rem',
          objectFit: 'cover', // Add this line
          objectPosition: 'top'
        }}
        className="left-0 w-full"
      />
      <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <p
          className={`text-4xl mb-4 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-2000`}
          style={{ transform: isLoaded ? 'none' : 'translateX(100%)' }}
        >
          Media
        </p>
        <p
          className={`text-xl whitespace-nowrap ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-2000`}
          style={{ transform: isLoaded ? 'none' : 'translateX(-100%)' }}
        >
          A sneak peek into some of our stunning events and performances
        </p>
      </div>
    </div>
  );
};

export default PhotosBackground;