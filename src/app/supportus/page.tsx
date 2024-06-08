'use client';
import Image from 'next/image';
import React, { useRef } from 'react';

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
        className='container mx-auto py-8 pt-60 flex flex-col w-full items-center'>
        <div className='w-full grid-rows-1 bg-white grid-cols-1 gap-4 '>
          <div className='col-span-1 flex flex-col items-center w-full '>
            <div className='bg-white p-20 max-w-5xl mx-auto '>
            <div className=" p-10 " style={{ color: '#303030' }}>
            
            <h2
              className='text-3xl font-bold flex items-center justify-center h-5/6' 
            >
            <span className='text-3xl font-bold '
              style={{ color: '#DC092F', marginRight: '10px' }}>Exceptional </span>Value
            </h2>
          
        </div  >
              <p className='text-gray-700 flex items-center justify-center'>
              Invest in the next generation of employees who will have the skills and abilities to solve global issues in engineering and business industries. With the goal of winning Formula Student Germany we work extremely hard and we also want our sponsors to co-operate with us and make our event a successful one.
              </p></div></div>
          <div style={{ position: 'relative', width: '100%', height: '400px', }}>
            <Image
              src='/images/general/supportus/02.jpg'
              alt='Image 1'
              layout='fill'
              objectFit='cover' 
            />
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-50  bg-black text-white">
              <div className=" w-full h-full flex items-center justify-center">
              <div className="text-white items-center justify-center text-3xl flex flex-col">
                <div>How to <span style={{ color: '#DC092F' }}>Support Us </span>?</div>
                <p className="text-xl p-3 text-center mt-2">To achieve our goals and implement improvements we need sponsors who support us with technical and financial resources.</p>
              </div>
              </div>
              <div className=" w-full h-full flex items-center justify-center">
                
              <table className="table-auto text-sm text-center w-full border-separate border-spacing-x-8 border-spacing-y-6">
              <tbody>
                <tr>
                  <td className="border-transparent p-1 text-white w-1/5" style={{ backgroundColor: '#98091F'}}>Material</td>
                  <td className="border-transparent p-1 text-white  w-4/5" style={{ backgroundColor: '#303030' }}>Supplier of parts useful in the building of a formula prototype racecar2</td>
                </tr>
                <tr>
                  <td className="border-transparent p-1 text-white " style={{ backgroundColor: '#98091F'}}>Knowledge</td>
                  <td className="border-transparent p-1 text-white " style={{ backgroundColor: '#303030' }}>Specialist on a related topic and can support with time and knowledge</td>
                </tr>
                <tr>
                  <td className="border-transparent p-1 text-white " style={{ backgroundColor: '#98091F'}}>Manufacturing</td>
                  <td className="border-transparent p-1 text-white " style={{ backgroundColor: '#303030' }}>Provide tools or machines needed for the manufacturing of special parts</td>
                </tr>
                <tr>
                  <td className="border-transparent p-1 text-white " style={{ backgroundColor: '#98091F'}}>Financial</td>
                  <td className="border-transparent p-1 text-white " style={{ backgroundColor: '#303030' }}>Provide monetary assistance for manufacturing and testing of the car</td>
                </tr>
              </tbody>
            </table> 
              </div>
            </div>
          </div>
          <div className="flex m-20 p-4">
            <div className="  w-1/3 flex items-center justify-center text-4xl font-bold"  style={{ color: '#DC092F', margin: '10px' }}>
            Benefits ?  
            </div>
            <div className=" w-2/3 " style={{ color: '#303030' }}>
            <div className="text-2xl text-left ">A sponsor of Pravega Racing the following benefits will be included :</div>
            <ul className="m-5  ">
                <li className=" flex custom-marker1">Logo on car</li>
                <li className=" flex custom-marker1">Logo on Team Apparel</li>
                <li className=" flex custom-marker1">Online Publicity</li>
                <li className=" flex custom-marker1">Distribution of Company Merchandise</li>
                <li className=" flex custom-marker1">Promotion at events ( FSI+FSG)</li>
                <li className=" flex custom-marker1">Promotion at Car launch and college fests</li>
                <li className=" flex custom-marker1">Exclusive Ad Campaigns</li>
                <li className=" flex custom-marker1">Themed Body</li>
                <li className=" flex custom-marker1">Team and Car Availibility</li>
            </ul>
            </div>
          </div>
          <div style={{ position: 'relative', width: '100%', height: '300px', backgroundColor:'#666666' }}>
            <div className="flex items-center justify-between p-4">
              <div className=" text-white p-6 w-1/2 h-64">
                <h2
                  className='text-3xl font-bold text-white flex items-center justify-center h-5/6' 
                >
                <span className='text-3xl font-bold '
                  style={{ color: '#DC092F', marginRight: '10px' }}>Interested </span>to be a part of Pravega Racing?
                </h2>
              </div>
              <div className=" text-white p-6 pt-10 w-1/2 h-64">
              <ul className='text-2xl font-bold pt-10 h-64' >
							<li className="flex ">
              
                <h2 className=" flex text-2xl text-white custom-marker" >
                  See our 
                  <a style={{ marginLeft: '10px', cursor: 'pointer' }} href="#Sponsorshipbrochure" onClick={scrollToSponsorships}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#DC092F'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}>Sponsorship Brochure</a>
                </h2>
              </li>
							<li className="flex  items-center ">
        
                <h2 className=" flex text-2xl text-white custom-marker"><a style={{ cursor: 'pointer'}}
               onMouseEnter={(e) => e.currentTarget.style.color = '#DC092F'}
               onMouseLeave={(e) => e.currentTarget.style.color = ''} href="/contactus">Contact us</a></h2></li>
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
