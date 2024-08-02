'use client';
import React, { useRef, useEffect } from 'react';
import ContactUsbackground from '@/components/contactusbackground';
import Footer from '@/components/footer';
import Nav from '@/components/nav';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import '/src/styles/font-awesome.css';

const MyPage: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const fontUrl = 'https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap';

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = fontUrl;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []); 

  return (
    <div>
      <div className='relative z-10 fixed w-full'>
        <Nav />
        <ScrollToTopButton />
      </div>
      <div className='relative z-0'>
        <ContactUsbackground />
      </div>
      <div
        ref={contentRef}
        className='container mx-auto mt-4 py-4 px-4'>
          <div className="w-full p-4">
            <div className="mx-auto max-w-3xl">
              <div className="w-full bg-gray-50 p-4 mb-6">
                <h1 className="text-3xl font-bold text-left mb-6" style={{ fontFamily: "'Lato', Helvetica, Arial, sans-serif", fontWeight: '900' }}><span className="text-red-500">Pravega</span> Racing</h1>
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                    <div className="bg-gray-800 text-white text-center w-full p-2.5 text-m mb-2" style={{ fontFamily: "'Source Sans Pro', Helvetica, Arial, sans-serif", fontWeight: '400' }}>
                      Chief Executive Officer
                    </div>
                    <div className='flex flex-col sm:flex-row'>
                    <div className="w-full sm:w-1/2 mb-4 sm:mb-0" style={{ height: 'auto' }}>
                      <img src="/images/general/teams/team20/4.JPG" alt="CEO" className="w-full object-cover" style={{ height: '20rem' }} />
                    </div>
                      <div className="w-full sm:w-1/2 flex flex-col items-center justify-center">
                        <span className="font-semibold text-m pb-2" style={{ fontFamily: "'Source Sans Pro', Helvetica, Arial, sans-serif", fontWeight: '400' }}>Chetan Pratapaneni</span>
                        <div className="flex items-center">
                          <i className="fa fa-phone"></i>
                          <span className="text-m underline">+91 7702241423</span>

                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-1/2">
                    <div className="bg-gray-800 text-white text-center w-full p-2.5 text-m mb-2" style={{ fontFamily: "'Source Sans Pro', Helvetica, Arial, sans-serif", fontWeight: '400' }}>

                      Chief Operations Officer
                    </div>
                    <div className='flex flex-col sm:flex-row'>
                    <div className="w-full sm:w-1/2 mb-4 sm:mb-0" style={{ height: 'auto' }}>
                      <img src="/images/general/teams/team20/4.JPG" alt="COO" className="w-full object-cover" style={{ height: '20rem' }} />
                    </div>
                      <div className="w-full sm:w-1/2 flex flex-col items-center justify-center">
                        <span className="font-semibold text-m pb-2" style={{ fontFamily: "'Source Sans Pro', Helvetica, Arial, sans-serif", fontWeight: '400' }}>Chetan Pratapaneni</span>
                        <div className="flex items-center">
                          <i className="fa fa-phone"></i>
                          <span className="text-m underline">+91 7702241423</span>
        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col sm:flex-row mt-4 gap-4'>
                  <div className="w-full sm:w-1/2 flex flex-col">
                    <a className='text-sm flex items-center pb-1 text-blue-800'>
                      <i className="fa fa-envelope w-5 text-center"></i>
                      <p className="" style={{ fontFamily: "'Source Sans Pro', Helvetica, Arial, sans-serif", fontWeight: '400' }}>pravegaracing@vit.ac.in</p>
                    </a>
                    <a className='text-sm flex items-center pb-1 text-blue-800' href="http://www.pravega-racing.com">
                      <i className="fa fa-globe w-5 text-center"></i>
                      <p className="" style={{ fontFamily: "'Source Sans Pro', Helvetica, Arial, sans-serif", fontWeight: '400' }}>www.pravega-racing.com</p>
                    </a>
                    <a className='text-sm flex items-center pb-1 text-blue-800' href="http://www.pravega-racing.com">
                      <i className="fa fa-facebook w-5 text-center"></i>
                      <p className="" style={{ fontFamily: "'Source Sans Pro', Helvetica, Arial, sans-serif", fontWeight: '400' }}>/pravegaracing</p>

                    </a>
                  </div>

                  <div className="w-full sm:w-1/2 flex flex-col sm:items-end">
                    <a className='text-sm flex items-center pb-1 text-blue-800'>
                      <i className="fa fa-instagram w-5 text-center"></i>
                      <p className="" style={{ fontFamily: "'Source Sans Pro', Helvetica, Arial, sans-serif", fontWeight: '400' }}>/pravegaracing</p>
                    </a>
                    <a className='text-sm flex items-center pb-1 text-blue-800' href="http://www.pravega-racing.com">
                      <i className="fa fa-linkedin w-5 text-center"></i>
                      <p className="" style={{ fontFamily: "'Source Sans Pro', Helvetica, Arial, sans-serif", fontWeight: '400' }}>/pravegaracing</p>
                    </a>
                    <a className='text-sm flex items-center pb-2 text-blue-800' href="http://www.pravega-racing.com">
                      <i className="fa fa-twitter w-5 text-center"></i>
                      <p className="" style={{ fontFamily: "'Source Sans Pro', Helvetica, Arial, sans-serif", fontWeight: '400' }}>@pravegaracing</p>

                    </a>
                  </div>
                </div>
                <div className="flex justify-center items-center mt-6">
                  <i className="fa fa-map-marker w-5 text-center"></i>
                  <span className="text-sm" style={{ fontFamily: "'Source Sans Pro', Helvetica, Arial, sans-serif", fontWeight: '400' }}>VIT University, Vellore-632014, India</span>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-start px-4 md:px-8 lg:px-48 mb-10 gap-8">
          <div className="w-full lg:w-1/2">
            <h3 className="mb-5 text-3xl font-bold" style={{ fontFamily: "'Lato', Helvetica, Arial, sans-serif", fontWeight: '300' }}>Leave us a message</h3>

            <form className="form" method="POST">
              <div className="mb-4 flex flex-col sm:flex-row gap-4">
                <input 
                  type="text" 
                  required 
                  className="input border border-gray-300 p-2 w-full sm:w-1/2" 
                  placeholder="Name" />
                <input 
                  type="email" 
                  required 
                  className="input border border-gray-300 p-2 w-full sm:w-1/2" 
                  placeholder="Email"/>
              </div>
              <textarea 
                required 
                className="input mb-6 w-full h-48 border border-gray-300 p-2" 
                name="message" 
                placeholder="Message"></textarea>
              <div>
                <button
                  type="submit"
                  className="button text-white bg-gray-800 px-4 py-2 mb-4" style={{ fontFamily: "'Source Sans Pro', Helvetica, Arial, sans-serif", fontWeight: '400' }}>

                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <iframe className="w-full h-96" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9966318821876!2d79.15737321482918!3d12.972066990855588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479f0ccbe067%3A0xfef222e5f36ecdeb!2sVellore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1576047665934!5m2!1sen!2sin" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
          </div>

        </div>
        
      <Footer />
    </div>
  );
};

export default MyPage;