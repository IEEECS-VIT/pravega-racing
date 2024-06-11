
'use client';
import React, { useRef } from 'react';

import Footer from '@/components/footer';
import Nav from '@/components/nav';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Team20Background from '@/components/team20background';
const MyPage: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);


  return (
    <div>
      <div className='relative z-10'>
        <Nav />
        <ScrollToTopButton />
      </div>
      <div className='relative z-0 h-[10rem]'>
        <Team20Background />
      </div>
      <div
        ref={contentRef}
        className='container mx-auto py-8 pt-60 flex flex-col w-full items-center'>
        <h1 className="p-5" >Current Team</h1>

        <div className="flex p-2 ">
          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/1.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">PRUDHVI RAO</p>
              <p style={{ fontSize: '13px' }}>Chief Technical</p>
              <p style={{ fontSize: '13px' }}>Officer</p>
              <p style={{ fontSize: '13px' }}>Drivetrain Lead</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>PRUDHVI RAO</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Chief Technical Officer</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Drivetrain Lead</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/2.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">AVIRAL H</p>
              <p style={{ fontSize: '13px' }}>Chief Operations</p>
              <p style={{ fontSize: '13px' }}>Officer</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>AVIRAL H</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Chief Operations Officer</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/3.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">ADARSH NAGESH</p>
              <p style={{ fontSize: '13px' }}>Chief Marketing</p>
              <p style={{ fontSize: '13px' }}>Officer</p>
              <p style={{ fontSize: '13px' }}>Aerodynamics Lead</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>ADARSH NAGESH</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Chief Marketing Officer</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Aerodynamics Lead</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/4.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">KUSHAGRA GOYAL</p>
              <p style={{ fontSize: '13px' }}>Team Manager</p>
              <p style={{ fontSize: '13px' }}>Electrical Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>KUSHAGRA GOYAL</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Team Manager</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Electrical Lead</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/5.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">MAHAK PANDIA</p>
              <p style={{ fontSize: '13px' }}>Team Manager</p>
              <p style={{ fontSize: '13px' }}>Vehicle Dynamics</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>MAHAK PANDIA</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Team Manager</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Vehicle Dynamics</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/6.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">SAVITOJ SINGH</p>
              <p style={{ fontSize: '13px' }}>Composites Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>SAVITOJ SINGH</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Composites Lead</div>
              </div>
            </div>
          </div>
        </div>


        <div className="flex p-5 ">
          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/7.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">APOORVA SINGH</p>
              <p style={{ fontSize: '13px' }}>Powertrain Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>APOORVA SINGH</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Powertrain Lead</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/8.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">AKSHAT SHARMA</p>
              <p style={{ fontSize: '13px' }}>Data Acquisition</p>
              <p style={{ fontSize: '13px' }}>Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>AKSHAT SHARMA</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Data Acquisition Lead</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/9.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">SOUMYE GUPTA</p>
              <p style={{ fontSize: '13px' }}>Vehicle Performance</p>
              <p style={{ fontSize: '13px' }}>Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>SOUMYE GUPTA</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Vehicle Performance</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Lead</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/10.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">DHANUSH PATIL</p>
              <p style={{ fontSize: '13px' }}>R&D Composites</p>
              <p style={{ fontSize: '13px' }}>Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>DHANUSH PATIL</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>R&D Composites Lead</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/11.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">ASHUTOSH GUPTA</p>
              <p style={{ fontSize: '13px' }}>R&D Powertrain</p>
              <p style={{ fontSize: '13px' }}>Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>ASHUTOSH GUPTA</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>R&D Powertrain Lead</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/12.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">VARUN MAMTANI</p>
              <p style={{ fontSize: '13px' }}>R&D Driverless</p>
              <p style={{ fontSize: '13px' }}>Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>VARUN MAMTANI</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>R&D Driverless Lead</div>
              </div>
            </div>
          </div>
        </div>


        <div className="flex p-5 ">
          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/13.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">SAURABH</p>
              <p style={{ fontSize: '13px' }}>Design Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>SAURABH</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Design Lead</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/14.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">ESHAAN</p>
              <p style={{ fontSize: '13px' }}>Brakes</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>ESHAAN</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Brakes</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/15.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">NEEL</p>
              <p style={{ fontSize: '13px' }}>Data Aquisition</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>NEEL</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Data Aquisition</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/16.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">KAUSTUBH</p>
              <p style={{ fontSize: '13px' }}>Data Aquisition</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>KAUSTUBH</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Data Aquisition</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/17.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">ABHIJOT</p>
              <p style={{ fontSize: '13px' }}>Powertrain</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>ABHIJOT</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Powertrain</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/18.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">SHWET</p>
              <p style={{ fontSize: '13px' }}>Powertrain</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>SHWET</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Powertrain</div>
              </div>
            </div>
          </div>
        </div>


        <div className="flex p-5 ">
          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/19.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">SAYANTHAN</p>
              <p style={{ fontSize: '13px' }}>Powertrain</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>SAYANTHAN</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Powertrain</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/20.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">VEDANG</p>
              <p style={{ fontSize: '13px' }}>Powertrain</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>VEDANG</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Powertrain</div>
              </div>
            </div>
          </div>


          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/21.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">RAHUL</p>
              <p style={{ fontSize: '13px' }}>Drivetrain</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>RAHUL</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Drivetrain</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/22.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">PRATIK</p>
              <p style={{ fontSize: '13px' }}>Drivetrain</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>PRATIK</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Drivetrain</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/23.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">AAYUSH</p>
              <p style={{ fontSize: '13px' }}>Composites</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>AAYUSH</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Composites</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/24.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">ASHWATH</p>
              <p style={{ fontSize: '13px' }}>Composites</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>ASHWATH</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Composites</div>
              </div>
            </div>
          </div>
        </div>



        <div className="flex p-5 ">
          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/25.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">SAURABH</p>
              <p style={{ fontSize: '13px' }}>Vehicle Performance</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>SAURABH</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Vehicle Performance</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/26.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">VYOM</p>
              <p style={{ fontSize: '13px' }}>Vehicle Performance</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>VYOM</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Vehicle Performance</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/27.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">HARSH</p>
              <p style={{ fontSize: '13px' }}>Design</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>HARSH</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Design</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/28.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">UTKARSH</p>
              <p style={{ fontSize: '13px' }}>Design</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>UTKARSH</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Design</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/29.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">SARTHAK</p>
              <p style={{ fontSize: '13px' }}>Electrical</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>SARTHAK</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Electrical</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/30.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">MANAS</p>
              <p style={{ fontSize: '13px' }}>Electrical</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>MANAS</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Electrical</div>
              </div>
            </div>
          </div>
        </div>


        <div className="flex p-5 ">
          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/31.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">DIVYH</p>
              <p style={{ fontSize: '13px' }}>Aerodynamics</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>DIVYH</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Aerodynamics</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/32.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">KASHISH</p>
              <p style={{ fontSize: '13px' }}>Aerodynamics</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>KASHISH</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Aerodynamics</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team20/33.JPG" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">DEVASHISH</p>
              <p style={{ fontSize: '13px' }}>Vehicle Performance</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>DEVASHISH</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Vehicle Performance</div>
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


        </div>




      </div>
      <Footer />
    </div>
  );
};

export default MyPage;
