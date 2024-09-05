'use client';
import React, { useRef, useEffect } from 'react';
import ContactUsbackground from '@/components/contactusbackground';
import Nav from '@/components/nav';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faGlobe,
  faMapMarker,
} from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import '/src/styles/font-awesome.css';

const MyPage: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const fontUrl =
    'https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap';

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
      <div ref={contentRef} className='container mx-auto mt-4 py-4 px-4'>
        <div className='w-full p-4'>
          <div className='mx-auto max-w-3xl'>
            <div className='w-full bg-gray-50 p-4 mb-6'>
              <h1
                className='text-3xl font-bold text-left mb-6'
                style={{
                  fontFamily: "'Lato', Helvetica, Arial, sans-serif",
                  fontWeight: '900',
                }}
              >
                <span className='text-red-500'>Pravega</span> Racing
              </h1>
              <div className='flex flex-col items-center justify-center lg:flex-row gap-4'>
                <div className='w-full lg:w-1/3 mb-4 lg:mb-0'>
                  <div
                    className='bg-gray-800 text-white text-center w-full p-2.5 text-m mb-2'
                    style={{
                      fontFamily:
                        "'Source Sans Pro', Helvetica, Arial, sans-serif",
                      fontWeight: '400',
                    }}
                  >
                    Chief Executive Officer
                  </div>
                  <div className='flex flex-col items-center'>
                    <div className='w-full mb-4' style={{ height: 'auto' }}>
                      <img
                        src='/images/general/teams/team23/CEO.JPG'
                        alt='CEO'
                        className='w-full object-cover'
                        style={{ height: '20rem', objectFit: 'cover' }}
                      />
                    </div>
                    <div className='text-center'>
                      <span
                        className='font-semibold text-m pb-2 block'
                        style={{
                          fontFamily:
                            "'Source Sans Pro', Helvetica, Arial, sans-serif",
                          fontWeight: '400',
                        }}
                      >
                        Arindam Sharma
                      </span>
                      <div className='flex items-center justify-center'>
                        <FontAwesomeIcon icon={faPhone} />
                        <span className='text-m underline pl-2 lg:text-xs'>
                          +91 8580917504
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='w-full lg:w-1/3'>
                  <div
                    className='bg-gray-800 text-white text-center w-full p-2.5 text-m mb-2'
                    style={{
                      fontFamily:
                        "'Source Sans Pro', Helvetica, Arial, sans-serif",
                      fontWeight: '400',
                    }}
                  >
                    Chief Operations Officer
                  </div>
                  <div className='flex flex-col items-center'>
                    <div className='w-full mb-4' style={{ height: 'auto' }}>
                      <img
                        src='/images/general/teams/team23/COO.JPG'
                        alt='COO'
                        className='w-full object-cover'
                        style={{ height: '20rem', objectFit: 'cover' }}
                      />
                    </div>
                    <div className='text-center'>
                      <span
                        className='font-semibold text-m pb-2 block'
                        style={{
                          fontFamily:
                            "'Source Sans Pro', Helvetica, Arial, sans-serif",
                          fontWeight: '400',
                        }}
                      >
                        Anurag Balaje
                      </span>
                      <div className='flex items-center justify-center'>
                        <FontAwesomeIcon icon={faPhone} />
                        <span className='text-m underline pl-2 lg:text-xs'>
                          +91 8054603773
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex flex-col items-center mt-6 ml-6'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-0'>
                  <a
                    className='text-sm flex items-center justify-center pb-1 text-blue-800'
                    href='mailto:pravegaracing@vit.ac.in'
                    target='_blank'
                  >
                    <FontAwesomeIcon icon={faEnvelope} className='mr-2' />
                    <p
                      style={{
                        fontFamily:
                          "'Source Sans Pro', Helvetica, Arial, sans-serif",
                        fontWeight: '400',
                        margin: 0,
                      }}
                    >
                      pravegaracing@vit.ac.in
                    </p>
                  </a>
                  <a
                    className='text-sm flex items-center justify-center pb-1 text-blue-800'
                    href='https://www.instagram.com/pravegaracing/'
                    target='_blank'
                  >
                    <FontAwesomeIcon icon={faInstagram} className='mr-2' />
                    <p
                      style={{
                        fontFamily:
                          "'Source Sans Pro', Helvetica, Arial, sans-serif",
                        fontWeight: '400',
                        margin: 0,
                      }}
                    >
                      /pravegaracing
                    </p>
                  </a>
                  <a
                    className='text-sm flex items-center justify-center pb-1 text-blue-800'
                    href='https://x.com/pravegaracing'
                    target='_blank'
                  >
                    <FontAwesomeIcon icon={faTwitter} className='mr-2' />
                    <p
                      style={{
                        fontFamily:
                          "'Source Sans Pro', Helvetica, Arial, sans-serif",
                        fontWeight: '400',
                        margin: 0,
                      }}
                    >
                      /pravegaracing
                    </p>
                  </a>
                  <a
                    className='text-sm flex items-center justify-center pb-1 text-blue-800'
                    href='http://www.pravega-racing.com'
                    target='_blank'
                  >
                    <FontAwesomeIcon icon={faGlobe} className='mr-1' />
                    <p
                      style={{
                        fontFamily:
                          "'Source Sans Pro', Helvetica, Arial, sans-serif",
                        fontWeight: '400',
                        margin: 0,
                      }}
                    >
                      www.pravega-racing.com
                    </p>
                  </a>
                  <a
                    className='text-sm flex items-center justify-center pb-1 text-blue-800'
                    href='https://m.facebook.com/pravegaracing/'
                    target='_blank'
                  >
                    <FontAwesomeIcon icon={faFacebook} className='mr-2' />
                    <p
                      style={{
                        fontFamily:
                          "'Source Sans Pro', Helvetica, Arial, sans-serif",
                        fontWeight: '400',
                        margin: 0,
                      }}
                    >
                      /pravegaracing
                    </p>
                  </a>
                  <a
                    className='text-sm flex items-center justify-center pb-1 text-blue-800'
                    href='https://www.linkedin.com/company/pravega-racing./'
                    target='_blank'
                  >
                    <FontAwesomeIcon icon={faLinkedin} className='mr-2' />
                    <p
                      style={{
                        fontFamily:
                          "'Source Sans Pro', Helvetica, Arial, sans-serif",
                        fontWeight: '400',
                        margin: 0,
                      }}
                    >
                      /pravegaracing
                    </p>
                  </a>
                </div>

                <div className='flex justify-center items-center mt-6'>
                  <FontAwesomeIcon
                    icon={faMapMarker}
                    className='w-6 text-center'
                  />
                  <span
                    className='text-sm'
                    style={{
                      fontFamily:
                        "'Source Sans Pro', Helvetica, Arial, sans-serif",
                      fontWeight: '400',
                    }}
                  >
                    VIT University, Vellore-632014, India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row justify-center items-start px-4 md:px-8 lg:px-48 mb-10 gap-8'>
        <div className='w-full lg:w-1/2'>
          <h3
            className='mb-5 text-3xl font-bold'
            style={{
              fontFamily: "'Lato', Helvetica, Arial, sans-serif",
              fontWeight: '300',
            }}
          >
            Leave us a message
          </h3>

          <form className='form' method='POST'>
            <div className='mb-4 flex flex-col sm:flex-row gap-4'>
              <input
                type='text'
                required
                className='input border border-gray-300 p-2 w-full sm:w-1/2'
                placeholder='Name'
              />
              <input
                type='email'
                required
                className='input border border-gray-300 p-2 w-full sm:w-1/2'
                placeholder='Email'
              />
            </div>
            <textarea
              required
              className='input mb-6 w-full h-48 border border-gray-300 p-2'
              name='message'
              placeholder='Message'
            ></textarea>
            <div>
              <button
                type='submit'
                className='button text-white bg-gray-800 px-4 py-2 mb-4'
                style={{
                  fontFamily: "'Source Sans Pro', Helvetica, Arial, sans-serif",
                  fontWeight: '400',
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className='w-full lg:w-1/2 flex justify-center items-center'>
          <iframe
            className='w-full h-96'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9966318821876!2d79.15737321482918!3d12.972066990855588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479f0ccbe067%3A0xfef222e5f36ecdeb!2sVellore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1576047665934!5m2!1sen!2sin'
            frameBorder='0'
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
