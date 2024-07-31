'use client';
import Image from 'next/image';
import React, { useRef } from 'react';

import Prbackground from '@/components/prbackground';
import ScrollToTopButton from '@/components/ScrollToTopButton';

import prActivitiesDataJSON from '@/constant/practivitiesdata.json';

const MyPage: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { prActivitiesData } = prActivitiesDataJSON;

  return (
    <div>
      <div className='relative z-10'>
        <ScrollToTopButton />
      </div>
      <div className='relative z-0 h-[10rem]'>
        <Prbackground />
      </div>
      <div
        ref={contentRef}
        className='container mx-auto py-8 pt-60 flex flex-col w-full items-center'
      >
        <div className='w-full grid-rows-1 bg-white grid-cols-1 gap-4'>
          {prActivitiesData?.map((item, index) => (
            <div key={index} className='col-span-1 flex flex-col items-center'>
              <div className='bg-white p-4 max-w-5xl mx-auto'>
                <h2
                  className='text-3xl font-bold mb-2'
                  style={{ color: '#DC092F' }}
                >
                  {item.title}
                </h2>
                <p className='text-gray-700'>{item.description}</p>
                {item.imageSrc && (
                  <Image
                    src={item.imageSrc}
                    alt={item.altText || ''}
                    width={item.width}
                    height={item.height}
                    className='mt-4 rounded-lg mx-auto'
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPage;
