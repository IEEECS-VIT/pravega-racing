'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import '@/components/CustomStyles.css';

import Footer from '@/components/footer';
import Nav from '@/components/nav';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Supportbackground from '@/components/supportbackground';

const MyPage: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const sponsorshipsRef = useRef(null);

  const scrollToSponsorships = (e) => {
    e.preventDefault();
    if (sponsorshipsRef.current) {
      sponsorshipsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const fontUrl =
      'https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap';
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
      <div className='relative z-10'>
        <Nav />
        <ScrollToTopButton />
      </div>
      <div className='relative z-0 h-[10rem]'>
        <Supportbackground />
      </div>
      <div
        ref={contentRef}
        className=' pt-48  w-full flex flex-col items-center'
      >
        <div className='w-full grid-rows-1 bg-white grid-cols-1 gap-4 '>
          <div className='flex flex-col md:flex-row m-4 md:mt-20 p-4'>
            <div className='w-[75%] md:w-1/3 flex items-center justify-center mb-4 md:mb-0'>
              <div className="text-6xl font-bold bg-yellow-400 text-[#DC092F] px-4 py-2 font-['Lato',Helvetica,Arial,sans-serif] font-extrabold">
                Benefits?
              </div>
            </div>
            <div className="w-full md:w-2/3 text-[#303030] font-['Lato',Helvetica,Arial,sans-serif] font-light flex items-center">
              <div>
                <div className='text-3xl text-left mb-4'>
                  A sponsor of Pravega Racing the following benefits will be
                  included:
                </div>
                <ul className='mt-5 text-2xl'>
                  <li className='flex custom-marker1 mb-4'>Logo on car</li>
                  <li className='flex custom-marker1 mb-4'>
                    Logo on Team Apparel
                  </li>
                  <li className='flex custom-marker1 mb-4'>Online Publicity</li>
                  <li className='flex custom-marker1 mb-4'>
                    Distribution of Company Merchandise
                  </li>
                  <li className='flex custom-marker1 mb-4'>
                    Promotion at events (FB, FSG, FSA, FSE)
                  </li>
                  <li className='flex custom-marker1 mb-4'>
                    Promotion at Car launch and college fests
                  </li>
                  <li className='flex custom-marker1 mb-4'>
                    Exclusive Ad Campaigns
                  </li>
                  <li className='flex custom-marker1 mb-4'>Themed Body</li>
                  <li className='flex custom-marker1'>
                    Team and Car Availability
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='col-span-1 flex flex-col items-center w-full'>
            <div className='bg-white my-8 max-w-5xl'>
              <div className='  ' style={{ color: '#303030' }}>
                <h2
                  className='text-6xl  flex items-center justify-center h-5/6'
                  style={{
                    fontFamily: "'Lato', Helvetica, Arial, sans-serif",
                    fontWeight: '300',
                  }}
                >
                  <span
                    className='text-6xl font-bold '
                    style={{ color: '#DC092F', marginRight: '10px' }}
                  >
                    Exceptional{' '}
                  </span>
                  Value
                </h2>
              </div>
              <p className='text-gray-700 flex items-center justify-center text-center text-2xl'>
                Invest in the next generation of employees who will have the
                skills and abilities to solve global issues in engineering and
                business industries. With the goal of winning Formula Student
                Germany we work extremely hard and we also want our sponsors to
                co-operate with us and make our event a successful one.
              </p>
            </div>
          </div>

          <div className='relative w-full min-h-[500px]'>
            <div className='absolute inset-0 overflow-hidden'>
              <Image
                src='/images/general/supportus/02.jpg'
                alt='Image 1'
                layout='fill'
                objectFit='cover'
                className='z-0'
              />
            </div>
            <div className='relative z-10 bg-black bg-opacity-50 text-white min-h-[500px] flex items-center'>
              <div className='w-full flex flex-col md:flex-row items-center justify-center p-4 md:py-12'>
                <div className='md:w-1/3 flex flex-col items-center justify-center p-4'>
                  <div className="font-['Lato'] font-bold text-3xl md:text-6xl text-center">
                    How to{' '}
                    <span className='text-[#DC092F] text-4xl md:text-6xl'>
                      Support Us
                    </span>
                    ?
                  </div>
                  <p className="text-lg md:text-xl p-3 text-center mt-2 font-['Lato'] font-light">
                    To achieve our goals and implement improvements we need
                    sponsors who support us with technical and financial
                    resources.
                  </p>
                </div>
                <div className='md:w-1/2 flex items-center justify-center mt-4 md:mt-0'>
                  <div className='overflow-x-auto w-full'>
                    <table className='table-auto text-xs md:text-xl text-center w-full border-separate border-spacing-2 md:border-spacing-4'>
                      <tbody>
                        <tr>
                          <td className='p-2 md:p-2 text-white bg-[#98091F] whitespace-nowrap rounded'>
                            Material
                          </td>
                          <td className='p-2 md:p-2 text-white bg-[#303030] rounded'>
                            Supplier of parts useful in the building of a
                            formula prototype racecar
                          </td>
                        </tr>
                        <tr>
                          <td className='p-2 md:p-2 text-white bg-[#98091F] whitespace-nowrap rounded'>
                            Knowledge
                          </td>
                          <td className='p-2 md:p-2 text-white bg-[#303030] rounded'>
                            Specialist on a related topic and can support with
                            time and knowledge
                          </td>
                        </tr>
                        <tr>
                          <td className='p-2 md:p-2 text-white bg-[#98091F] whitespace-nowrap rounded'>
                            Manufacturing
                          </td>
                          <td className='p-2 md:p-2 text-white bg-[#303030] rounded'>
                            Provide tools or machines needed for the
                            manufacturing of special parts
                          </td>
                        </tr>
                        <tr>
                          <td className='p-2 md:p-2 text-white bg-[#98091F] whitespace-nowrap rounded'>
                            Financial
                          </td>
                          <td className='p-2 md:p-2 text-white bg-[#303030] rounded'>
                            Provide monetary assistance for manufacturing and
                            testing of the car
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              position: 'relative',
              width: '100%',
              height: 'auto',
              backgroundColor: '',
            }}
          >
            <div className='flex flex-col md:flex-row items-center justify-between p-4 bg-yellow-400'>
              <div className='text-black p-6 md:w-1/2'>
                <h2
                  className='text-3xl font-bold flex flex-wrap items-center justify-center h-auto'
                  style={{
                    fontFamily: "'Lato', Helvetica, Arial, sans-serif",
                    fontWeight: '500',
                  }}
                >
                  <span
                    className='text-3xl font-bold justify-center items-center'
                    style={{ color: '#DC092F', marginRight: '10px' }}
                  >
                    Interested
                  </span>
                  to be a part of{' '}
                  <span style={{ fontStyle: 'italic', textAlign: 'center' }}>
                    Pravega Racing?
                  </span>
                </h2>
              </div>
              <div className='p-6 md:w-1/2 flex justify-center'>
                <ul className='text-2xl font-bold pt-10'>
                  <li className='flex items-center mb-4'>
                    <h2 className='flex flex-wrap text-3xl'>
                      <span
                        style={{ color: 'navy', marginRight: '5px' }}
                      ></span>
                      See our
                      <a
                        className='ml-1 md:ml-5 hover:underline'
                        style={{ cursor: 'pointer', color: '#DC092F' }}
                        href='#Sponsorshipbrochure'
                        onClick={scrollToSponsorships}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.textDecoration = 'underline')
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.textDecoration = 'none')
                        }
                      >
                        <span
                          className='text-3xl font-bold'
                          style={{ color: '#DC092F', marginRight: '0px' }}
                        >
                          Sponsorship Brochure
                        </span>
                      </a>
                    </h2>
                  </li>

                  <li className='flex items-center'>
                    <h2 className='flex text-3xl font-bold'>
                      <span
                        style={{ color: 'navy', marginRight: '130px' }}
                      ></span>
                      <a
                        className='hover:underline'
                        style={{ cursor: 'pointer', color: '#DC092F' }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.textDecoration = 'underline')
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.textDecoration = 'none')
                        }
                        href='/contactus'
                      >
                        Contact us
                      </a>
                    </h2>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
