'use client'

import React, { useRef } from 'react';
import Footer from '@/components/footer';
import Nav from '@/components/nav';
import SponsorSection from '@/components/sponsorSection';
import SlideshowBackground from '@/components/sponsorsSlideShow';

const SponsorPage: React.FC = () => {
  const sponsorsSectionRef = useRef<HTMLDivElement>(null);

  const handleScrollDown = () => {
    if (sponsorsSectionRef.current) {
      window.scrollTo({
        top: sponsorsSectionRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative flex flex-col items-center justify-center h-screen">
        <div className="z-10 text-center">
          <p className="text-6xl text-white">Our Sponsors</p>
          <br />
          <p className="text-white text-2xl">
            Without their support, we wouldn't be where we are
          </p>
          <div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={handleScrollDown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
        <SlideshowBackground />
      </div>

      <div ref={sponsorsSectionRef}>
        <SponsorSection />
      </div>
    </div>
  );
};

export default SponsorPage;