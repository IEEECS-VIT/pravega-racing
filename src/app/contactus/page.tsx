// app/page.tsx
'use client';
import React, { useRef } from 'react';

import PrBackground from '@/components/prbackground';
import Footer from '@/components/footer';
import Nav from '@/components/nav';

const MyPage: React.FC = () => {

  return (
    <div>
      <div className='relative z-10 fixed'>
        <Nav />
      </div>
      <div className='relative z-0 h-[10rem]'>
        <PrBackground />
      </div>
      <div
        className='container mx-auto py-8 pt-60 flex flex-col items-center'
      ></div>
      <Footer />
    </div>
  );
};

export default MyPage;