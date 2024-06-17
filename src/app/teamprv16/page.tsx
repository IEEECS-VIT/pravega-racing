
'use client';
import React, { useRef } from 'react';

import Footer from '@/components/footer';
import Nav from '@/components/nav';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Team19Background from '@/components/team19background';
const MyPage: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);


  return (
    <div>
      <div className='relative z-10'>

        <ScrollToTopButton />
      </div>
      <div className='relative z-0 h-[10rem]'>
        <Team19Background />
      </div>
      <div
        ref={contentRef}
        className='container mx-auto py-8 pt-60 flex flex-col w-full items-center'>
        <h1 className="p-5" >PRV-19 Team</h1>

        <div className="flex p-2 ">
          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/1.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Tribhuvan Singh</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Tribhuvan Singh</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Team Captain</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/2.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Vyom Gautam</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Vyom Gautam</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Team Manager</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/3.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Aagosh</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Aagosh</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/4.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Abhay Singh</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Abhay Singh</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/5.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Abhijai Tibrewala</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Abhijai Tibrewala</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/6.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Rishab Khanna</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Rishab Khanna</div>

              </div>
            </div>
          </div>
        </div>


        <div className="flex p-5 ">
          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/7.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Ashish Chadda</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Ashish Chadda</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/8.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Aditya Jain</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Aditya Jain</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/9.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Aditya Tiwari</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Aditya Tiwari</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/10.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Akshay Poojary</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Akshay Poojary</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/11.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Ansh GandhiA</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Ansh Gandhi</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/12.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Apoorv KakkarI</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Apoorv Kakkar</div>

              </div>
            </div>
          </div>
        </div>


        <div className="flex p-5 ">

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/14.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Arnav Patel</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Arnav Patel</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/16.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Arsel Hasan</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Arsel Hasan</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/17.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Ayush Nahata</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Ayush Nahata</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Powertrain</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/18.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Chitranjan</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Chitranjan</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Powertrain</div>
              </div>
            </div>
          </div>



          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/15.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Deep Doshi</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Deep Doshi</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/15.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Kiran Jomy</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Kiran Jomy</div>

              </div>
            </div>
          </div>
        </div>


        <div className="flex p-5 ">
          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/19.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Nimish Mehra</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Nimish Mehra</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/20.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Nishant Dixit</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Nishant Dixit</div>

              </div>
            </div>
          </div>


          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/21.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Rishabh Ratni</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Rishabh Ratni</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/22.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Ritesh Tekriwal</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Ritesh Tekriwal</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/23.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Rohan Gupta</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Rohan Gupta</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/24.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Saurabh</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Saurabh</div>

              </div>
            </div>
          </div>
        </div>



        <div className="flex p-5 ">
          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/25.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Sehdev Sikka</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Sehdev Sikka</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/26.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Shantanu</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Shantanu</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/27.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Siddharth Sethi</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Siddharth Sethi</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/28.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Tanay Shah</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Tanay Shah</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/29.jpeg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Tarun Bhatia</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Tarun Bhatia</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/30.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Tejas Kothari</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Tejas Kothari</div>

              </div>
            </div>
          </div>
        </div>


        <div className="flex p-5 ">
          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/31.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Varun Nair</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Varun Nair</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/32.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Vatsal Patel</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Vatsal Patel</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/33.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Yash Chabbra</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Yash Chabbra</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team16/34.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Yashasvi Karnena</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>DIVYH</div>

              </div>
            </div>
          </div>

          <div className=" flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white overflow-hidden rounded-full">
            </div>
            <div className="text-center ">
              <p className="font-semibold"></p>
              <p style={{ fontSize: '13px' }}></p>
              <p style={{ fontSize: '13px' }}></p>
              <p style={{ fontSize: '13px' }}></p>
            </div>
          </div>

          <div className=" flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white overflow-hidden rounded-full">
            </div>
            <div className="text-center ">
              <p className="font-semibold"></p>
              <p style={{ fontSize: '13px' }}></p>
              <p style={{ fontSize: '13px' }}></p>
              <p style={{ fontSize: '13px' }}></p>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default MyPage;
