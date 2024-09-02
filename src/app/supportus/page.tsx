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
    const fontUrl = 'https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap';
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
        className=' py-8 pt-60  w-full flex flex-col items-center'>
        <div className='w-full grid-rows-1 bg-white grid-cols-1 gap-4 '>
          <div className='col-span-1 flex flex-col items-center w-full '>
            <div className='bg-white p-20 max-w-5xl'>
            <div className=" p-10 " style={{ color: '#303030' }}>
            
            <h2
              className='text-3xl  flex items-center justify-center h-5/6' style={{ fontFamily: "'Lato', Helvetica, Arial, sans-serif", fontWeight: '300' }}
            >
            <span className='text-3xl font-bold '
              style={{ color: '#DC092F', marginRight: '10px' }}>Exceptional </span>Value
            </h2>
          
        </div  >
              <p className='text-gray-700 flex items-center justify-center text-center text-sm'>
              Invest in the next generation of employees who will have the skills and abilities to solve global issues in engineering and business industries. With the goal of winning Formula Student Germany we work extremely hard and we also want our sponsors to co-operate with us and make our event a successful one.
              </p></div></div>


              <div className="relative w-full min-h-[500px]">
  <div className="absolute inset-0 overflow-hidden">
    <Image
      src="/images/general/supportus/02.jpg"
      alt="Image 1"
      layout="fill"
      objectFit="cover"
      className="z-0"
    />
  </div>
  <div className="relative z-10 bg-black bg-opacity-50 text-white min-h-[500px] flex items-center">
    <div className="w-full flex flex-col md:flex-row items-center justify-center p-4 md:py-12">
      <div className="md:w-1/2 flex flex-col items-center justify-center p-4">
        <div className="font-['Lato'] font-bold text-3xl md:text-4xl text-center">
          How to <span className="text-[#DC092F] text-4xl md:text-5xl">Support Us</span>?
        </div>
        <p className="text-lg md:text-xl p-3 text-center mt-2 font-['Lato'] font-light">
          To achieve our goals and implement improvements we need sponsors who support us with technical and financial resources.
        </p>
      </div>
      <div className="md:w-1/2 flex items-center justify-center mt-4 md:mt-0">
        <div className="overflow-x-auto w-full">
          <table className="table-auto text-xs md:text-sm text-center w-full border-separate border-spacing-2 md:border-spacing-4">
            <tbody>
              <tr>
                <td className="p-2 md:p-2 text-white bg-[#98091F] whitespace-nowrap rounded">Material</td>
                <td className="p-2 md:p-2 text-white bg-[#303030] rounded">Supplier of parts useful in the building of a formula prototype racecar</td>
              </tr>
              <tr>
                <td className="p-2 md:p-2 text-white bg-[#98091F] whitespace-nowrap rounded">Knowledge</td>
                <td className="p-2 md:p-2 text-white bg-[#303030] rounded">Specialist on a related topic and can support with time and knowledge</td>
              </tr>
              <tr>
                <td className="p-2 md:p-2 text-white bg-[#98091F] whitespace-nowrap rounded">Manufacturing</td>
                <td className="p-2 md:p-2 text-white bg-[#303030] rounded">Provide tools or machines needed for the manufacturing of special parts</td>
              </tr>
              <tr>
                <td className="p-2 md:p-2 text-white bg-[#98091F] whitespace-nowrap rounded">Financial</td>
                <td className="p-2 md:p-2 text-white bg-[#303030] rounded">Provide monetary assistance for manufacturing and testing of the car</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
              
    <div className="flex flex-col md:flex-row m-4 md:m-20 p-4">
  <div className="w-full md:w-1/3 flex items-center justify-center text-4xl font-bold text-[#DC092F] mb-4 md:mb-0 font-['Lato',Helvetica,Arial,sans-serif] font-extrabold">
    Benefits?
  </div>
  <div className="w-full md:w-2/3 text-[#303030] font-['Lato',Helvetica,Arial,sans-serif] font-light">
    <div className="text-2xl text-left">A sponsor of Pravega Racing the following benefits will be included:</div>
    <ul className="mt-5">
      <li className="flex custom-marker1">Logo on car</li>
      <li className="flex custom-marker1">Logo on Team Apparel</li>
      <li className="flex custom-marker1">Online Publicity</li>
      <li className="flex custom-marker1">Distribution of Company Merchandise</li>
      <li className="flex custom-marker1">Promotion at events (FSI+FSG)</li>
      <li className="flex custom-marker1">Promotion at Car launch and college fests</li>
      <li className="flex custom-marker1">Exclusive Ad Campaigns</li>
      <li className="flex custom-marker1">Themed Body</li>
      <li className="flex custom-marker1">Team and Car Availability</li>
    </ul>
  </div>
</div>

          <div style={{ position: 'relative', width: '100%', height: 'auto', backgroundColor: '#666666' }}>
  <div className="flex flex-col md:flex-row items-center justify-between p-4">
    <div className="text-white p-6 md:w-1/2">
      <h2
        className="text-3xl font-bold text-white flex flex-wrap items-center justify-center h-auto"
        style={{ fontFamily: "'Lato', Helvetica, Arial, sans-serif", fontWeight: '500' }}
      >
        <span
          className="text-3xl font-bold justify-center items-center"
          style={{ color: '#DC092F', marginRight: '10px' }}
        >
          Interested
        </span>
        to be a part of{' '}
        <span style={{ fontStyle: 'italic', textAlign: 'center' }}>Pravega Racing?</span>
      </h2>
    </div>
    <div className="text-white p-6 md:w-1/2 flex justify-center">
      <ul className="text-2xl font-bold pt-10">
        <li className="flex items-center">
          <h2 className="flex flex-wrap text-2xl text-white">
            <span style={{ color: 'navy', marginRight: '5px' }}></span>See our
            <a
              style={{ marginLeft: '20px', cursor: 'pointer' }}
              href="#Sponsorshipbrochure"
              onClick={scrollToSponsorships}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#DC092F')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '')}
            >
              Sponsorship Brochure
            </a>
          </h2>
        </li>
        <li className="flex items-center">
          <h2 className="flex text-2xl text-white">
            <span style={{ color: 'navy', marginRight: '5px' }}></span>
            <a
              style={{ cursor: 'pointer' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#DC092F')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '')}
              href="/contactus"
            >
              Contact us
            </a>
          </h2>
        </li>
      </ul>
    </div>
  </div>
</div>

            <div id='#Sponsorshipbrochure' ref={sponsorshipsRef} className=" p-10 " style={{ color: '#303030' }}>
            
                <h2
                  className='text-3xl font-bold flex items-center justify-center h-5/6' 
                >
                <span className='text-3xl font-bold '
                  style={{ color: '#DC092F', marginRight: '10px' }}>Sponsorship </span>Brochure
                </h2>
              
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyPage;