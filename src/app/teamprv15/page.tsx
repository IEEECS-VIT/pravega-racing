
'use client';
import React, { useRef } from 'react';

import Footer from '@/components/footer';
import Nav from '@/components/nav';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Team15Background from '@/components/team15background';

const MyPage: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div className='relative z-10'>

        <ScrollToTopButton />
      </div>
      <div className='relative z-0 h-[10rem]'>
        <Team15Background />
      </div>
      <div
        ref={contentRef}
        className='container mx-auto py-4 pt-60 flex flex-col w-full items-center'>
        <h1 className="p-5" >PRV-15 Team</h1>
        <div className="flex flex-wrap text-sm justify-center ">
          <div className="w-3/5">
            <ul className="list-none px-10 py-1">
              <li className="whitespace-nowrap"><span>Kushagra Sinha (Team Captain)</span></li>
              <li className="whitespace-nowrap"><span>Shyam Mohan (Team Manager)</span></li>
              <li>Sidharth Dahiya</li>
              <li>Rohan Patel</li>
              <li>Rishabh Rathi</li>
              <li>Sri Vaishnav</li>
              <li>Tanmay Prasad</li>
              <li>Ashwin Sande</li>
              <li>Yash Chhabra</li>
              <li>Arshmeet Singh</li>
              <li>Amit Karmakar</li>
              <li>Dheeraj Nandhuri</li>
            </ul>
          </div>
          <div className="w-2/5">
            <ul className="list-none px-10 py-1">
              <li>Naman Gupta</li>
              <li>Vyom Gautam</li>
              <li>Tribhuvan Singh</li>
              <li>Rishabh Bahuguna</li>
              <li>Ritesh Tekriwal</li>
              <li>Arjun Wadhwa</li>
              <li>Rohan Gupta</li>
              <li>Sehdev Sikka</li>
              <li>Kamal Chaghla</li>
              <li>Aditya Tiwary</li>
              <li>Arsel Hasan</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MyPage;