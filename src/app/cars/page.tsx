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
export default function Cars() {

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.prevEl = navigationPrevRef.current;
      swiperRef.current.swiper.params.navigation.nextEl = navigationNextRef.current;
      swiperRef.current.swiper.navigation.destroy();
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);



  return (
    <>
      <Nav />
      <SlideshowBackground />
      <div className="main-ka-baap" style={{ marginTop: '500px' }}>
        <Swiper ref={swiperRef} modules={[Scrollbar, Pagination, Navigation, A11y]}
          spaceBetween={50}
          slidesPerView={1}

          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {
            swiper.navigation.init();
            swiper.navigation.update();
          }}

          onSlideChange={() => console.log('slide change')} >
          <SwiperSlide>
            <div className="headingCar">
              <button ref={navigationPrevRef} className="custom-swiper-button-prev mx-6"><i className="fa fa-arrow fa-arrow-left"></i></button>
              PRV Delta Phoenix
              <button ref={navigationNextRef} className="custom-swiper-button-next mx-6">a</button>
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
                <img src="images/2.jpg" style={{ height: '70%', width: '100%' }} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="headingCar">
              <button ref={navigationPrevRef} className="custom-swiper-button-prev mx-6"><i className="fa fa-arrow fa-arrow-left"></i></button>
              PRV Delta Phoenix
              <button ref={navigationNextRef} className="custom-swiper-button-next mx-6"><i className="fa fa-arrow fa-arrow-right" ></i></button>
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
                <img src="images/2.jpg" style={{ height: '70%', width: '100%' }} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="headingCar">
              <button ref={navigationPrevRef} className="custom-swiper-button-prev mx-6"><i className="fa fa-arrow fa-arrow-left"></i></button>
              PRV Delta Phoenix
              <button ref={navigationNextRef} className="custom-swiper-button-next mx-6"><i className="fa fa-arrow fa-arrow-right" ></i></button>
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
                <img src="images/2.jpg" style={{ height: '70%', width: '100%' }} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="headingCar">
              <button ref={navigationPrevRef} className="custom-swiper-button-prev mx-6"><i className="fa fa-arrow fa-arrow-left"></i></button>
              PRV Delta Phoenix
              <button ref={navigationNextRef} className="custom-swiper-button-next mx-6"><i className="fa fa-arrow fa-arrow-right" ></i></button>
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
                <img src="images/2.jpg" style={{ height: '70%', width: '100%' }} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="headingCar">
              <button ref={navigationPrevRef} className="custom-swiper-button-prev mx-6"><i className="fa fa-arrow fa-arrow-left"></i></button>
              PRV Delta Phoenix
              <button ref={navigationNextRef} className="custom-swiper-button-next mx-6"><i className="fa fa-arrow fa-arrow-right" ></i></button>
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
                <img src="images/2.jpg" style={{ height: '70%', width: '100%' }} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="headingCar">
              <button ref={navigationPrevRef} className="custom-swiper-button-prev mx-6"><i className="fa fa-arrow fa-arrow-left"></i></button>
              PRV Delta Phoenix
              <button ref={navigationNextRef} className="custom-swiper-button-next mx-6"><i className="fa fa-arrow fa-arrow-right" ></i></button>
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
                <img src="images/2.jpg" style={{ height: '70%', width: '100%' }} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="headingCar">
              <button ref={navigationPrevRef} className="custom-swiper-button-prev mx-6"><i className="fa fa-arrow fa-arrow-left"></i></button>
              PRV Delta Phoenix
              <button ref={navigationNextRef} className="custom-swiper-button-next mx-6"><i className="fa fa-arrow fa-arrow-right" ></i></button>
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
                <img src="images/2.jpg" style={{ height: '70%', width: '100%' }} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="headingCar">
              <button ref={navigationPrevRef} className="custom-swiper-button-prev mx-6"><i className="fa fa-arrow fa-arrow-left"></i></button>
              PRV Delta Phoenix
              <button ref={navigationNextRef} className="custom-swiper-button-next mx-6"><i className="fa fa-arrow fa-arrow-right" ></i></button>
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
                <img src="images/2.jpg" style={{ height: '70%', width: '100%' }} />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}