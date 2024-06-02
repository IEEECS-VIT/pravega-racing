import React, { useEffect, useState } from 'react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div
      className={`transition-opacity duration-500 fixed bottom-4 right-4 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <button
        onClick={scrollToTop}
        className='bg-gray-300 hover:bg-gray-400 py-6 px-6 mx-4 my-4 rounded transition ease-out duration-500'
        style={{
          backgroundImage: `url('/images/general/practivities/Arrowhead-up.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          width: '40px',
          height: '40px',
          border: 'none',
        }}
      ></button>
    </div>
  );
};

export default ScrollToTopButton;
