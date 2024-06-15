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
        <Nav />
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
              <img src="/images/general/teams/team19/1.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">NITHIN S</p>
              <p style={{ fontSize: '13px' }}>Chief Executive</p>
              <p style={{ fontSize: '13px' }}>Officer</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>NITHIN S</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Chief Executive Officer</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/2.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">AKASH PORWAL</p>
              <p style={{ fontSize: '13px' }}>Chief Operating</p>
              <p style={{ fontSize: '13px' }}>Officer</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>AKASH PORWAL</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Chief Operating Officer</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/3.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">PUNEET GAUTAM</p>
              <p style={{ fontSize: '13px' }}>Chief Technical</p>
              <p style={{ fontSize: '13px' }}>Officer</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>PUNEET GAUTAM</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Chief Technical Officer</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/4.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">SANGEET AGGARWAL</p>
              <p style={{ fontSize: '13px' }}>Composites Lead</p>
              <p style={{ fontSize: '13px' }}>Statics Head</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>SANGEET AGGARWAL</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Composites Lead</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Statics Head</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/5.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">ANIRUDH G. SRIRAAM</p>
              <p style={{ fontSize: '13px' }}>Aerodynamics Lead</p>
              <p style={{ fontSize: '13px' }}>Team Manager</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>ANIRUDH G. SRIRAAM</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Aerodynamics Lead</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Team Manager</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/6.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">SACHIN KELKAR</p>
              <p style={{ fontSize: '13px' }}>Vehicle Dynamics Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>SACHIN KELKAR</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Vehicle Dynamics Lead</div>
              </div>
            </div>
          </div>
        </div>


        <div className="flex p-5 ">
          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/7.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">YASH PATAWARI</p>
              <p style={{ fontSize: '13px' }}>Design Lead</p>
              <p style={{ fontSize: '13px' }}>Ergonomics Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>YASH PATAWARI</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Design Lead</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Ergonomics Lead</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/8.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">VAIBHAV MITTAL</p>
              <p style={{ fontSize: '13px' }}>Electrical and</p>
              <p style={{ fontSize: '13px' }}>Electronics Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>VAIBHAV MITTAL</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Electrical and</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Electronics Lead</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/9.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">HARSHIT SINGHAL</p>
              <p style={{ fontSize: '13px' }}>Sensors and</p>
              <p style={{ fontSize: '13px' }}>Hardware Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>HARSHIT SINGHAL</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Sensors and Hardware Lead</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/10.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">SHUBHAM SAHAI</p>
              <p style={{ fontSize: '13px' }}>Testing Manager</p>
              <p style={{ fontSize: '13px' }}>Vehicle Dynamics</p>
              <p style={{ fontSize: '13px' }}>Driver</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>SHUBHAM SAHAI</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Testing Manager, </div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Driver, </div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Vehicle Dynamics</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/11.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">SAGNIK DEB</p>
              <p style={{ fontSize: '13px' }}>Data Acquisition</p>
              <p style={{ fontSize: '13px' }}>Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>ASHUTOSH GUPTA</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Data Acquisition</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Lead</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/12.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">MOSAM UGEMUGE</p>
              <p style={{ fontSize: '13px' }}> Breaks </p>
              <p style={{ fontSize: '13px' }}>Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>MOSAM UGEMUGE</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Breaks Lead</div>
              </div>
            </div>
          </div>
        </div>


        <div className="flex p-5 ">
          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/13.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">NIPUN SINGHAL</p>
              <p style={{ fontSize: '13px' }}>Drivetrain</p>
              <p style={{ fontSize: '13px' }}>Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>NIPUN SINGHAL</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Drivetrain</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Lead</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/14.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">SUMEDH CHHABRIA</p>
              <p style={{ fontSize: '13px' }}>Powertrain</p>
              <p style={{ fontSize: '13px' }}>Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>SUMEDH CHHABRIA</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Powertrain</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Lead</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/15.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">TEJAS RAUT</p>
              <p style={{ fontSize: '13px' }}>Vehicle Dynamics</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>TEJAS RAUT</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Vehicle Dynamics</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/16.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">HARSHVARDHAN</p>
              <p className="font-semibold">RAO</p>
              <p style={{ fontSize: '13px' }}>Composites</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>

            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>HARSHVARDHAN RAO</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Composites</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/17.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">MANAV</p>
              <p className="font-semibold">BADAMWALA</p>
              <p style={{ fontSize: '13px' }}>Data Analysis Lead </p>
              <p style={{ fontSize: '13px' }}>and Driver</p>

            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>MANAV BADAMWALA</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Data Analysis Lead</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>and Driver</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/18.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">J N ADARSH</p>
              <p style={{ fontSize: '13px' }}>Powertrain</p>
              <p style={{ fontSize: '13px' }}>Aerodynamics</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>J N ADARSH</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Aerodynamics</div>
              </div>
            </div>
          </div>
        </div>


        <div className="flex p-5 ">
          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/19.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">KUSHAGRA GOYAL</p>
              <p style={{ fontSize: '13px' }}>Electrical</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>KUSHAGRA GOYAL</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Electrical</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/20.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">MAHAK PANDIA</p>
              <p style={{ fontSize: '13px' }}>Vehicle Dynamicsn</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>MAHAK PANDIA</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Vehicle Dynamics</div>
              </div>
            </div>
          </div>


          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/21.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">DHANUSH PATIL</p>
              <p style={{ fontSize: '13px' }}>Composites</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>DHANUSH PATIL</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Composites</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/22.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">HARSH ALGHARE</p>
              <p style={{ fontSize: '13px' }}>Design</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>HARSH ALGHARE</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Design</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/23.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">AKSHAT SHARMA</p>
              <p style={{ fontSize: '13px' }}>Data Aquisition</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>AKSHAT SHARMA</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Data Aquisition</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/24.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">SAVITOJ AULAKH</p>
              <p style={{ fontSize: '13px' }}>Composites</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>SAVITOJ AULAKH</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Composites</div>
              </div>
            </div>
          </div>
        </div>



        <div className="flex p-5 ">
          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/25.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">APOORVA SINGH</p>
              <p style={{ fontSize: '13px' }}>Powertrain</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>APOORVA SINGH</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Powertrain</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/26.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">ANJALI SHARMA</p>
              <p style={{ fontSize: '13px' }}>Electrical</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>ANJALI SHARMA</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Electrical</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/27.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">SOUMYE GUPTA</p>
              <p style={{ fontSize: '13px' }}>Vehical Dynamics</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>SOUMYE GUPTA</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Vehical Dynamics</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/28.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">PRUDHVI RAO</p>
              <p style={{ fontSize: '13px' }}>Drivetrain</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>PRUDHVI RAO</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Drivetrain</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/29.jpeg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">ESHAAN GUPTA</p>
              <p style={{ fontSize: '13px' }}>Brakes</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>ESHAAN GUPTA</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Brakes</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/30.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">TUSHAR SHARMA</p>
              <p style={{ fontSize: '13px' }}>Vehicle Dynamics</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>TUSHAR SHARMA</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Vehicle Dynamics</div>
              </div>
            </div>
          </div>
        </div>


        <div className="flex p-5 ">
          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/31.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">ASHUTOSH GUPTA</p>
              <p style={{ fontSize: '13px' }}>Powertrain</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>ASHUTOSH GUPTA</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Powertrain</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/32.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">SAURABH</p>
              <p style={{ fontSize: '13px' }}>Design</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>SAURABH</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Design</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/33.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">AVRIL H C</p>
              <p style={{ fontSize: '13px' }}>Design</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>AVRIL H C</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Design</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/34.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">DEBARTHA SAHA</p>
              <p style={{ fontSize: '13px' }}>Management</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>DEBARTHA SAHA</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Management</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/35.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">VARUN MAMTANI</p>
              <p style={{ fontSize: '13px' }}>Electrical</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>VARUN MAMTANI</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Electrical</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/36.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">SHASHWAT</p>
              <p className="font-semibold">KUMAR SINGH</p>
              <p style={{ fontSize: '13px' }}>Composites</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>

            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>SHASHWAT KUMAR SINGH</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Composites</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex p-5 ">
          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team19/37.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">AMAN RAJ</p>
              <p style={{ fontSize: '13px' }}>Electrical</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>AMAN RAJ</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Electrical</div>
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
      <Footer />
    </div>
  );
};

export default MyPage;
