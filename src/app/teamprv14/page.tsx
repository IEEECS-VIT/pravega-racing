
'use client';
import React, { useRef } from 'react';

import Footer from '@/components/footer';
import Nav from '@/components/nav';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Team14Background from '@/components/team14background';
const MyPage: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);


  return (
    <div>
      <div className='relative z-10'>
        <Nav />
        <ScrollToTopButton />
      </div>
      <div className='relative z-0 h-[10rem]'>
        <Team14Background />
      </div>
      <div
        ref={contentRef}
        className='container mx-auto py-4 pt-60 flex flex-col w-full items-center'>
        <h1 className="p-5" >PRV-14 Team</h1>
        <div className="flex flex-wrap text-sm justify-center ">
          <div className="w-3/5">
            <ul className="list-none px-10 py-1">
              <li className="whitespace-nowrap"><span>Sanshray Agarwal (Team Captain)</span></li>
              <li className="whitespace-nowrap"><span>Prerak Mody (Team Manager)</span></li>
              <li>Ujjwal Pandey</li>
              <li>Achintya Mehrotra</li>
              <li>Aditya Sharma</li>
              <li>Akash Raj</li>
              <li>Pranav Radhakrishna</li>
              <li>Madhav Rangerjan</li>
              <li>Harshit Ahuja</li>
              <li>Aditya Bahuguna</li>
            </ul>
          </div>
          <div className="w-2/5">
            <ul className="list-none px-10 py-1">
              <li>Mrigank Hiran</li>
              <li>Katyayan Jaiswal</li>
              <li>Gaurav Shrivastav</li>
              <li>Aditya Chaudhary</li>
              <li>Rajatnoor Singh</li>
              <li>Palak Mehta</li>
              <li>Praneet Dutta</li>
              <li>Aarna Rawat</li>
              <li>Gaurav Patni</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyPage;
