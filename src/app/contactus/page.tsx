// app/page.tsx

'use client';
import React, { useRef } from 'react';

import Prbackground from '@/components/contactusbg';
import Footer from '@/components/footer';
import Nav from '@/components/nav';

const MyPage: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div className='relative z-10 fixed'>
        <Nav />
      </div>
      <div className='relative z-0 h-[10rem]'>
        <Prbackground />
      </div>
      <div
        ref={contentRef}
        className='container mx-auto py-8 pt-60 flex flex-col items-center'
      ></div>
      <Footer />
    </div>
  );
};

export default MyPage;
// =======
// 'use client'
// import React from 'react';
// import SlideshowBackground from '@/components/Slideshow';
// import DriverlessSection from '@/components/DriverlessSection';

// const Page: React.FC = () => {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen">

//       <div className="flex items-center justify-center h-full">
//         <img
//           src="/images/Pravega Racing Driverless Logo.png" // Replace with the path to your image
//           alt="Example Image"
//           className="max-w-full max-h-full"
//         />
//       </div>
//       <SlideshowBackground />
//       <DriverlessSection />

//     </div>

//   );
// };

// export default Page;
