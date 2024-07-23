
'use client';
import React, { useRef } from 'react';
import ContactUsbackground from '@/components/contactusbackground';
import Footer from '@/components/footer';
import Nav from '@/components/nav';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import '/src/styles/font-awesome.css';

const MyPage: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div className='relative z-10 fixed'>
        <Nav />
        <ScrollToTopButton />
      </div>
      <div className='relative z-0 h-[10rem]'>
        <ContactUsbackground />
      </div>
      <div
        ref={contentRef}
        className='container mx-auto mt-8 py-8 pt-60 flex justify-center items-center'>
          <div className="w-full p-4 h-[600px]">
            <div className="mx-auto w-1/2 flex flex-col items-center">
              <div className="w-full bg-gray-50 p-4 mb-6 h-[500px]">
                <div className="w-full mb-4">Pravega Racing</div>
                <div className="flex ">
                  <div className="w-1/2 h-[350px] mr-10 ">
                  <div className="bg-gray-800 text-white text-center w-full p-2.5 text-sm mb-1">
                    Chief Executive Officer
                  </div>
                  <div className='flex'>
                    <div className="w-1/2 h-[300px] ">
                      <img src="/images/general/teams/team20/4.JPG" alt="Description" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-1/2  items-center justify-center gap-2 ">
                    <div className='flex flex-col items-center justify-center h-full w-full'>
                      <span className="font-semibold text-sm pb-2">Chetan Pratapaneni</span>
                      <div className="flex items-center gap-2"> {/* Wrap the image and phone number in a flex container */}
                        <img src="path_to_your_icon.png"  className="w-5 h-auto" />
                        <span className=" text-sm">+91 77022 41423</span>
                      </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  
                  <div className="w-1/2 h-[350px] ">
                    <div className="bg-gray-800 text-white text-center w-full p-2.5  text-sm mb-1">
                      Chief Operations Officer
                    </div>
                    <div className='flex'>
                    <div className="w-1/2 h-[300px] ">
                      <img src="/images/general/teams/team20/4.JPG" alt="Description" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-1/2 items-center justify-center gap-2 ">
                    <div className='flex flex-col items-center justify-center h-full w-full'>
                      <span className="font-semibold text-sm pb-2">Chetan Pratapaneni</span>
                      <div className="flex items-center gap-2"> {/* Wrap the image and phone number in a flex container */}
                        <img src="path_to_your_icon.png"  className="w-5 h-auto" />
                        <span className=" text-sm fa fa-phone">+91 77022 41423</span>
                      </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                <div className='flex'>
                  <div className="w-1/2 pt-4">
                <a className='text-sm flex pb-1'>
                <img src="path_to_your_icon.png"  className="w-5 h-auto" />
                  <p>pravegaracing@vit.ac.in</p>
                </a>
                <a className='text-sm flex pb-1 text-blue-800' href="http://www.pravega-racing.com">
                <img src="path_to_your_icon.png"  className="w-5 h-auto" />
                  <p>www.pravega-racing.com</p>
                </a>
                <a className='text-sm flex pb-1 text-blue-800' href="http://www.pravega-racing.com">
                <img src="path_to_your_icon.png"  className="w-5 h-auto" />
                  <p>/pravegaracing</p>
                </a></div>

                <div className="w-1/2 pt-4 ">
                <a className='text-sm flex justify-end pb-1 text-blue-800'>
                <img src="path_to_your_icon.png"  className="w-5 h-auto" />
                  <p> /pravegaracing</p>
                </a>
                <a className='text-sm flex justify-end pb-1 text-blue-800' href="http://www.pravega-racing.com">
                <img src="path_to_your_icon.png"  className="w-5 h-auto" />
                  <p> /pravegaracing</p>
                </a>
                <a className='text-sm flex justify-end pb-1 text-blue-800' href="http://www.pravega-racing.com">
                <img src="path_to_your_icon.png"  className="w-5 h-auto" />
                  <p> @pravegaracing</p>
                </a></div>
                </div>
              </div>
            </div>
          </div>
        </div>

          <div className="flex justify-center items-center px-48 mb-10">
            <div className="">
            <h3 className="mb-5">Leave us a message</h3>
            <form className="form" method="POST">
              <div className="mb-8">
                <div className="flex gap-x-8">
                <input 
                  type="text" 
                  required 
                  className="input border border-gray-300 p-2" 
                  placeholder="Name" />
                <input 
                  type="email" 
                  required 
                  className="input border border-gray-300" 
                  placeholder="Email"/>
                </div>
              </div>
              <textarea 
                required 
                className="input mb-6 w-full h-48 border border-gray-300" 
                name="message" 
                rows="8" 
                cols="40" 
                placeholder="Message"></textarea>
              <div className="">
              <button
                type="submit"
                value="1" 
                className="button text-white bg-gray-800 px-4 py-2 mb-30">
                Submit
              </button>
              </div>
            </form></div>
            <div className="flex w-1/2 justify-center items-center pb-6">
                <iframe className="w-4/5 h-96" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9966318821876!2d79.15737321482918!3d12.972066990855588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479f0ccbe067%3A0xfef222e5f36ecdeb!2sVellore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1576047665934!5m2!1sen!2sin" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
            </div>
          </div>
        
      <Footer />
    </div>
  );
};

export default MyPage;
