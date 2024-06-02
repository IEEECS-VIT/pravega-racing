'use client'
import React from 'react';
import SlideshowBackground from '@/components/Slideshow';
import DriverlessSection from '@/components/DriverlessSection';

const Page: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">

      <div className="flex items-center justify-center h-full">
        <img
          src="/images/Pravega Racing Driverless Logo.png" // Replace with the path to your image
          alt="Example Image"
          className="max-w-full max-h-full"
        />
      </div>
      <SlideshowBackground />
      <DriverlessSection />

    </div>

  );
};

export default Page;