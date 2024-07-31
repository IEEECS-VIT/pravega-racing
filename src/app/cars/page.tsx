'use client';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import React from 'react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
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

import carsData from '@/constant/carsData.json';
interface Car {
  Car: string;
  Weight: string;
  Wheelbase: string;
  Suspension: string;
  Dampers: string;
  BrakesType: string;
  Chassis: string;
  Wheels: string;
  TiresDry: string;
  TiresWet: string;
  Engine: string;
  Image: string;
  Displacement: string;
}
export default function Cars() {
  const router = useRouter();
  const slide = useSearchParams().get('slide');
  const [swiper, setSwiper] = React.useState<any>(); // Add type assertion 'any' to swiper
  const prevRef = React.useRef();
  const nextRef = React.useRef();
  const swiperT = useSwiper();

  useEffect(() => {
    if (swiper && swiper.initialized && typeof slide === 'string') {
      swiper.slideTo(parseInt(slide));
    }
  }, [swiper, slide]);

  return (
    <>
      <SlideshowBackground />
      <div className='carsTitle'>Cars</div>
      <div className='main-ka-baap' style={{ marginTop: '500px' }}>
        <Swiper
          modules={[Scrollbar, Pagination, Navigation, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef?.current,
            nextEl: nextRef?.current,
          }}
          pagination={true}
          onSwiper={setSwiper}
          onSlideChange={() => console.log('slide change')}
        >
          {carsData && carsData.length > 0 ? (
            carsData.map((car: Car, index) => (
              <SwiperSlide key={index}>
                <div className='headingCar'>
                  <button
                    onClick={() => {
                      swiper.slidePrev();
                    }}
                    className='custom-swiper-button-prev mx-6'
                  >
                    <i className='fa fa-arrow fa-arrow-left'></i>
                  </button>
                  {car.Car}
                  <button
                    onClick={() => {
                      swiper.slideNext();
                    }}
                    className='custom-swiper-button-next mx-6'
                  >
                    <i className='fa fa-arrow fa-arrow-right'></i>
                  </button>
                </div>
                <div
                  className='container mx-auto'
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '10px',
                    width: '80%',
                  }}
                >
                  <div className='textContentCars'>
                    <b>Weight:</b> {car.Weight}
                    <br />
                    <b>Wheelbase:</b> {car.Wheelbase}
                    <br />
                    <b>Suspension:</b> {car.Suspension}
                    <br />
                    <b>Dampers:</b> {car.Dampers}
                    <br />
                    <b>Brakes type:</b> {car.BrakesType}
                    <br />
                    <b>Chassis:</b> {car.Chassis}
                    <br />
                    <b>Wheels:</b> {car.Wheels}
                    <br />
                    <b>Tires Dry:</b> {car.TiresDry}
                    <br />
                    <b>Tires Wet:</b> {car.TiresWet}
                    <br />
                    <b>Engine:</b> {car.Engine}
                    <br />
                    {car.Displacement && (
                      <>
                        <b>Displacement:</b> {car.Displacement} <br />
                      </>
                    )}
                  </div>
                  <div style={{ width: '55%' }}>
                    <img
                      src={car.Image}
                      style={{ height: '70%', width: '100%' }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <div> No cars found</div>
          )}
        </Swiper>
      </div>
    </>
  );
}
