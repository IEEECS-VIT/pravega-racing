import Image from 'next/image';
import React from 'react';

const GlobalLoading = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <Image
        src='/images/loader/status.gif'
        alt='Loading...'
        width={400}
        height={300}
      />
    </div>
  );
};

export default GlobalLoading;
