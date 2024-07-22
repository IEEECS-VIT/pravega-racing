'use client'

import React, { useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './page.css';
// import Footer from '@/components/footer';
import Nav from '@/components/nav';
import eventData from '@/constant/eventsData.json';

interface ShowTextState {
  [key: string]: boolean;
}

interface Event {
  id: string;
  title: string;
  subtitle: string;
  iconText: string;
  description: string;
  details: string[];
}

const EventsPage: React.FC = () => {
  const [showText, setShowText] = useState<ShowTextState>({});

  const toggleShowText = (id: string) => {
    setShowText((prevShowText) => ({
      ...prevShowText,
      [id]: !prevShowText[id],
    }));
  };

  const commonIconStyle = {
    background: "rgb(6,49,119)",
    color: "#fff",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  };

  const commonContentStyle = {
    color: "#000",
    opacity: "0.7",
    borderRadius: "15px"
  };

  const commonIconClassName = "text-center text-2xl font-bold text-white";

  return (
    <div
      style={{
        backgroundImage: 'url(/images/event_2edited.jpg)',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <Nav />
      <div className='vtop'>
        <p className='text-4xl'>EVENTS</p>
      </div>
      <VerticalTimeline>
        {eventData.map((event: Event) => (
          <VerticalTimelineElement
            key={event.id}
            style={{ marginTop: '50px' }}
            className='vertical-timeline-element--work'
            contentStyle={commonContentStyle}
            iconStyle={commonIconStyle}
            iconClassName={commonIconClassName}
            icon={<div>{event.iconText}</div>}
            contentArrowStyle={{ borderRight: '7px solid  rgb(300,300,300)' }}
          >
            <h3 className='vertical-timeline-element-title text-3xl text-gray-600'>
              {event.title}
            </h3>
            <br />
            <h5 className='vertical-timeline-element-subtitle text-s font-bold text-gray-900'>
              {event.subtitle}
            </h5>
            <br />
            <h6 className='font-bold text-gray-700'>
              {event.description}
            </h6>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-3 rounded  opacity-1  !important'
              onClick={() => toggleShowText(event.id)}
            >
              {showText[event.id] ? 'Read Less' : 'Read More'}
            </button>
            {showText[event.id] && (
              <div className='show_on_more text-gray-500 mt-3'>
                <ul className='list-disc pl-5'>
                  {event.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      {/* <Footer /> */}
    </div>
  );
};

export default EventsPage;