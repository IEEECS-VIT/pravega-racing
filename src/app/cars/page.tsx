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
      <div className="main-ka-baap" style={{ marginTop: '500px' }}>
        <Swiper modules={[Scrollbar, Pagination, Navigation, A11y]}
          spaceBetween={50}
          slidesPerView={1}

          navigation={{
            prevEl: prevRef?.current,
            nextEl: nextRef?.current,
          }}
          pagination={{ clickable: true }}
          onSwiper={setSwiper}

          onSlideChange={() => console.log('slide change')} >
          <SwiperSlide>
            <div className="headingCar">
              <button ref={prevRef} className="custom-swiper-button-prev mx-6"><i className="fa fa-arrow fa-arrow-left"></i></button>
              PRV Delta Phoenix
              <button ref={nextRef} className="custom-swiper-button-next mx-6">a</button>
            </div>
            <div className="container mx-auto" style={{ height: '100%', display: 'flex', flexDirection: 'row', gap: '10px', width: '80%' }}>
              <div className="textContentCars">
                <b>Weight:</b> 320 kg<br />
                <b>Wheelbase:</b> 1580 mm<br />
                <b>Suspension:</b> Double unequal length A-arm with push rod actuated spring dampers<br />
                <b>Dampers:</b> Tanner<br />
                <b>Brakes type:</b> 4 outboard discs<br />
                <b>Chassis:</b> Steel space frame<br />
                <b>Wheels:</b> 13x7 Oz Racing Wheels<br />
                <b>Tires Dry:</b> Hoosier Racing Slicks<br />
                <b>Tires Wet:</b> JK Tyres<br />
                <b>Engine:</b> Honda CBR 600RR<br />
                <b>Displacement:</b> 600 cc<br />
              </div>
              <div style={{ width: '55%' }}>
                <img src="vrs/PRV_13/prv13 render_VR.207/0_0.jpg" style={{ height: '70%', width: '100%' }} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="headingCar">
              <button ref={prevRef} className="custom-swiper-button-prev mx-6"><i className="fa fa-arrow fa-arrow-left"></i></button>
              PRV 13
              <button ref={nextRef} className="custom-swiper-button-next mx-6"><i className="fa fa-arrow fa-arrow-right" ></i></button>
            </div>
            <div className="container mx-auto" style={{ height: '100%', display: 'flex', flexDirection: 'row', gap: '10px', width: '80%' }}>
              <div className="textContentCars">
                <b>Weight:</b> 283 kg<br />
                <b>Wheelbase:</b> 1600 mm<br />
                <b>Suspension:</b> Double unequal length A-arm with push rod actuated spring dampers<br />
                <b>Dampers:</b> Tanner<br />
                <b>Brakes type:</b> 4 outboard discs<br />
                <b>Chassis:</b> Steel space frame<br />
                <b>Wheels:</b> 13x7 Oz Racing Wheels<br />
                <b>Tires Dry:</b> Hoosier Racing Slicks<br />
                <b>Tires Wet:</b> Continental<br />
                <b>Engine:</b> Honda CBR 600RR<br />
                <b>Displacement:</b> 600 cc<br />
                <b>Transmission:</b> Sequential 6 speed shift Electronic shift button type open differential<br />
              </div>
              <div style={{ width: '55%' }}>
                <img src="images/2.jpg" style={{ height: '70%', width: '100%' }} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="headingCar">
              <button ref={prevRef} className="custom-swiper-button-prev mx-6"><i className="fa fa-arrow fa-arrow-left"></i></button>
              PRV 14
              <button ref={nextRef} className="custom-swiper-button-next mx-6"><i className="fa fa-arrow fa-arrow-right" ></i></button>
            </div>
            <div className="container mx-auto" style={{ height: '100%', display: 'flex', flexDirection: 'row', gap: '10px', width: '80%' }}>
              <div className="textContentCars">
                <b>Weight:</b> 265 kg<br />
                <b>Wheelbase:</b> 1600 mm<br />
                <b>Suspension:</b> Double unequal length A-arm with push rod actuated spring dampers<br />
                <b>Dampers:</b> Tanner<br />
                <b>Brakes type:</b> 4 outboard discs<br />
                <b>Chassis:</b> Steel space frame<br />
                <b>Wheels:</b> 13x7 Oz Racing Wheels<br />
                <b>Tires Dry:</b> Continental<br />
                <b>Tires Wet:</b> Continental<br />
                <b>Engine:</b> Honda CBR 600RR<br />
                <b>Displacement:</b> 600 cc<br />
                <b>Special Features:</b> Student built Pneumatic gear and clutch control unit and translogic dashboard. Twill layup Carbon fiber body and limited slip differential<br />
              </div>
              <div style={{ width: '55%' }}>
                <img src="images/2.jpg" style={{ height: '70%', width: '100%' }} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="headingCar">
              <button ref={prevRef} className="custom-swiper-button-prev mx-6"><i className="fa fa-arrow fa-arrow-left"></i></button>
              PRV 15
              <button ref={nextRef} className="custom-swiper-button-next mx-6"><i className="fa fa-arrow fa-arrow-right" ></i></button>
            </div>
            <div className="container mx-auto" style={{ height: '100%', display: 'flex', flexDirection: 'row', gap: '10px', width: '80%' }}>
              <div className="textContentCars">
                <b>Weight:</b> 235 kg<br />
                <b>Wheelbase:</b> 1564 mm<br />
                <b>Suspension:</b> Double unequal length A-arm with push rod actuated spring dampers<br />
                <b>Dampers:</b> Ohlins TTX 25 Mk II 4 Way adjustable<br />
                <b>Brakes type:</b> 4 outboard discs<br />
                <b>Chassis:</b> Steel space frame<br />
                <b>Wheels:</b> 13x7 Oz Racing Wheels<br />
                <b>Tires Dry:</b> Continental<br />
                <b>Tires Wet:</b> Continental<br />
                <b>Engine:</b> Honda CBR 600RR<br />
                <b>Displacement:</b> 600 cc<br />
                <b>Special Features:</b> In house developed Pneumatic gear and clutch control unit. Carbon epoxy composite body and Drexler limited slip differential<br />
              </div>
              <div style={{ width: '55%' }}>
                <img src="images/2.jpg" style={{ height: '70%', width: '100%' }} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="headingCar">
              <button ref={prevRef} className="custom-swiper-button-prev mx-6"><i className="fa fa-arrow fa-arrow-left"></i></button>
              PRV 16
              <button ref={nextRef} className="custom-swiper-button-next mx-6"><i className="fa fa-arrow fa-arrow-right" ></i></button>
            </div>
            <div className="container mx-auto" style={{ height: '100%', display: 'flex', flexDirection: 'row', gap: '10px', width: '80%' }}>
              <div className="textContentCars">
                <b>Weight:</b> 257 kg<br />
                <b>Wheelbase:</b> 1560 mm<br />
                <b>Suspension:</b> Double unequal length A-arm with push rod actuated spring dampers<br />
                <b>Dampers:</b> Ohlins TTX 25 Mk II 4 Way adjustable<br />
                <b>Brakes type:</b> 4 outboard discs<br />
                <b>Chassis:</b> Steel space frame<br />
                <b>Wheels:</b> Keizer 3 piece Aluminium rims, 7x10<br />
                <b>Tires Dry:</b> Hoosier 18x7.5-10, R25B<br />
                <b>Tires Wet:</b> Hoosier, WET<br />
                <b>Engine:</b> Honda CBR 600RR<br />
                <b>Lubrication System:</b> Dry Sump<br />
                <b>Aero Package:</b> Introduced Aero package including Front and Rear Wings<br />

              </div>
              <div style={{ width: '55%' }}>
                <img src="images/2.jpg" style={{ height: '70%', width: '100%' }} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="headingCar">
              <button ref={prevRef} className="custom-swiper-button-prev mx-6"><i className="fa fa-arrow fa-arrow-left"></i></button>
              PRV 17
              <button ref={nextRef} className="custom-swiper-button-next mx-6"><i className="fa fa-arrow fa-arrow-right" ></i></button>
            </div>
            <div className="container mx-auto" style={{ height: '100%', display: 'flex', flexDirection: 'row', gap: '10px', width: '80%' }}>
              <div className="textContentCars">
                <b>Weight:</b> 235 kg<br />
                <b>Wheelbase:</b> 1560 mm<br />
                <b>Suspension:</b> Front and rear double unequal length CFRP A-arm with push rod actuated spring dampers<br />
                <b>Dampers:</b> Ohlins TTX 25 Mk II 4 Way adjustable<br />
                <b>Brakes type:</b> Front ISR, Rear Wilwood calipers with custom rotors<br />
                <b>Chassis:</b> Chromoly space frame<br />
                <b>Wheels:</b> Keizer 2 piece Aluminium rims with custom CFRP wheel centre, 7x13<br />
                <b>Tires Dry:</b> Continental C16<br />
                <b>Tires Wet:</b> Continental, WET<br />
                <b>Engine:</b> Honda CBR 600RR<br />
                <b>Aero Package:</b> In-house Manufactured Aero package including Front and Rear Wings<br />
                <b>Data Acquisition:</b> On-Board Data Acquisition System by Autosport Labs<br />

              </div>
              <div style={{ width: '55%' }}>
                <img src="images/2.jpg" style={{ height: '70%', width: '100%' }} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="headingCar">
              <button ref={prevRef} className="custom-swiper-button-prev mx-6"><i className="fa fa-arrow fa-arrow-left"></i></button>
              PRV 18
              <button ref={nextRef} className="custom-swiper-button-next mx-6"><i className="fa fa-arrow fa-arrow-right" ></i></button>
            </div>
            <div className="container mx-auto" style={{ height: '100%', display: 'flex', flexDirection: 'row', gap: '10px', width: '80%' }}>
              <div className="textContentCars">
                <b>Weight:</b> 235 kg<br />
                <b>Wheelbase:</b> 1560 mm<br />
                <b>Suspension:</b> Front and rear double unequal length CFRP A-arm with push rod actuated spring dampers<br />
                <b>Dampers:</b> Ohlins TTX 25 Mk II 4 Way adjustable<br />
                <b>Brakes type:</b> Front ISR, Rear Custom calipers with custom rotors<br />
                <b>Chassis:</b> Chromoly space frame<br />
                <b>Wheels:</b> 3 piece custom CFRP wheel rims, 7x13<br />
                <b>Tires Dry:</b> Continental C16<br />
                <b>Tires Wet:</b> Continental, WET<br />
                <b>Engine:</b> Honda CBR 600RR<br />
                <b>Aero Package:</b> In-house Manufactured Aero package including Front and Rear Wings<br />
                <b>Data Acquisition:</b> On-Board Data Acquisition System by Autosport Labs<br />
                <b>Shifting System:</b> In-house developed pneumatic shifting system with paddle shifters<br />

              </div>
              <div style={{ width: '55%' }}>
                <img src="images/2.jpg" style={{ height: '70%', width: '100%' }} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="headingCar">
              <button ref={prevRef} className="custom-swiper-button-prev mx-6"><i className="fa fa-arrow fa-arrow-left"></i></button>
              PRV 19
              <button ref={nextRef} className="custom-swiper-button-next mx-6"><i className="fa fa-arrow fa-arrow-right" ></i></button>
            </div>
            <div className="container mx-auto" style={{ height: '100%', display: 'flex', flexDirection: 'row', gap: '10px', width: '80%' }}>
              <div className="textContentCars">
                <b>Weight:</b> 230 kg<br />
                <b>Wheelbase:</b> 1600 mm<br />
                <b>Suspension:</b> Front and rear double unequal length CFRP A-arm with push rod actuated spring dampers<br />
                <b>Dampers:</b> Ohlins TTX 25 Mk II 4 Way adjustable<br />
                <b>Brakes type:</b> Front and Rear Custom Calipers with Custom Rotors<br />
                <b>Chassis:</b> Chromoly space frame<br />
                <b>Wheels:</b> 3 piece custom CFRP wheel rims, 7x13<br />
                <b>Tires Dry:</b> Continental 205/470/R13<br />
                <b>Tires Wet:</b> Continental, WET<br />
                <b>Engine:</b> Honda CBR 600RR<br />
                <b>Aero Package:</b> In-house Manufactured Aero package including Front and Rear Wings<br />
                <b>Data Acquisition:</b> On-Board Data Acquisition System by Autosport Labs<br />
                <b>Shifting System:</b> In-house developed pneumatic shifting system with paddle shifters<br />

              </div>
              <div style={{ width: '55%' }}>
                <img src="images/2.jpg" style={{ height: '70%', width: '100%' }} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="headingCar">
              <button ref={prevRef} className="custom-swiper-button-prev mx-6"><i className="fa fa-arrow fa-arrow-left"></i></button>
              PRV 20
              <button ref={nextRef} className="custom-swiper-button-next mx-6"><i className="fa fa-arrow fa-arrow-right" ></i></button>
            </div>
            <div className="container mx-auto" style={{ height: '100%', display: 'flex', flexDirection: 'row', gap: '10px', width: '80%' }}>
              <div className="textContentCars">
                <b>Weight:</b> 180 kg<br />
                <b>Wheelbase:</b> 1550 mm<br />
                <b>Suspension:</b> Front and rear double unequal length CFRP A-arm with push rod actuated spring dampers<br />
                <b>Dampers:</b> Ohlins TTX 25 Mk II 4 Way adjustable<br />
                <b>Brakes type:</b> Front and Rear Custom Calipers with Custom Rotors<br />
                <b>Chassis:</b> Chromoly space frame<br />
                <b>Wheels:</b> 2 piece custom CFRP wheel rims, 7x10<br />
                <b>Tires Dry:</b> Hoosier 18x7.5-10 R25B<br />
                <b>Tires Wet:</b> Hoosier 18x6.0-10 R25B<br />
                <b>Engine:</b> KTM 390<br />
                <b>Aero Package:</b> In-house Manufactured Aero package including Front Wing, Rear Wing and Diffuser<br />
                <b>Data Acquisition:</b> On-Board Data Acquisition System by Autosport Labs<br />
                <b>Shifting System:</b> In-house developed pneumatic shifting system with paddle shifters<br />


              </div>
              <div style={{ width: '55%' }}>
                <img src="images/2.jpg" style={{ height: '70%', width: '100%' }} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="headingCar">
              <button ref={prevRef} className="custom-swiper-button-prev mx-6"><i className="fa fa-arrow fa-arrow-left"></i></button>
              PRV 21
              <button ref={nextRef} className="custom-swiper-button-next mx-6"><i className="fa fa-arrow fa-arrow-right" ></i></button>
            </div>
            <div className="container mx-auto" style={{ height: '100%', display: 'flex', flexDirection: 'row', gap: '10px', width: '80%' }}>
              <div className="textContentCars">
                <b>Weight:</b> 180 kg<br />
                <b>Wheelbase:</b> 1550 mm<br />
                <b>Suspension:</b> Front and rear double unequal length CFRP A-arm with push rod actuated spring dampers<br />
                <b>Dampers:</b> Ohlins TTX 25 Mk II 4 Way adjustable<br />
                <b>Brakes type:</b> Front and Rear Custom Calipers with Custom Rotors<br />
                <b>Chassis:</b> Chromoly space frame<br />
                <b>Wheels:</b> 2 piece custom CFRP wheel rims, 7x10<br />
                <b>Tires Dry:</b> Hoosier 18x7.5-10 R25B<br />
                <b>Tires Wet:</b> Hoosier 18x6.0-10 R25B<br />
                <b>Engine:</b> KTM 390<br />


              </div>
              <div style={{ width: '55%' }}>
                <iframe src="vrs/PRV_21/Ful Car_img1.html" style={{ height: '70%', width: '100%' }} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="headingCar">
              <button ref={prevRef} className="custom-swiper-button-prev mx-6"><i className="fa fa-arrow fa-arrow-left"></i></button>
              PRV 23
              <button ref={nextRef} className="custom-swiper-button-next mx-6"><i className="fa fa-arrow fa-arrow-right" ></i></button>
            </div>
            <div className="container mx-auto" style={{ height: '100%', display: 'flex', flexDirection: 'row', gap: '10px', width: '80%' }}>
              <div className="textContentCars">
                <b>Weight:</b> 204.5 kg<br />
                <b>Wheelbase:</b> 1580 mm<br />
                <b>Suspension:</b> Front and Rear Double Unequal Length Aluminium A-arm with Push Rod actuated Spring Dampers<br />
                <b>Dampers:</b> Ohlins TTX 25 Mk II 4 Way adjustable<br />
                <b>Brakes type:</b> Front ISR, Rear Wilwood Calipers with Custom Rotors<br />
                <b>Chassis:</b> Chromoly space frame<br />
                <b>Wheels:</b> 3 piece Custom Aluminium Wheel Rims, 7.4 x 10<br />
                <b>Tires Dry:</b> Hoosier 16 x 7.5-10 R20<br />
                <b>Tires Wet:</b> Hoosier 16 x 7.0-10 R20<br />
                <b>Engine:</b> KTM 390<br />


              </div>
              <div style={{ width: '55%' }}>
                <img src="images/2.jpg" style={{ height: '70%', width: '100%' }} />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}