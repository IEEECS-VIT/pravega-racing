'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';
import { useEffect } from 'react';
import '/src/styles/slider1.css';
import '/src/styles/slider2.css';
import '/src/styles/font-awesome.css';
import '/src/styles/indexpage.css';
import '/src/styles/styles.css';

import Footer from '@/components/footer';
import Nav from '@/components/nav';
import SlideshowBackground from '@/components/Slideshow';
import FollowPageCard from '@/components/followpagecard';
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
      <div className="pageFull">

        <Head>
          <title>Pravega Racing - VIT University Vellore</title>


        </Head>
        <SlideshowBackground />

        {/* <section className="">
        <div className="hero-unit hero-unit--banner-4" id="page">
          {/*<ul style={{ background: 'rgba(0,0,0,0.5)', zIndex: 5 }} className="cb-slideshow">
            {/* Your list items here */}
        {/* <div className="hero-unit__content">
            <div className="grid-container">
              <div className="grid-row">
                <div className="column-12 text-center animated-parent">
                  <h1 className="text-color-9 mt-5 font-size-xxlrg main-heading-pravega">
                    <b>Pravega Racing</b>
                  </h1>
                  <h5 className="text-color-10 animated animate__fade-in-up-short"><b>
                    One Team. One Dream. One Car.
                  </b></h5>
                </div>
              </div>
            </div>
          </div>
          <a data-scroll href="#firstsection"><span className="scroll-pointer"></span></a>
        </div>
      </section> */}

        <section>
          <div className="hero-unit hero-unit--banner-4" id="page">
            <div className="hero-unit__content">
              <div className="grid-container">
                <div className="grid-row">
                  <div style={{}} className="column-12 text-center animated-parent testClass">
                    <h1 className="text-color-10 mt-5 font-size-xxlrg main-heading-pravega">
                      <b>Pravega Racing</b>
                    </h1>
                    <h5 className="text-color-10 mt-5"><b>
                      One Team. One Dream. One Car.
                    </b></h5>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>


        <div className="main-ka-baap">
          <main className="container" style={{ width: '75%', margin: 'auto' }}>
            <section id="firstsection" >
              <div className="grid-container-fluid margin-top-70 margin-bottom-50">
                <div className="grid-row">
                  <div className="column-8 aboutusdiv">
                    <h3 className="text-left"><b>Fifty Four, <span className="redcolor" style={{ color: 'red' }}>Pravega !</span></b></h3>
                    <p className="text-left">
                      We are a team of engineers who seek to enhance the learning
                      experience of the student community at VIT University by implementation of engineering
                      fundamentals within the context of building
                      a formula style Racecar. We annually take part in the Formula Student competitions
                      organised by Society of Automotive Engineers (SAE). We strive to achieve a
                      steady growth in the Formula Student Circuit by focusing on world class
                      engineering practices and institutionalising innovation.
                    </p>
                  </div>
                  <FollowPageCard />
                </div>
                <div className="grid-row padlr">
                  <h3 className="text-left">&nbsp;&nbsp;<b>About Formula SAE</b></h3>
                  <div className="column-9">
                    <p className="text-left">
                      Formula SAE (FSAE) is an opportunity for students to design, manufacture, and race
                      a formula-style car. Over 570 university teams from around the world participate in
                      competitions held across the globe including locations such USA, UK, Germany, Italy,
                      Japan and Australia. The participants explain and defend their design decisions,
                      test their driver’s abilities and pitch their car to venture capitalists via a business
                      presentation with the target as amateur weekend autocross drivers.
                    </p>
                  </div>
                  <div className="column-3">
                    <img src="/images/general/cars/sae.png" className="saeimg" />

                  </div>
                </div>


              </div>
            </section>
            <section className="gvisva-section ">
              <div className="grid-container-fluid margin-bottom-10">
                <div className="grid-row  ">
                  <div className="column-2 text-center">
                    <div>&nbsp;</div>
                    <img src="images/chancellor.png"
                      className="vish img-circle chancellor-img img-responsive hidden-small valign-m text-center" />
                  </div>
                  <div className="column-10">

                    <div className="text-left-imp"><i className="fa fa-quote-left " ></i></div>
                    <div className="text-left-imp" >
                      <p>
                        I am happy and proud to inform you that Pravega Racing is the official Formula SAE
                        (FSAE) team of VIT University. The team comprises of a group of able and resolute
                        students of our institution from all academic divisions aiming for excellence. Pravega
                        Racing is among the top three Formula SAE teams of India.</p>
                    </div>
                    <div className="text-right"><i className="fa fa-quote-right " ></i></div>

                    <p className="about-gv-p text-left-imp"><b>
                      Dr. G Vishwanathan
                      <br />Founder and Chancellor, VIT University
                      <br />Former Member of Parliament
                      <br />Former Minister, Govt. of Tamil Nadu
                      <br />President, Education Promotion Society of India, New Delhi
                    </b></p>
                  </div>
                </div>
              </div>
            </section>

            {/* End of sections */}
            <a href="#" className="back-to-top--floating"><i className="ion-ios-arrow-up"></i></a>
          </main>
          <section style={{ color: 'black', width: '80%', margin: 'auto' }}>
            <div className="text-align-left text-bold text-3xl">Recent Activities</div>
            <div className="imageThing justify-center mt-4 mb-6" style={{ marginLeft: '8%' }}>
              <div className="itemRecentAct"><a href="/events"><img src="images/general/media/fsb21/1.png" style={{ width: 'fit-content', height: '100%' }} className="image"></img></a>
                <div className="textContentImage">
                  <div className="innerText">Formula Bharat 2021</div>
                </div>  </div>
              <div className="itemRecentAct"><a href="/events"><img src="images/general/media/fsO20/1.jpg" style={{ width: '100%', height: '100%' }} className="image"></img></a>
                <div className="textContentImage">
                  <div className="innerText">Formula Student Online 2020</div>
                </div>  </div>
              <div className="itemRecentAct"><a href="/events"><img src="images/general/media/fsg19/11.jpg" style={{ width: 'fit-content', height: 'fit-content' }} className="image"></img></a>
                <div className="textContentImage">
                  <div className="innerText">Formula Student Germany 2019</div>
                </div>  </div>
            </div>

          </section>
        </div>
      </div>



      <a href="#" className="back-to-top--floating"><i className="ion-ios-arrow-up"></i></a>
    </>
  );
};