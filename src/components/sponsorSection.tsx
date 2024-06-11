/* eslint-disable @next/next/no-img-element */
// components/SponsorSection.tsx
'use client';
import React from 'react';

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
              multinational companies and request for technical and monetary
              support. <br />
              Since the assistance from companies plays a vital role in our
              functioning, we are extremely grateful to them.
              <br />
              <br />
              <span className='category text-xs text-gray-500 text-center block'>
                The following are the team sponsors:{' '}
              </span>
              <br />
            </p>
            <br />
            <section className='title-sponsors' id='titlesponsors'>
              <div className='grid-container-fluid'>
                <p
                  className='text-center text-4xl heading-sponsor heading-sponsor-title'
                  title='click to expand'
                >
                  Technological Sponsors
                  <span className='faspan'></span>
                </p>
                <div className='grid-container-fluid mt-5'>
                  <div className='grid-row flex flex-wrap justify-center'>
                    <div className='col-xs-12 col-sm-6 md:w-1/2 p-4 relative overflow-hidden group'>
                      <div className='absolute bg-white top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100'></div>
                      <div className='x'></div>
                      <img
                        className='w-full h-auto mx-auto md:ml-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110'
                        src='/images/Autodesk.jpg'
                        alt='Autodesk'
                      />
                      <div className='absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 '>
                        <div className='flex flex-col items-center justify-center h-full w-full text-white'>
                          AUTODESK
                        </div>
                      </div>
                    </div>
                    <div className='col-xs-12 col-sm-6 md:w-1/2 p-4 relative overflow-hidden group'>
                      <div className='absolute bg-white top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100'></div>
                      <div className='x'></div>
                      <img
                        className='w-full h-auto mx-auto md:ml-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110 mt-8'
                        src='/images/Calspan.png'
                        alt='Calspan'
                      />
                      <div className='absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 '>
                        <div className='flex flex-col items-center justify-center h-full w-full text-white'>
                          CALSPAN
                        </div>
                      </div>
                    </div>
                    <div className='col-xs-12 col-sm-6 md:w-1/2 p-4 relative overflow-hidden group mt-3'>
                      <div className='absolute bg-white top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100'></div>
                      <div className='x'></div>
                      <img
                        className='w-full h-auto mx-auto md:ml-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110'
                        src='/images/GT Suite.png'
                        alt='Third Image'
                      />
                      <div className='absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 '>
                        <div className='flex flex-col items-center justify-center h-full w-full text-white'>
                          GT Suite
                        </div>
                      </div>
                    </div>
                    <div className='col-xs-12 col-sm-6 md:w-1/2 p-4 relative overflow-hidden group mt-3'>
                      <div className='absolute bg-white top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100'></div>
                      <div className='x'></div>
                      <img
                        className='w-full h-auto mx-auto md:ml-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110 mt-10'
                        src='/images/Embotech.png'
                        alt='Fourth Image'
                      />
                      <div className='absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 '>
                        <div className='flex flex-col items-center justify-center h-full w-full text-white'>
                          EMBOTECH
                        </div>
                      </div>
                    </div>

                    <div className='col-xs-12 col-sm-6 md:w-1/2 p-4 relative overflow-hidden group mt-3'>
                      <div className='absolute bg-white top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100'></div>
                      <div className='x'></div>
                      <img
                        className='w-full h-auto mx-auto md:ml-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110 mt-8'
                        src='/images/Rapid Harness.png'
                        alt='Rapid Harness'
                      />
                      <div className='absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 '>
                        <div className='flex flex-col items-center justify-center h-full w-full text-white'>
                          RAPID HARNESS
                        </div>
                      </div>
                    </div>

                    <div className='col-xs-12 col-sm-6 md:w-1/2 p-4 relative overflow-hidden group '>
                      <div className='absolute bg-white top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100'></div>
                      <div className='x'></div>
                      <img
                        className='w-full h-auto mx-auto md:ml-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110'
                        src='/images/IPG Carmaker.jpg'
                        alt='IPG Carmaker'
                      />
                      <div className='absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 '>
                        <div className='flex flex-col items-center justify-center h-full w-full text-white'>
                          IPG CARMAKER
                        </div>
                      </div>
                    </div>

                    <p
                      className='text-center text-4xl mt-5 heading-sponsor heading-sponsor-title'
                      title='click to expand'
                    >
                      Product Sponsors
                      <span className='faspan'></span>
                    </p>
                    <div className='grid-container-fluid mt-4'>
                      <div className='grid-row flex flex-wrap justify-center'>
                        <div className='col-xs-12 col-sm-6 md:w-1/2 p-4 relative overflow-hidden group '>
                          <div className='absolute bg-white top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100'></div>
                          <div className='x'></div>
                          <img
                            className='w-full h-auto mx-auto md:ml-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110'
                            src='/images/CF Composites.png'
                            alt='IPG Carmaker'
                          />
                          <div className='absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 '>
                            <div className='flex flex-col items-center justify-center h-full w-full text-white'>
                              CF COMPOSITES
                            </div>
                          </div>
                        </div>
                        <div className='col-xs-12 col-sm-6 md:w-1/2 p-4 relative overflow-hidden group '>
                          <div className='absolute bg-white top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100'></div>
                          <div className='x'></div>
                          <img
                            className='w-full h-auto mx-auto md:ml-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110 mt-4'
                            src='/images/Corsa Technic.png'
                            alt='IPG Carmaker'
                          />
                          <div className='absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 '>
                            <div className='flex flex-col items-center justify-center h-full w-full text-white'>
                              CORSA TECHNIC
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='grid-row flex flex-wrap justify-center mt-8'>
                        <div className='col-xs-12 col-sm-6 md:w-1/2 p-4 relative overflow-hidden group '>
                          <div className='absolute bg-white top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100'></div>
                          <div className='x'></div>
                          <img
                            className='w-full h-auto mx-auto md:ml-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110'
                            src='/images/Flauta Customs.png'
                            alt='IPG Carmaker'
                          />
                          <div className='absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 '>
                            <div className='flex flex-col items-center justify-center h-full w-full text-white'>
                              FLAUTA CUSTOMS
                            </div>
                          </div>
                        </div>
                        <div className='col-xs-12 col-sm-6 md:w-1/2 p-4 relative overflow-hidden group '>
                          <div className='absolute bg-white top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100'></div>
                          <div className='x'></div>
                          <img
                            className='w-full h-auto mx-auto md:ml-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110'
                            src='/images/PCB Power.png'
                            alt='IPG Carmaker'
                          />
                          <div className='absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 '>
                            <div className='flex flex-col items-center justify-center h-full w-full text-white'>
                              PCB POWER
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='grid-row flex flex-wrap justify-center'>
                        <div className='col-xs-12 col-sm-6 md:w-1/2 p-4 relative overflow-hidden group '>
                          <div className='absolute bg-white top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100'></div>
                          <div className='x'></div>
                          <img
                            className='w-full h-auto mx-auto md:ml-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110 mt-6'
                            src='/images/SBG Systems.png'
                            alt='IPG Carmaker'
                          />
                          <div className='absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 '>
                            <div className='flex flex-col items-center justify-center h-full w-full text-white'>
                              SBG SYSTEMS
                            </div>
                          </div>
                        </div>
                        <div className='col-xs-12 col-sm-6 md:w-1/2 p-4 relative overflow-hidden group '>
                          <div className='absolute bg-white top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100'></div>
                          <div className='x'></div>
                          <img
                            className='w-full h-auto mx-auto md:ml-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110 mt-6'
                            src='/images/Scolarian Racing.png'
                            alt='IPG Carmaker'
                          />
                          <div className='absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 '>
                            <div className='flex flex-col items-center justify-center h-full w-full text-white'>
                              SCHOLARIAN SCHOLARS
                            </div>
                          </div>
                        </div>
                        <div className='col-xs-12 col-sm-6 md:w-1/2 p-4 relative overflow-hidden group '>
                          <div className='absolute bg-white top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100'></div>
                          <div className='x'></div>
                          <img
                            className='w-3/4 h-auto mx-auto md:ml-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110'
                            src='/images/SKF.png'
                            alt='IPG Carmaker'
                          />
                          <div className='absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 '>
                            <div className='flex flex-col items-center justify-center h-full w-full text-white'>
                              SKF
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p
                      className='text-center text-4xl mt-5 heading-sponsor heading-sponsor-title'
                      title='click to expand'
                    >
                      Manufacturing Sponsors
                      <span className='faspan'></span>
                    </p>
                    <div className='grid-container-fluid'>
                      <div className='grid-row flex flex-wrap justify-center mt-4'>
                        <div className='col-xs-12 col-sm-6 md:w-1/2 p-4 relative overflow-hidden group '>
                          <div className='absolute bg-white top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100'></div>
                          <div className='x'></div>
                          <img
                            className='w-3/4 h-auto mx-auto md:ml-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110'
                            src='/images/Adroit.png'
                            alt='IPG Carmaker'
                          />
                          <div className='absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 '>
                            <div className='flex flex-col items-center justify-center h-full w-full text-white'>
                              ADROIT
                            </div>
                          </div>
                        </div>
                        <div className='col-xs-12 col-sm-6 md:w-1/2 p-4 relative overflow-hidden group '>
                          <div className='absolute bg-white top-0 left-0 w-full  h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100'></div>

                          <img
                            className='w-1/2 h-auto mx-auto md:ml-0 transition-transform flex justify-center duration-500 ease-in-out transform group-hover:scale-110'
                            src='/images/Kali.png'
                            alt='IPG Carmaker'
                          />
                          <div className='absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 '>
                            <div className='flex flex-col items-center justify-center h-full w-full text-white'>
                              KALI
                            </div>
                          </div>
                        </div>
                        <div className='col-xs-12 col-sm-6 md:w-1/2 p-4 relative overflow-hidden group '>
                          <div className='absolute bg-white top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100'></div>
                          <div className='x'></div>
                          <img
                            className='w-full h-auto mx-auto md:ml-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110'
                            src='/images/Microspares.png'
                            alt='IPG Carmaker'
                          />
                          <div className='absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 '>
                            <div className='flex flex-col items-center justify-center h-full w-full text-white'>
                              MICROSPARES
                            </div>
                          </div>
                        </div>
                        <div className='col-xs-12 col-sm-6 md:w-1/2 p-4 relative overflow-hidden group '>
                          <div className='absolute bg-white top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 '></div>

                          <img
                            className='w-full h-auto mx-auto md:ml-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110 '
                            src='/images/Varm Press.png'
                            alt='IPG Carmaker'
                          />
                          <div className='absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 '>
                            <div className='flex flex-col items-center justify-center h-full w-full text-white'>
                              VARM PRESS E-GEN
                            </div>
                          </div>
                        </div>
                        <div className='col-xs-12 col-sm-6 md:w-1/2 p-4 relative overflow-hidden group '>
                          <div className='absolute bg-white top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 flex flex-col justify-center items-center '></div>
                          <div className='flex flex-col justify-center items-center'>
                            <img
                              className=' ml-5  w-3/5 h-auto mx-auto md:ml-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110'
                              src='/images/VRL Automation.png'
                              alt='IPG Carmaker'
                            />
                          </div>
                          <div className='absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 '>
                            <div className='flex flex-col items-center justify-center h-full w-full text-white'>
                              VRL AUTOMATION
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p
                      className='text-center text-4xl mt-5 heading-sponsor heading-sponsor-title'
                      title='click to expand'
                    >
                      Monetary Sponsors
                      <span className='faspan'></span>
                    </p>
                  </div>
                  <div className='grid-container-fluid'>
                    <div className='grid-row flex flex-wrap justify-center mt-4'>
                      <div className='col-xs-12 col-sm-6 md:w-1/2 p-4 relative overflow-hidden group '>
                        <div className='absolute bg-white top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 flex flex-col justify-center items-center '></div>
                        <div className='flex flex-col justify-center items-center'>
                          <img
                            className=' mr-5  w-full h-auto mx-auto md:ml-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110'
                            src='/images/Smark.png'
                            alt='IPG Carmaker'
                          />
                        </div>
                        <div className='absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 '>
                          <div className='flex flex-col items-center justify-center h-full w-full text-white'>
                            S.MARK
                          </div>
                        </div>
                      </div>
                      <div className='col-xs-12 col-sm-6 md:w-1/2 p-4 relative overflow-hidden group '>
                        <div className='absolute bg-white top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 flex flex-col justify-center items-center '></div>
                        <div className='flex flex-col justify-center items-center'>
                          <img
                            className=' ml-5  w-3/5 h-auto mx-auto md:ml-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110'
                            src='/images/Aboorva.png'
                            alt='IPG Carmaker'
                          />
                        </div>
                        <div className='absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 '>
                          <div className='flex flex-col items-center justify-center h-full w-full text-white'>
                            ABOORVA
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
