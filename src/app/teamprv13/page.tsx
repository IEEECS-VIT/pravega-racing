
'use client';
import React, { useRef } from 'react';

import Footer from '@/components/footer';
import Nav from '@/components/nav';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Team13Background from '@/components/team13background';

const MyPage: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div className='relative z-10'>
        <Nav />
        <ScrollToTopButton />
      </div>
      <div className='relative z-0 h-[10rem]'>
        <Team13Background />
      </div>
      <div
        ref={contentRef}
        className='container mx-auto py-4 pt-60 flex flex-col w-full items-center'>
        <h1 className="p-5" >PRV-13 Team</h1>
        <div className="flex flex-wrap text-sm justify-center ">
          <div className="w-3/5">
            <ul className="list-none px-10 py-1">
              <li className="whitespace-nowrap"><span>Prateek Sibal(Team Captain)</span></li>
              <li>Aditya Bansal</li>
              <li>Akshay</li>
              <li>Vishwajeet</li>
              <li>Naman</li>
              <li>Vandit</li>
            </ul>
          </div>
          <div className="w-2/5">
            <ul className="list-none px-10 py-1">
              <li>Tanmay</li>
              <li className="whitespace-nowrap"><span>Rudrendu Shekhar</span></li>
              <li>Himanshu</li>
              <li>Manu pant</li>
              <li>Mohit</li>
              <li>Sagar</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyPage;