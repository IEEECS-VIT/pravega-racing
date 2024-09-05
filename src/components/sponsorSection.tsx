'use client';
import React from 'react';

const sponsors = {
  technological: [
    { src: '/images/Autodesk.jpg', alt: 'Autodesk', name: 'AUTODESK' },
    { src: '/images/Calspan.png', alt: 'Calspan', name: 'CALSPAN' },
    { src: '/images/GT Suite.png', alt: 'GT Suite', name: 'GT Suite' },
    { src: '/images/Embotech.png', alt: 'Embotech', name: 'EMBOTECH' },
    {
      src: '/images/Rapid Harness.png',
      alt: 'Rapid Harness',
      name: 'RAPID HARNESS',
    },
    {
      src: '/images/IPG Carmaker.jpg',
      alt: 'IPG Carmaker',
      name: 'IPG CARMAKER',
    },
  ],
  product: [
    {
      src: '/images/CF Composites.png',
      alt: 'CF Composites',
      name: 'CF COMPOSITES',
    },
    {
      src: '/images/Corsa Technic.png',
      alt: 'Corsa Technic',
      name: 'CORSA TECHNIC',
    },
    {
      src: '/images/Flauta Customs.png',
      alt: 'Flauta Customs',
      name: 'FLAUTA CUSTOMS',
    },
    { src: '/images/PCB Power.png', alt: 'PCB Power', name: 'PCB POWER' },
    { src: '/images/SBG Systems.png', alt: 'SBG Systems', name: 'SBG SYSTEMS' },
    {
      src: '/images/Scolarian Racing.png',
      alt: 'Scolarian Racing',
      name: 'SCHOLARIAN SCHOLARS',
    },
    { src: '/images/SKF.png', alt: 'SKF', name: 'SKF' },
  ],
  manufacturing: [
    { src: '/images/Adroit.png', alt: 'Adroit', name: 'ADROIT' },
    { src: '/images/Kali.png', alt: 'Kali', name: 'KALI' },
    { src: '/images/Microspares.png', alt: 'Microspares', name: 'MICROSPARES' },
    {
      src: '/images/Varm Press.png',
      alt: 'Varm Press E-Gen',
      name: 'VARM PRESS E-GEN',
    },
    {
      src: '/images/VRL Automation.png',
      alt: 'VRL Automation',
      name: 'VRL AUTOMATION',
    },
  ],
  monetary: [
    { src: '/images/Smark.png', alt: 'Smark', name: 'S.MARK' },
    {
      src: '/images/Aboorva.png',
      alt: 'Aboorva',
      name: 'ABOORVA',
    },
    // Add more sponsors here
  ],
};

const SponsorSection: React.FC = () => {
  return (
    <section className='sponsor-section py-16 bg-white' id='sponsor-section'>
      <div className='container mx-auto px-5 max-w-screen-md'>
        <div className='row'>
          <div className='left-section col-md-offset-0 col-md-12'>
            <p className='sponsors-intro text-xs text-gray-500 text-center block'>
              The design and manufacturing of a Formula car is quite expensive.
              <br />
              In order to meet the finances, the marketing team approaches
              multinational companies and requests technical and monetary
              support. <br />
              Since the assistance from companies plays a vital role in our
              functioning, we are extremely grateful to them.
              <br />
              <br />
              <span className='category text-xs text-gray-500 text-center block'>
                The following are the team sponsors:
              </span>
              <br />
            </p>
            <br />
            {Object.entries(sponsors).map(([category, items]) => (
              <section
                key={category}
                className='title-sponsors'
                id={`${category}`}
              >
                <p
                  className='text-center text-4xl heading-sponsor heading-sponsor-title'
                  title='click to expand'
                >
                  {category.charAt(0).toUpperCase() +
                    category.slice(1).replace(/([A-Z])/g, ' $1') +
                    ' Sponsors'}
                  <span className='faspan'></span>
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
                  {items.map((sponsor, index) => (
                    <div
                      key={index}
                      className='relative overflow-hidden group flex items-center justify-center'
                    >
                      <div className='absolute bg-white top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100'></div>
                      <img
                        className='w-80 h-80 object-contain transition-transform duration-500 ease-in-out transform group-hover:scale-110'
                        src={sponsor.src}
                        alt={sponsor.alt}
                      />
                      <div className='absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500'>
                        <div className='flex flex-col items-center justify-center h-full w-full text-white'>
                          {sponsor.name}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
