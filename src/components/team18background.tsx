import React, { useEffect, useState } from 'react';

const Team18Background: React.FC = () => {
  const imageUrl = '/images/general/teams/team18/tbg1.jpg';
  const [isLoaded, setIsLoaded] = useState(false);
  const fontUrl = 'https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap';

  useEffect(() => {
    setIsLoaded(true);
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = fontUrl;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className='relative'>
      <img
        src={imageUrl}
        style={{
          filter: 'brightness(50%)',
          transformOrigin: 'center center',
          height: '25rem',
          objectFit: 'cover', // Add this line
          objectPosition: 'top',
        }}
        className='left-0 w-full'
      />
      <div className='absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center'>
        <p
          className={`text-4xl mb-4 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-2000`}
          style={{ transform: isLoaded ? 'none' : 'translateX(100%)', fontFamily: "'Lato', Helvetica, Arial, sans-serif", fontWeight: '300' }}
        >
          Team
        </p>
        <p
          className={`text-xl whitespace-nowrap ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-2000`}
          style={{ transform: isLoaded ? 'none' : 'translateX(-100%)', fontFamily: "'Lato', Helvetica, Arial, sans-serif", fontWeight: '300' }}
        >
          The A-team who makes it happen
        </p>
      </div>
    </div>
  );
};

export default Team18Background;
