'use client';

import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '/src/styles/slider1.css';
import '/src/styles/slider2.css';
import '/src/styles/font-awesome.css';
import '/src/styles/indexpage.css';
import '/src/styles/styles.css';
import 'font-awesome/css/font-awesome.min.css';

import SlideshowBackground from '@/components/Slideshow';
export default function Cars() {
  const [swiper, setSwiper] = React.useState<any>(); // Add type assertion 'any' to swiper
  const prevRef = React.useRef();
  const nextRef = React.useRef();

  React.useEffect(() => {
    if (swiper) {
      console.log('Swiper instance:', swiper);
      (swiper as any).params.navigation.prevEl = prevRef.current; // Add type assertion 'any' to swiper
      (swiper as any).params.navigation.nextEl = nextRef.current; // Add type assertion 'any' to swiper
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <>
      <SlideshowBackground />
      <div className='carsTitle'>Cars</div>
      <div
        className='main-ka-baap videos'
        style={{ margin: 'auto', textAlign: 'center', marginTop: '500px' }}
      >
        <h1 style={{ marginTop: '50px' }}>Video </h1>
        <h1 style={{ marginTop: '50px' }}>Sponsor Support </h1>
        <iframe
          src='https://www.youtube.com/embed/l3OT-2vwQII'
          style={{ margin: 'auto' }}
          title='Pravega Racing - Sponsor Support'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        ></iframe>
        <h1 style={{ marginTop: '50px' }}>Pravega Racing Fundrace </h1>
        <iframe
          src='https://www.youtube.com/embed/7zemGO2Q7ek'
          style={{ margin: 'auto' }}
          title='Pravega Racing - Sponsor Support'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        ></iframe>
        <h1 style={{ marginTop: '50px' }}>PRV19: Rollout Rev' </h1>
        <iframe
          src='https://www.youtube.com/embed/82zZM8RW89k'
          style={{ margin: 'auto' }}
          title='Pravega Racing - Sponsor Support'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        ></iframe>
        <h1 style={{ marginTop: '50px' }}>PRV19: The Grand Rollout </h1>
        <iframe
          src='https://www.youtube.com/embed/bEoa3Q4RmKc'
          style={{ margin: 'auto' }}
          title='Pravega Racing - Sponsor Support'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        ></iframe>
        <h1 style={{ marginTop: '50px' }}>PRV18: The Grand Rollout </h1>
        <iframe
          src='https://www.youtube.com/embed/BrUIfWADdgo'
          style={{ margin: 'auto' }}
          title='Pravega Racing - Sponsor Support'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        ></iframe>
        <h1 style={{ marginTop: '50px' }}>I am Pravega </h1>
        <iframe
          src='https://www.youtube.com/embed/k-nV3hSLjXA'
          style={{ margin: 'auto' }}
          title='Pravega Racing - Sponsor Support'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        ></iframe>
        <h1 style={{ marginTop: '50px' }}>Journey 2016 </h1>
        <iframe
          src='https://www.youtube.com/embed/NCxfsVK4cNs'
          style={{ margin: 'auto' }}
          title='Pravega Racing - Sponsor Support'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        ></iframe>
        <h1 style={{ marginTop: '50px' }}>Season Video 2015-16 </h1>
        <iframe
          src='https://www.youtube.com/embed/rioU2CtJQhs'
          style={{ margin: 'auto' }}
          title='Pravega Racing - Sponsor Support'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        ></iframe>
      </div>
    </>
  );
}
