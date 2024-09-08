'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import '/src/styles/slider1.css';
import '/src/styles/slider2.css';
import '/src/styles/font-awesome.css';
import '/src/styles/indexpage.css';
import '/src/styles/styles.css';

import FollowPageCard from '@/components/followpagecard';
import SlideshowBackground from '@/components/Slideshow';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <>
      <div className='pageFull '>
        <Head>
          <title>Pravega Racing - VIT University Vellore</title>
        </Head>
        <SlideshowBackground />

        <section className='h-screen flex items-center justify-center'>
          <div className='text-center'>
            <h1 className='text-color-10 font-size-xxlrg main-heading-pravega font-bold mb-5'>
              Pravega Racing
            </h1>
            <h5 className='text-color-10 font-bold'>
              One Team. One Dream. One Car.
            </h5>
          </div>
        </section>

        <div className='main-ka-baap'>
          <main className='container' style={{ width: '85%', margin: 'auto' }}>
            <section id='firstsection'>
              <div className='grid-container-fluid margin-top-80 margin-bottom-60'>
                <div className='grid-row pb-4 md:pb-1'>
                  <div className='column-8 aboutusdiv'>
                    <h3 className='text-left'>
                      <b>
                        Fifty Four,{' '}
                        <span className='redcolor' style={{ color: 'red' }}>
                          Pravega !
                        </span>
                      </b>
                    </h3>
                    <p className='text-left' style={{ width: '85%' }}>
                      We are a team of engineers who seek to enhance the
                      learning experience of the student community at VIT
                      University by implementation of engineering fundamentals
                      within the context of building a formula style Racecar. We
                      annually take part in the Formula Student competitions
                      organised by Society of Automotive Engineers (SAE). We
                      strive to achieve a steady growth in the Formula Student
                      Circuit by focusing on world class engineering practices
                      and institutionalising innovation.
                    </p>
                  </div>
                  <FollowPageCard />
                </div>
                <div className='grid-row padlr'>
                  <h3 className='text-left text-3xl md:text-4xl'>
                    &nbsp;&nbsp;<b>About Formula SAE</b>
                  </h3>
                  <div className='flex'>
                    <div className='column-9'>
                      <p
                        className='text-left text-justify'
                        style={{ width: '75%' }}
                      >
                        Formula SAE (FSAE) is an opportunity for students to
                        design, manufacture, and race a formula-style car. Over
                        570 university teams from around the world participate
                        in competitions held across the globe including
                        locations such USA, UK, Germany, Italy, Japan, and
                        Australia. The participants explain and defend their
                        design decisions, test their driver’s abilities and
                        pitch their car to venture capitalists via a business
                        presentation with the target as amateur weekend
                        autocross drivers.
                      </p>
                    </div>
                    <div className='-mt-[5vh] -ml-[2vw]'>
                      <img
                        src='/images/general/cars/sae.png'
                        className='h-[30vh] w-[20vw] border-black border-4 p-4 shadow-[-10px_10px_0_0_#000000]'
                        alt='SAE Car'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className='gvisva-section'>
              <div className='grid-container-fluid mb-10'>
                <div className='flex items-center space-x-6'>
                  <div className='text-center flex-shrink-0'>
                    <img
                      src='images/chancellor.png'
                      className='vish img-circle chancellor-img img-responsive hidden-small size-[40vh] object-cover'
                      alt='Chancellor'
                    />
                  </div>
                  <div className='w-8/12'>
                    <div className='text-left-imp'>
                      <FontAwesomeIcon icon={faQuoteLeft} />
                    </div>
                    <div className='text-left font-extrabold'>
                      <p className='w-[60vw]'>
                        I am happy and proud to inform you that Pravega Racing
                        is the official Formula SAE (FSAE) team of VIT
                        University. The team comprises of a group of able and
                        resolute students of our institution from all academic
                        divisions aiming for excellence. Pravega Racing is among
                        the top three Formula SAE teams of India.
                      </p>
                    </div>
                    <div className='text-right'>
                      <FontAwesomeIcon icon={faQuoteRight} />
                    </div>
                    <br />
                    <p className='text-right font-thin'>
                      <b>
                        Dr. G Vishwanathan
                        <br />
                        Founder and Chancellor, VIT University
                        <br />
                        Former Member of Parliament
                        <br />
                        Former Minister, Govt. of Tamil Nadu
                        <br />
                        President, Education Promotion Society of India, New
                        Delhi
                      </b>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* End of sections */}
            <a href='#' className='back-to-top--floating'>
              <i className='ion-ios-arrow-up'></i>
            </a>
          </main>
          <section style={{ color: 'black', width: '100%', margin: 'auto' }}>
            <br />
            <div
              className='text-align-left text-bold text-3xl'
              style={{ marginLeft: '13%' }}
            >
              Recent Activities
            </div>
            <div
              className='imageThing justify-center flex space-x-12 mt-4 mb-6'
              style={{}}
            >
              <div className='itemRecentAct'>
                <a href='/events'>
                  <img
                    src='images/general/media/fsb21/1.png'
                    style={{ width: '100%', height: '100%' }}
                    className='image shadow-[-10px_10px_0_0_#FF0000]'
                  />
                </a>
                <div className='textContentImage'>
                  <div className='innerText'>Formula Bharat 2021</div>
                </div>
              </div>
              <div className='itemRecentAct'>
                <a href='/events'>
                  <img
                    src='images/general/media/fsO20/1.jpg'
                    style={{ width: '100%', height: '100%' }}
                    className='image shadow-[-10px_10px_0_0_#FF0000]'
                  />
                </a>
                <div className='textContentImage'>
                  <div className='innerText'>Formula Student Online 2020</div>
                </div>
              </div>
              <div className='itemRecentAct'>
                <a href='/events'>
                  <img
                    src='images/general/media/fsg19/11.jpg'
                    style={{ width: '100%', height: '100%' }}
                    className='image shadow-[-10px_10px_0_0_#FF0000]'
                  />
                </a>
                <div className='textContentImage'>
                  <div className='innerText'>Formula Student Germany 2019</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <a href='#' className='back-to-top--floating'>
        <i className='ion-ios-arrow-up'></i>
      </a>
    </>
  );
}
