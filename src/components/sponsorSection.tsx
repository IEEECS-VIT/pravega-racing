/* eslint-disable @next/next/no-img-element */
// components/SponsorSection.tsx
'use client'
import React from 'react';

const SponsorSection: React.FC = () => {
  return (
    <section className="sponsor-section py-16 bg-white" id="sponsor-section">
      <div className="container mx-auto px-5 max-w-screen-md">
        <div className="row">
          <div className="left-section col-md-offset-0 col-md-12">
            <p className="sponsors-intro text-xs text-gray-500 text-center block">
              The design and manufacturing of a Formula car is quite expensive.<br />
              In order to meet the finances, the marketing team approaches 
              multinational companies and request for technical and monetary 
              support. <br />
              Since the assistance from companies plays a vital role in our functioning, we are extremely grateful to them.
              <br /><br />
              <span className="category text-xs text-gray-500 text-center block">The following are the team sponsors: </span>
              <br />
            </p>
            <br />
            <section className="title-sponsors" id="titlesponsors">
              <div className="grid-container-fluid">
                <p className="text-center text-4xl heading-sponsor heading-sponsor-title" title="click to expand">
                  Technological Sponsors
                  <span className="faspan"></span>
                </p>
                <div className="grid-container-fluid">
                  <div className="grid-row flex flex-wrap justify-center">
                    <div className="col-xs-12 col-sm-6 md:w-1/2 p-4 sponsordiv">
                      <div className='overlay'>
                        <div className="overlay__background overlay__background"></div>
                        <div className="overlay__content overlay__content text-color-2"></div>
                        <div className="img-upper-div">
                          <img className="w-full h-auto mx-auto md:ml-0 overlay__image overlay__image--zoom" src="/images/Autodesk.jpg" alt="Autodesk"></img>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 md:w-1/2 p-4 sponsordiv md:pl-12">
                      <div className='overlay'>
                        <div className="overlay__background overlay__background"></div>
                        <div className="overlay__content overlay__content text-color-2"></div>
                        <div className="img-upper-div">
                          <img className="w-full h-auto mx-auto md:mr-0 mt-8 overlay__image overlay__image--zoom" src="/images/Calspan.png" alt="Calspan"></img>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 md:w-1/2 p-4 sponsordiv">
                      <div className='overlay'>
                        <div className="overlay__background overlay__background"></div>
                        <div className="overlay__content overlay__content text-color-2"></div>
                        <div className="img-upper-div">
                          <img className="w-full h-auto mx-auto md:ml-0 overlay__image overlay__image--zoom" src="/images/GT Suite.png" alt="Third Image"></img>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 md:w-1/2 p-4 sponsordiv md:pl-12">
                      <div className='overlay'>
                        <div className="overlay__background overlay__background"></div>
                        <div className="overlay__content overlay__content text-color-2"></div>
                        <div className="img-upper-div">
                          <img className="w-full h-auto mx-auto md:mr-0 mt-8 overlay__image overlay__image--zoom" src="/images/Embotech.png" alt="Fourth Image"></img>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 md:w-1/2 p-4 sponsordiv">
                      <div className='overlay'>
                        <div className="overlay__background overlay__background"></div>
                        <div className="overlay__content overlay__content text-color-2"></div>
                        <div className="img-upper-div">
                          <img className="w-full h-auto mx-auto md:ml-0 mt-10 overlay__image overlay__image--zoom" src="/images/Rapid Harness.png" alt="Rapid Harness"></img>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 md:w-1/2 p-4 sponsordiv">
                      <div className='overlay'>
                        <div className="overlay__background overlay__background"></div>
                        <div className="overlay__content overlay__content text-color-2"></div>
                        <div className="img-upper-div">
                          <img className="w-full h-auto mx-auto md:ml-0 overlay__image overlay__image--zoom" src="/images/IPG Carmaker.jpg" alt="IPG Carmaker"></img>
                        </div>
                      </div>
                    </div>
                    <p className="text-center text-4xl mt-5 heading-sponsor heading-sponsor-title" title="click to expand">
                      Product Sponsors
                      <span className="faspan"></span>
                    </p>
                    <div className="grid-container-fluid">
                      <div className="grid-row flex flex-wrap justify-center">
                        <div className="col-xs-12 col-sm-6 md:w-1/2 p-4 sponsordiv">
                          <div className='overlay'>
                            <div className="overlay__background overlay__background"></div>
                            <div className="overlay__content overlay__content text-color-2"></div>
                            <div className="img-upper-div">
                              <img className="w-full h-auto mx-auto md:mr-8 mt-8 overlay__image overlay__image--zoom" src="/images/CF Composites.png" alt="CF Composites"></img>
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 md:w-1/2 p-4 sponsordiv md:pl-12">
                          <div className='overlay'>
                            <div className="overlay__background overlay__background"></div>
                            <div className="overlay__content overlay__content text-color-2"></div>
                            <div className="img-upper-div">
                              <img className="w-full h-auto mx-auto md:mr-0 mt-8 overlay__image overlay__image--zoom" src="/images/Corsa Technic.png" alt="Corsa Technic"></img>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid-row flex flex-wrap justify-center">
                        <div className="col-xs-12 col-sm-6 md:w-1/2 p-4 sponsordiv">
                          <div className='overlay'>
                            <div className="overlay__background overlay__background"></div>
                            <div className="overlay__content overlay__content text-color-2"></div>
                            <div className="img-upper-div">
                              <img className="w-full h-auto mx-auto md:mr-8 mt-24 overlay__image overlay__image--zoom" src="/images/Flauta Customs.png" alt="Flauta Customs"></img>
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 md:w-1/2 p-4 sponsordiv md:pl-12">
                          <div className='overlay'>
                            <div className="overlay__background overlay__background"></div>
                            <div className="overlay__content overlay__content text-color-2"></div>
                            <div className="img-upper-div">
                              <img className="w-full h-auto mx-auto md:mr-0 mt-24 overlay__image overlay__image--zoom" src="/images/PCB Power.png" alt="PCB Power"></img>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid-row flex flex-wrap justify-center">
                        <div className="col-xs-12 col-sm-6 md:w-1/2 p-4 sponsordiv">
                          <div className='overlay'>
                            <div className="overlay__background overlay__background"></div>
                            <div className="overlay__content overlay__content text-color-2"></div>
                            <div className="img-upper-div">
                              <img className="w-full h-auto mx-auto md:mr-8 mt-20 overlay__image overlay__image--zoom" src="/images/SBG Systems.png" alt="SBG Systems"></img>
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 md:w-1/2 p-4 sponsordiv md:pl-12">
                          <div className='overlay'>
                            <div className="overlay__background overlay__background"></div>
                            <div className="overlay__content overlay__content text-color-2"></div>
                            <div className="img-upper-div">
                              <img className="w-full h-auto mx-auto md:mr-0 mt-20 overlay__image overlay__image--zoom" src="/images/Scolarian Racing.png" alt="Scolarian Racing"></img>
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 md:w-1/2 p-4 sponsordiv md:pl-12">
                          <div className='overlay'>
                            <div className="overlay__background overlay__background"></div>
                            <div className="overlay__content overlay__content text-color-2"></div>
                            <div className="img-upper-div">
                              <img className="w-1/2 h-auto mx-auto md: mr-100 mt-8 overlay__image overlay__image--zoom" src="/images/SKF.png" alt="SKF"></img>
                            </div>
                          </div>
                        </div>                   
                      </div>
                    </div>
                    <p className="text-center text-4xl mt-5 heading-sponsor heading-sponsor-title" title="click to expand">
                      Manufacturing Sponsors
                      <span className="faspan"></span>
                    </p>
                    <div className="grid-container-fluid">
                      <div className="grid-row flex flex-wrap justify-center">
                        <div className="col-xs-12 col-sm-6 md:w-1/2 p-4 sponsordiv">
                          <div className='overlay'>
                            <div className="overlay__background overlay__background"></div>
                            <div className="overlay__content overlay__content text-color-2"></div>
                            <div className="img-upper-div">
                              <img className="w-full h-auto mx-auto md:mr-20 mt-8 overlay__image overlay__image--zoom" src="/images/Adroit.png" alt="Adroit"></img>
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 md:w-1/2 p-4 sponsordiv">
                          <div className='overlay'>
                            <div className="overlay__background overlay__background"></div>
                            <div className="overlay__content overlay__content text-color-2"></div>
                            <div className="img-upper-div">
                              <img className="w-1/2 h-auto mx-auto md:mr-20 mt-8 overlay__image overlay__image--zoom" src="/images/Kali.png" alt="New Image"></img>
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 md:w-1/2 p-4 sponsordiv">
                          <div className='overlay'>
                            <div className="overlay__background overlay__background"></div>
                            <div className="overlay__content overlay__content text-color-2"></div>
                            <div className="img-upper-div">
                              <img className="w-1/2 h-auto mx-auto md:mr-20 mt-8 overlay__image overlay__image--zoom" src="/images/Microspares.png" alt="New Image"></img>
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 md:w-1/2 p-4 sponsordiv">
                          <div className='overlay'>
                            <div className="overlay__background overlay__background"></div>
                            <div className="overlay__content overlay__content text-color-2"></div>
                            <div className="img-upper-div">
                              <img className="w-1/2 h-auto mx-auto md:mr-20 mt-8 overlay__image overlay__image--zoom" src="/images/Varm Press.png" alt="New Image"></img>
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 md:w-1/2 p-4 sponsordiv">
                          <div className='overlay'>
                            <div className="overlay__background overlay__background"></div>
                            <div className="overlay__content overlay__content text-color-2"></div>
                            <div className="img-upper-div">
                              <img className="w-1/2 h-auto mx-auto md:mr-20 mt-8 overlay__image overlay__image--zoom" src="/images/VRL Automation.png" alt="New Image"></img>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-center text-4xl mt-5 heading-sponsor heading-sponsor-title" title="click to expand">
                      Monetary Sponsors
                      <span className="faspan"></span>
                    </p>
                    

                  </div>
                  <div className="grid-container-fluid">
                      <div className="grid-row flex flex-wrap justify-center">
                        <div className="col-xs-12 col-sm-6 md:w-1/2 p-4 sponsordiv">
                          <div className='overlay'>
                            <div className="overlay__background overlay__background"></div>
                            <div className="overlay__content overlay__content text-color-2"></div>
                            <div className="img-upper-div">
                              <img className="w-1/2 h-auto mx-auto md:mr-20 mt-8 overlay__image overlay__image--zoom" src="/images/Smark.png" alt="Adroit"></img>
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 md:w-1/2 p-4 sponsordiv">
                          <div className='overlay'>
                            <div className="overlay__background overlay__background"></div>
                            <div className="overlay__content overlay__content text-color-2"></div>
                            <div className="img-upper-div">
                              <img className="w-1/2 h-auto mx-auto md:mr-20 mt-8 overlay__image overlay__image--zoom" src="/images/Aboorva.png" alt="Adroit"></img>
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
