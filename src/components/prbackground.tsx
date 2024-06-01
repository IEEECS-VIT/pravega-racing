import React, { useEffect, useRef } from 'react';

const Prbackground: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${scrollPosition * -0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='relative fixed inset-0 z-0 overflow-hidden pointer-events-none'>
      <div
        className='absolute top-0 left-0 w-full h-1/2 bg-center bg-cover bg-fixed'
        style={{ backgroundImage: `url('images/general/practivities/0.png')` }}
        ref={parallaxRef}
      ></div>

      <div
        className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'
        ref={contentRef}
      >
        <div className='text-center'>
          <h1 className='text-4xl text-white font-bold'>
            Welcome to Our Website
          </h1>
          <p className='text-xl text-white mt-4'>
            Discover our latest products and services.
          </p>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8'>
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prbackground;
