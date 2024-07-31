'use client';

import React, { useRef } from 'react';

import DriverlessSection from '@/components/DriverlessSection';
import SlideshowBackground from '@/components/Slideshow';

const Page: React.FC = () => {
  const driverlessSectionRef = useRef<HTMLDivElement>(null);

  const handleScrollDown = () => {
    if (driverlessSectionRef.current) {
      window.scrollTo({
        top: driverlessSectionRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='relative min-h-screen overflow-hidden'>
      {/* Navbar */}

      {/* Logo Section */}
      <div className='flex flex-col items-center justify-center h-screen relative'>
        {/* Logo */}
        <img
          src='/images/Pravega Racing Driverless Logo.png'
          alt='Example Image'
          className='w-8vw max-w-xs m-0'
        />

        {/* Scroll Down Button */}
        <div
          className='absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer'
          onClick={handleScrollDown}
          style={{ bottom: '10vh' }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-white'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 14l-7 7m0 0l-7-7m7 7V3'
            />
          </svg>
        </div>
      </div>
      {/* Slideshow Background */}
      <SlideshowBackground />

      {/* Driverless Section */}
      <div ref={driverlessSectionRef}>
        <DriverlessSection />
      </div>
      {/* Footer */}
    </div>
  );
};

export default Page;
