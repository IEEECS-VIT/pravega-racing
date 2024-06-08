'use client'

import React, {  } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import './page.css';

import Footer from '@/components/footer';
import Nav from '@/components/nav';

const EventsPage: React.FC = () => {
  const [showText, setShowText] = React.useState(false);
  const [showText1, setShowText1] = React.useState(false);
  const [showText3, setShowText3] = React.useState(false);
  const [showText4, setShowText4] = React.useState(false);
  const [showText5, setShowText5] = React.useState(false);
  const [showText6, setShowText6] = React.useState(false);
  const [showText7, setShowText7] = React.useState(false);
  const [showText8, setShowText8] = React.useState(false);
  const [showText9, setShowText9] = React.useState(false);
  const [showText10, setShowText10] = React.useState(false);
  const [showText11, setShowText11] = React.useState(false);
  const [showText12, setShowText12] = React.useState(false);
  const [showText13, setShowText13] = React.useState(false);
  const [showText14, setShowText14] = React.useState(false);
  const [showText15, setShowText15] = React.useState(false);
  const [showText16, setShowText16] = React.useState(false);
  const [showText17, setShowText17] = React.useState(false);
  
  


  return (
    <div style={{ backgroundImage: 'url(/images/event_2edited.jpg)', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
      <div>
        <Nav />
      </div>
      
      <div className="vtop">
        <p className='text-4xl'>EVENTS</p>
        </div>
 {/* <div style={{ marginTop: '100px' }}>    */}
<VerticalTimeline >
  <VerticalTimelineElement
  
  style={{ marginTop: '50px' }}
    className="vertical-timeline-element--work   "
    contentStyle={{ color: '#000', opacity: '0.7', borderRadius: '15px' ,}}
    iconStyle={{ background: 'rgb(6,49,119)', color: '#fff' }}
    iconClassName="text-center text-2xl font-bold text-white"
    icon={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>23'</div>}
    contentArrowStyle={{ borderRight: '7px solid  rgb(300,300,300)' }} 
  >
    <h3 className="vertical-timeline-element-title text-3xl text-gray-700">FS East 2023</h3>
    <br/>
    <h6 className="font-bold text-gray-700">PRV 23 - The only Indian team to score a podium in this competition.</h6>
    
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-3 rounded mt-3 opacity-1  !important"
        onClick={() => setShowText(!showText)}
      >
        {showText ? 'Read Less' : 'Read More'}

      </button>
      {showText && <p>
        <div className="show_on_more text-gray-500">
              <ul>
                <li>2<sup>nd</sup> in Business Presentation Event </li>
                <li>19<sup>th</sup> in Design Event </li>
                <li>12<sup>th</sup> in Cost Event </li>
                <li>12<sup>th</sup> in Static Event </li>
                <li>12<sup>th</sup> overall </li>
              </ul>
            </div>
      </p>}
      </VerticalTimelineElement>


  <VerticalTimelineElement
  className="vertical-timeline-element--work   "
  contentStyle={{ color: '#000', opacity: '0.7', borderRadius: '15px' ,}}
  iconStyle={{ background: 'rgb(6,49,119)', color: '#fff' }}
  iconClassName="text-center text-2xl font-bold text-white"
  icon={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>23'</div>}
  contentArrowStyle={{ borderRight: '7px solid  rgb(300,300,300)' }} 
  >
   <h3 className="vertical-timeline-element-title text-3xl text-gray-700">FS Germany 2023</h3>
    <br/>
    <h6 className="font-bold text-gray-700">PRV 23 – The fastest Indian Team in the competition.</h6>
    
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-3 rounded mt-3 opacity-1  !important"
        onClick={() => setShowText1(!showText1)}
      >
        {showText1 ? 'Read Less' : 'Read More'}

      </button>
      {showText1 && <p>
        <div className="show_on_more text-gray-500">
              <ul>
                <li>8<sup>th</sup> in Cost Event </li>
                <li>9<sup>th</sup> in Design Event </li>
                <li>10<sup>th</sup> in Business Presentation Event </li>
                <li>18<sup>th</sup> overall </li>
              </ul>
            </div>
      </p>}
  </VerticalTimelineElement>


  <VerticalTimelineElement
  className="vertical-timeline-element--work   "
  contentStyle={{ color: '#000', opacity: '0.7', borderRadius: '15px' ,}}
  iconStyle={{ background: 'rgb(6,49,119)', color: '#fff' }}
  iconClassName="text-center text-2xl font-bold text-white"
  icon={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>23'</div>}
  contentArrowStyle={{ borderRight: '7px solid  rgb(300,300,300)' }} 
  >
   <h3 className="vertical-timeline-element-title text-3xl text-gray-700">Formula Bharat 2023</h3>
    <br/>
    <h6 className="font-bold text-gray-700">PRV 23 - Kicking off the 2023 season with a strong return for the team by qualifying for all the finals of the static events.</h6>
    
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-3 rounded mt-3 opacity-1  !important"
        onClick={() => setShowText3(!showText3)}
      >
        {showText3 ? 'Read Less' : 'Read More'}

      </button>
      {showText3 && <p>
        <div className="show_on_more text-gray-500">
        <ul>
                <li>1<sup>st</sup> in Business Presentation Event </li>
                <li>4<sup>th</sup> in Cost Event </li>
                <li>5<sup>th</sup> in Design Event </li>
                <li>2<sup>nd</sup> in Static Event </li>
                <li>7<sup>th</sup> overall </li>
              </ul>
            </div>
      </p>}
  </VerticalTimelineElement>


  <VerticalTimelineElement
  className="vertical-timeline-element--work   "
  contentStyle={{ color: '#000', opacity: '0.7', borderRadius: '15px' ,}}
  iconStyle={{ background: 'rgb(6,49,119)', color: '#fff' }}
  iconClassName="text-center text-2xl font-bold text-white"
  icon={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>21'</div>}
  contentArrowStyle={{ borderRight: '7px solid  rgb(300,300,300)' }} 
  >
   <h3 className="vertical-timeline-element-title text-3xl text-gray-700">Formula Student Online 2021</h3>
    <br/>
    <h6 className="font-bold text-gray-700">PRV21 - The highest overall finish by an Indian team in an International event. A second podium in BPP event and a first podium in Dynamic Event propelled the team to receive an Invitation to Formula Student East.</h6>
    
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-3 rounded mt-3 opacity-1  !important"
        onClick={() => setShowText4(!showText4)}
      >
        {showText4 ? 'Read Less' : 'Read More'}

      </button>
      {showText4 && <p>
        <div className="show_on_more text-gray-500">
        <ul>
        <li>2<sup>nd</sup> in Business Presentation Event </li>
                <li>3<sup>rd</sup> in Dynamic Event </li>
                <li>4<sup>th</sup> in Design Event </li>
                <li>3<sup>rd</sup> Overall </li>
              </ul>
            </div>
      </p>}
  </VerticalTimelineElement>


  <VerticalTimelineElement
  className="vertical-timeline-element--work   "
  contentStyle={{ color: '#000', opacity: '0.7', borderRadius: '15px' ,}}
  iconStyle={{ background: 'rgb(6,49,119)', color: '#fff' }}
  iconClassName="text-center text-2xl font-bold text-white"
  icon={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>21'</div>}
  contentArrowStyle={{ borderRight: '7px solid  rgb(300,300,300)' }} 
  >
   <h3 className="vertical-timeline-element-title text-3xl text-gray-700">FSEV 2021</h3>
    <br/>
    <h6 className="font-bold text-gray-700">PRV21 - The team’s first attempt at FSEV gave them a top 10 finish competing against the top EV teams in the world. This also helped in gaining the team confidence for a smooth possible transition towards EV.</h6>
    
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-3 rounded mt-3 opacity-1  !important"
        onClick={() => setShowText5(!showText5)}
      >
        {showText5 ? 'Read Less' : 'Read More'}

      </button>
      {showText5 && <p>
        <div className="show_on_more text-gray-500">
        <ul>
        <li>6<sup>th</sup> in Engineering Design Event </li>
                <li>7<sup>th</sup> Procurement Report </li>
                <li>8<sup>rd</sup> in FMEA Event </li>
                <li>10<sup>th</sup> overall </li>
              </ul>
            </div>
      </p>}
  </VerticalTimelineElement>


  <VerticalTimelineElement
  className="vertical-timeline-element--work   "
  contentStyle={{ color: '#000', opacity: '0.7', borderRadius: '15px' ,}}
  iconStyle={{ background: 'rgb(6,49,119)', color: '#fff' }}
  iconClassName="text-center text-2xl font-bold text-white"
  icon={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>21'</div>}
  contentArrowStyle={{ borderRight: '7px solid  rgb(300,300,300)' }} 
  >
   <h3 className="vertical-timeline-element-title text-3xl text-gray-700">Formula Bharat 2021</h3>
    <br/>
    <h6 className="font-bold text-gray-700">PRV21 - A podium comeback at Formula Bharat 21 Virtual Event. Given the pandemic, the team collaborated smoothly while still aiming for excellence notwithstanding the challenges of working remotely for the first time.</h6>
    
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-3 rounded mt-3 opacity-1  !important"
        onClick={() => setShowText6(!showText6)}
      >
        {showText6 ? 'Read Less' : 'Read More'}

      </button>
      {showText6 && <p>
        <div className="show_on_more text-gray-500">
        <ul>
        <li>6<sup>th</sup> in Engineering Design Event </li>
        <li>1<sup>st</sup> in Business Plan Presentation </li>
                <li>4<sup>th</sup> in Engineering Design Concept </li>
                <li>3<sup>rd</sup> overall </li>
              </ul>
            </div>
      </p>}
  </VerticalTimelineElement>



  <VerticalTimelineElement
  className="vertical-timeline-element--work   "
  contentStyle={{ color: '#000', opacity: '0.7', borderRadius: '15px' ,}}
  iconStyle={{ background: 'rgb(6,49,119)', color: '#fff' }}
  iconClassName="text-center text-2xl font-bold text-white"
  icon={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>20'</div>}
  contentArrowStyle={{ borderRight: '7px solid  rgb(300,300,300)' }} 
  >
   <h3 className="vertical-timeline-element-title text-3xl text-gray-700">Formula Student Online 2020</h3>
    <br/>
    <h6 className="font-bold text-gray-700">PRV 20 - The only Indian team to participate in the virtual event. Our highest ever overall finish and first podium in the BPP at an international event.</h6>
    
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-3 rounded mt-3 opacity-1  !important"
        onClick={() => setShowText7(!showText7)}
      >
        {showText7? 'Read Less' : 'Read More'}

      </button>
      {showText7 && <p>
        <div className="show_on_more text-gray-500">
        <ul>
        <li>3<sup>rd</sup> in Business Plan Presentation </li>
                <li>6<sup>th</sup> in Dynamic Event </li>
                <li>7<sup>th</sup> in AutoCross Event </li>
                <li>11<sup>th</sup> overall </li>
              </ul>
            </div>
      </p>}
  </VerticalTimelineElement >
  
  <VerticalTimelineElement 
  className="vertical-timeline-element--work   "
  contentStyle={{ color: '#000', opacity: '0.7', borderRadius: '15px' ,}}
  iconStyle={{ background: 'rgb(6,49,119)', color: '#fff' }}
  iconClassName="text-center text-2xl font-bold text-white"
  icon={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>19'</div>}
  contentArrowStyle={{ borderRight: '7px solid  rgb(300,300,300)' }} 
  >
   <h3 className="vertical-timeline-element-title text-3xl text-gray-700">FS Germany 2019</h3>
    <br/>
    <h6 className="font-bold text-gray-700">PRV 19-Highest ever points scored by an Indian team at the Engineering Design event at Formula Student Germany and the first ever team to win the D-BASF best use of 3D printing award at the event.</h6>
    
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-3 rounded mt-3 opacity-1  !important"
        onClick={() => setShowText8(!showText8)}
      >
        {showText8? 'Read Less' : 'Read More'}

      </button>
      {showText8 && <p>
        <div className="show_on_more text-gray-500">
        <ul>
        <li>D-BASF best use of 3D printing award winners</li>
                <li>15<sup>th</sup> in Engineering design </li>
                <li>15<sup>th</sup> in Business presentation </li>
                <li>43<sup>rd</sup> overall </li>
              </ul>
            </div>
      </p>}
  </VerticalTimelineElement>

  <VerticalTimelineElement 
  className="vertical-timeline-element--work   "
  contentStyle={{ color: '#000', opacity: '0.7', borderRadius: '15px' ,}}
  iconStyle={{ background: 'rgb(6,49,119)', color: '#fff' }}
  iconClassName="text-center text-2xl font-bold text-white"
  icon={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>18'</div>}
  contentArrowStyle={{ borderRight: '7px solid  rgb(300,300,300)' }} 
  >
   <h3 className="vertical-timeline-element-title text-3xl text-gray-700">Formula SAE-A 2018</h3>
    <br/>
    <h6 className="font-bold text-gray-700">PRV 18 - Highest ever points scored by an Indian team
    at the Engineering Design event.</h6>
    
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-3 rounded mt-3 opacity-1  !important"
        onClick={() => setShowText9(!showText9)}
      >
        {showText9? 'Read Less' : 'Read More'}

      </button>
      {showText9 && <p>
        <div className="show_on_more text-gray-500">
        <ul>
        <li>FSAE-A encouragement award</li>
                <li>4<sup>th</sup> in Engineering design </li>
                <li>9<sup>th</sup> in acceleration </li>
                <li>14<sup>th</sup> overall </li>
              </ul>
            </div>
      </p>}
  </VerticalTimelineElement>

  <VerticalTimelineElement 
  className="vertical-timeline-element--work   "
  contentStyle={{ color: '#000', opacity: '0.7', borderRadius: '15px' ,}}
  iconStyle={{ background: 'rgb(6,49,119)', color: '#fff' }}
  iconClassName="text-center text-2xl font-bold text-white"
  icon={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>17'</div>}
  contentArrowStyle={{ borderRight: '7px solid  rgb(300,300,300)' }} 
  >
   <h3 className="vertical-timeline-element-title text-3xl text-gray-700">FS Germany 2017</h3>
    <br/>
    <h6 className="font-bold text-gray-700">PRV 18 - Highest ever points scored by an Indian team
    at the Engineering Design event.</h6>
    
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-3 rounded mt-3 opacity-1  !important"
        onClick={() => setShowText10(!showText10)}
      >
        {showText10? 'Read Less' : 'Read More'}

      </button>
      {showText10 && <p>
        <div className="show_on_more text-gray-500">
        <ul>
        <li>18<sup>th</sup> in Business Presentation Event</li>
                <li>20<sup>th</sup> in Cost Report </li>
              </ul>
            </div>
      </p>}
  </VerticalTimelineElement>

  <VerticalTimelineElement 
  className="vertical-timeline-element--work   "
  contentStyle={{ color: '#000', opacity: '0.7', borderRadius: '15px' ,}}
  iconStyle={{ background: 'rgb(6,49,119)', color: '#fff' }}
  iconClassName="text-center text-2xl font-bold text-white"
  icon={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>17'</div>}
  contentArrowStyle={{ borderRight: '7px solid  rgb(300,300,300)' }} 
  >
   <h3 className="vertical-timeline-element-title text-3xl text-gray-700">Formula Bharat 2017</h3>
    <br/>
    <h6 className="font-bold text-gray-700">PRV 16 - Car that raced to be the best in India.

</h6>
    
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-3 rounded mt-3 opacity-1  !important"
        onClick={() => setShowText11(!showText11)}
      >
        {showText11? 'Read Less' : 'Read More'}

      </button>
      {showText11 && <p>
        <div className="show_on_more text-gray-500">
        <ul>
        <li>1<sup>st</sup> overall</li>
                <li>1<sup>st</sup> in Autocross</li>
                <li>1<sup>st</sup> in Acceleration</li>
                <li>1<sup>st</sup> in Cost Event</li>
                <li>1<sup>st</sup> in Business Presentation Event</li>
                <li>2<sup>nd</sup> in Skidpad</li>
                <li>2<sup>nd</sup> in Endurance</li>
                <li>Special Award for Spirit of FSI</li>
                <li>Best Driver Award</li>

              </ul>
            </div>
      </p>}
  </VerticalTimelineElement>

  <VerticalTimelineElement 
  className="vertical-timeline-element--work   "
  contentStyle={{ color: '#000', opacity: '0.7', borderRadius: '15px' ,}}
  iconStyle={{ background: 'rgb(6,49,119)', color: '#fff' }}
  iconClassName="text-center text-2xl font-bold text-white"
  icon={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>16'</div>}
  contentArrowStyle={{ borderRight: '7px solid  rgb(300,300,300)' }} 
  >
   <h3 className="vertical-timeline-element-title text-3xl text-gray-700">Formula Student Germany 2016</h3>
    <br/>
    <h6 className="font-bold text-gray-700">PRV 16 was the fastest among all Indian teams.
</h6>
    
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-3 rounded mt-3 opacity-1  !important"
        onClick={() => setShowText12(!showText12)}
      >
        {showText12? 'Read Less' : 'Read More'}

      </button>
      {showText12 && <p>
        <div className="show_on_more text-gray-500">
        <ul>
        <li>13<sup>th</sup> in Business Presentation Event</li>
                <li>39<sup>th</sup> in Design Event</li>
                <li>40<sup>th</sup> in Cost Event</li>
                <li>37<sup>th</sup> in Acceleration Event(<i>4.65 seconds</i>)</li>
                <li>41<sup>th</sup> in Skidpad Event(<i>6.39 seconds</i>)</li>
                <li>53<sup>th</sup> in AutoCross Event(<i>87.88 seconds</i>)</li>
              </ul>
            </div>
      </p>}
  </VerticalTimelineElement>

  <VerticalTimelineElement 
  className="vertical-timeline-element--work   "
  contentStyle={{ color: '#000', opacity: '0.7', borderRadius: '15px' ,}}
  iconStyle={{ background: 'rgb(6,49,119)', color: '#fff' }}
  iconClassName="text-center text-2xl font-bold text-white"
  icon={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>16'</div>}
  contentArrowStyle={{ borderRight: '7px solid  rgb(300,300,300)' }} 
  >
   <h3 className="vertical-timeline-element-title text-3xl text-gray-700">Formula Student India 2016</h3>
    <br/>
    <h6 className="font-bold text-gray-700">Won 7/11 Trophies
</h6>
    
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-3 rounded mt-3 opacity-1  !important"
        onClick={() => setShowText13(!showText13)}
      >
        {showText13? 'Read Less' : 'Read More'}

      </button>
      {showText13 && <p>
        <div className="show_on_more text-gray-500">
        <ul>
        <li>1<sup>st</sup> in Acceleration Event</li>
                <li>1<sup>st</sup> in Skidpad Event</li>
                <li>1<sup>st</sup> in Business Presentation Event</li>
                <li>3<sup>rd</sup> in Engineering Design Event</li>
                <li>3<sup>rd</sup> in Cost &amp; Manufacturing Event</li>
                <li>Special Awards for <i>Spirit of FSI</i> and <i>Cleanest Pit</i></li>
              </ul>
            </div>
      </p>}
  </VerticalTimelineElement>

  <VerticalTimelineElement 
  className="vertical-timeline-element--work   "
  contentStyle={{ color: '#000', opacity: '0.7', borderRadius: '15px' ,}}
  iconStyle={{ background: 'rgb(6,49,119)', color: '#fff' }}
  iconClassName="text-center text-2xl font-bold text-white"
  icon={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>15'</div>}
  contentArrowStyle={{ borderRight: '7px solid  rgb(300,300,300)' }} 
  >
   <h3 className="vertical-timeline-element-title text-3xl text-gray-700">Formula Student Germany 2015</h3>
    <br/>
    <h6 className="font-bold text-gray-700">This was the best statics result by any Indian team in Formula Student Germany history
</h6>
    
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-3 rounded mt-3 opacity-1  !important"
        onClick={() => setShowText14(!showText14)}
      >
        {showText14? 'Read Less' : 'Read More'}

      </button>
      {showText14 && <p>
        <div className="show_on_more text-gray-500">
        <ul>
        <li>8<sup>th</sup> in Cost &amp; Manufacturing Event</li>
                <li>10<sup>th</sup> in Business Presentation Event</li>
                <li>21<sup>st</sup> in Engineering Design Event</li>
              </ul>
            </div>
      </p>}
  </VerticalTimelineElement>

  <VerticalTimelineElement 
  className="vertical-timeline-element--work   "
  contentStyle={{ color: '#000', opacity: '0.7', borderRadius: '15px' ,}}
  iconStyle={{ background: 'rgb(6,49,119)', color: '#fff' }}
  iconClassName="text-center text-2xl font-bold text-white"
  icon={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>15'</div>}
  contentArrowStyle={{ borderRight: '7px solid  rgb(300,300,300)' }} 
  >
   <h3 className="vertical-timeline-element-title text-3xl text-gray-700">JK Tyre Formula Design Challenge 2015</h3>
    <br/>
    <h6 className="font-bold text-gray-700">We set the national record of completing the autocross lap in 1 minute 23 seconds which is still un-beaten
</h6>
    
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-3 rounded mt-3 opacity-1  !important"
        onClick={() => setShowText15(!showText15)}
      >
        {showText15? 'Read Less' : 'Read More'}

      </button>
      {showText15 && <p>
        <div className="show_on_more text-gray-500">
        <ul>
        <li>3<sup>rd</sup> overall</li>
                <li>2<sup>nd</sup> in Engineering Design Event</li>
                <li>2<sup>nd</sup> in AutoCross Event</li>
                <li>3<sup>rd</sup> in Business Presentation Event</li>
                <li>3<sup>rd</sup> in Cost &amp; Manufacturing Event</li>
                <li>3<sup>rd</sup> in Skipad Event</li>
              </ul>
            </div>
      </p>}
  </VerticalTimelineElement>


  <VerticalTimelineElement 
  className="vertical-timeline-element--work   "
  contentStyle={{ color: '#000', opacity: '0.7', borderRadius: '15px' ,}}
  iconStyle={{ background: 'rgb(6,49,119)', color: '#fff' }}
  iconClassName="text-center text-2xl font-bold text-white"
  icon={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>14'</div>}
  contentArrowStyle={{ borderRight: '7px solid  rgb(300,300,300)' }} 
  >
   <h3 className="vertical-timeline-element-title text-3xl text-gray-700">Formula Student Germany 2014</h3>
    <br/>
    <h6 className="font-bold text-gray-700">We were the Only Indian team to complete the entire Technical Inspection and compete in all the Dynamic Events
</h6>
    
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-3 rounded mt-3 opacity-1  !important"
        onClick={() => setShowText16(!showText16)}
      >
        {showText16? 'Read Less' : 'Read More'}

      </button>
      {showText16 && <p>
        <div className="show_on_more text-gray-500">
        In 2014 we decided to move to Formula Student Germany as it is considered the biggest
                event in the Formula Student Circuit. Our first experience at the biggest stage was a
                valuable one and we learned a lot of new things from the top teams in the world. We had
                a great result here as we were the Only Indian team to complete the entire Technical
                Inspection and compete in all the Dynamic Events.
            </div>
      </p>}
  </VerticalTimelineElement>

  <VerticalTimelineElement 
  className="vertical-timeline-element--work   "
  contentStyle={{ color: '#000', opacity: '0.7', borderRadius: '15px' ,}}
  iconStyle={{ background: 'rgb(6,49,119)', color: '#fff' }}
  iconClassName="text-center text-2xl font-bold text-white"
  icon={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>13'</div>}
  contentArrowStyle={{ borderRight: '7px solid  rgb(300,300,300)' }} 
  >
   <h3 className="vertical-timeline-element-title text-3xl text-gray-700">Formula Student Italy 2013</h3>
    <br/>
    <h6 className="font-bold text-gray-700">Overall 20th position in the world out of the 45 competing teams
</h6>
    
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-3 rounded mt-3 opacity-1  !important"
        onClick={() => setShowText17(!showText17)}
      >
        {showText17? 'Read Less' : 'Read More'}

      </button>
      {showText17 && <p>
        <div className="show_on_more text-gray-500">
        <ul>
                <li>2<sup>nd</sup> position in the cost event</li>
                <li>11<sup>th</sup> in Business Plan Event</li>
                <li>19<sup>th</sup> in Design Event</li>
              </ul>
            </div>
      </p>}
  </VerticalTimelineElement>

</VerticalTimeline>


        
  <Footer /> 
      
    </div>
  
  );
};

export default EventsPage;
