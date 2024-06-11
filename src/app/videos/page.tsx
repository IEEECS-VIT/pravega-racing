'use client'
import Slider from '@/components/Slider';
import { useRef } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect } from 'react';
import HomePage from './page';
import Nav from '@/components/nav';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import '/src/styles/slider1.css';
import '/src/styles/slider2.css';
import '/src/styles/font-awesome.css';
import '/src/styles/indexpage.css';
import '/src/styles/styles.css';
import 'font-awesome/css/font-awesome.min.css'
import SlideshowBackground from '@/components/Slideshow';
import React from 'react';
import Footer from '@/components/footer';
export default function Cars() {

  const [swiper, setSwiper] = React.useState<any>(); // Add type assertion 'any' to swiper
  const prevRef = React.useRef();
  const nextRef = React.useRef();

  React.useEffect(() => {
    if (swiper) {
      console.log("Swiper instance:", swiper);
      (swiper as any).params.navigation.prevEl = prevRef.current; // Add type assertion 'any' to swiper
      (swiper as any).params.navigation.nextEl = nextRef.current; // Add type assertion 'any' to swiper
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);



  return (
    <>
      <Nav />
      <SlideshowBackground />
      <div style={{ marginTop: '15%', marginLeft: '45%', fontSize: '50px', color: 'white', position: 'absolute' }}>
        Cars
      </div>
      <div className="main-ka-baap" style={{ margin: 'auto', textAlign: 'center', marginTop: '500px' }}>
        <h1 style={{ marginTop: '50px', fontSize: '50px' }}>Video </h1>
        <h1 style={{ marginTop: '50px', fontSize: '50px' }}>Sponsor Support </h1>
        <iframe width="660" height="372" src="https://www.youtube.com/embed/l3OT-2vwQII" style={{ margin: 'auto' }} title="Pravega Racing - Sponsor Support" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
        <h1 style={{ marginTop: '50px', fontSize: '50px' }}>Pravega Racing Fundrace </h1>
        <iframe width="660" height="372" src="https://www.youtube.com/embed/l3OT-2vwQII" style={{ margin: 'auto' }} title="Pravega Racing - Sponsor Support" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
        <h1 style={{ marginTop: '50px', fontSize: '50px' }}>PRV19: Rollout Rev' </h1>
        <iframe width="660" height="372" src="https://www.youtube.com/embed/l3OT-2vwQII" style={{ margin: 'auto' }} title="Pravega Racing - Sponsor Support" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
        <h1 style={{ marginTop: '50px', fontSize: '50px' }}>PRV19: The Grand Rollout </h1>
        <iframe width="660" height="372" src="https://www.youtube.com/embed/l3OT-2vwQII" style={{ margin: 'auto' }} title="Pravega Racing - Sponsor Support" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
        <h1 style={{ marginTop: '50px', fontSize: '50px' }}>PRV18: The Grand Rollout </h1>
        <iframe width="660" height="372" src="https://www.youtube.com/embed/l3OT-2vwQII" style={{ margin: 'auto' }} title="Pravega Racing - Sponsor Support" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
        <h1 style={{ marginTop: '50px', fontSize: '50px' }}>I am Pravega </h1>
        <iframe width="660" height="372" src="https://www.youtube.com/embed/l3OT-2vwQII" style={{ margin: 'auto' }} title="Pravega Racing - Sponsor Support" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
        <h1 style={{ marginTop: '50px', fontSize: '50px' }}>Journey 2016 </h1>
        <iframe width="660" height="372" src="https://www.youtube.com/embed/l3OT-2vwQII" style={{ margin: 'auto' }} title="Pravega Racing - Sponsor Support" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
      </div >
      <Footer />
    </>
  );
}