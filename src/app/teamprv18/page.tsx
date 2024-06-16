
'use client';
import React, { useRef } from 'react';

import Footer from '@/components/footer';
import Nav from '@/components/nav';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Team18Background from '@/components/team18background';
const MyPage: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);


  return (
    <div>
      <div className='relative z-10'>

        <ScrollToTopButton />
      </div>
      <div className='relative z-0 h-[10rem]'>
        <Team18Background />
      </div>
      <div
        ref={contentRef}
        className='container mx-auto py-8 pt-60 flex flex-col w-full items-center'>
        <h1 className="p-5" >PRV-18 Team</h1>

        <div className="flex p-2 ">
          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-32 h-32 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/1.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">NAMAN SHUKLA</p>
              <p style={{ fontSize: '13px' }}>Team Captain</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>NAMAN SHUKLA</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Team Captain</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/2.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">NIKHIL AGARWAL</p>
              <p style={{ fontSize: '13px' }}>Team Manager</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>NIKHIL AGARWAL</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Team Manager</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/3.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">ROHIT AGGARWAL</p>
              <p style={{ fontSize: '13px' }}>Operations Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>ROHIT AGGARWAL</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Operations Lead</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/4.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">KUNAL SALARIA</p>
              <p style={{ fontSize: '13px' }}>Power Train Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>KUNAL SALARIA</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Power Train Lead</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/5.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">VIGNESH</p>
              <p style={{ fontSize: '13px' }}>Vehicle Dynamics lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>VIGNESH</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Vehicle Dynamics lead</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/6.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">SAAHIL</p>
              <p style={{ fontSize: '13px' }}>DAQ Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>SAAHIL</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>DAQ Lead</div>
              </div>
            </div>
          </div>
        </div>


        <div className="flex p-5 ">
          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/7.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">SHANTAN</p>
              <p style={{ fontSize: '13px' }}>Design Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>SHANTAN</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Designs Lead</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/8.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">AMOGH</p>
              <p style={{ fontSize: '13px' }}>Brakes lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>AMOGH</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Brakes lead</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/9.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">ZAIN</p>
              <p style={{ fontSize: '13px' }}>Electrical Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>ZAIN</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Electrical Lead</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/10.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">MOHIT JAIN</p>
              <p style={{ fontSize: '13px' }}>Electronics Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>MOHIT JAIN</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Electronics Lead</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/11.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">LAKSHYA</p>
              <p style={{ fontSize: '13px' }}>Composites Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>LAKSHYA</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Composites Lead</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/12.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">RUCHIT</p>
              <p style={{ fontSize: '13px' }}>Aerodynamics lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>RUCHIT</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Aerodynamics lead</div>
              </div>
            </div>
          </div>
        </div>


        <div className="flex p-5 ">
          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/13.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">AKASH PORWAL</p>
              <p style={{ fontSize: '13px' }}>Design</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>AKASH PORWAL</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Design</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/14.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">ANIRUDH</p>
              <p style={{ fontSize: '13px' }}>Aerodynamics</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>ANIRUDH</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Aerodynamics</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/15.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">ARCHIT</p>
              <p style={{ fontSize: '13px' }}>Design</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>ARCHIT</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Design</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/16.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">ASHWIN</p>
              <p style={{ fontSize: '13px' }}>Aerodynamics</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>ASHWIN</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Aerodynamics</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/17.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">DINESH</p>
              <p style={{ fontSize: '13px' }}>Aerodynamics</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>DINESH</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Aerodynamics</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/18.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">DIVYANSHU</p>
              <p style={{ fontSize: '13px' }}>Design</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>ARCHIT</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>DIVYANSHU</div>
              </div>
            </div>
          </div>
        </div>


        <div className="flex p-5 ">
          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/19.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">GEETANSH</p>
              <p style={{ fontSize: '13px' }}>Vehicle Dynamics</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>GEETANSH</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Vehicle Dynamics</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/20.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">JEEVESH JAIN</p>
              <p style={{ fontSize: '13px' }}>Powertrain</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>JEEVESH JAIN</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Powertrain</div>
              </div>
            </div>
          </div>


          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/21.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">MAYANK GUPTA</p>
              <p style={{ fontSize: '13px' }}>Composites</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>MAYANK GUPTA</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Composites</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/22.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">MOSAM UGEMUGE</p>
              <p style={{ fontSize: '13px' }}>Brakes</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>MOSAM UGEMUGE</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Brakes</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/23.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">NITHIN</p>
              <p style={{ fontSize: '13px' }}>Composites</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>NITHIN</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Composites</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/24.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">PUNIT GAUTAM</p>
              <p style={{ fontSize: '13px' }}>Vehicle Dynamics</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>PUNIT GAUTAM</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Vehicle Dynamics</div>
              </div>
            </div>
          </div>
        </div>



        <div className="flex p-5 ">
          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/25.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">RAHUL ARORA</p>
              <p style={{ fontSize: '13px' }}>Management</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>RAHUL ARORA</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Management</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/26.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">RAHUL</p>
              <p className="font-semibold">SHRIMALANI</p>
              <p style={{ fontSize: '13px' }}>Management</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>

            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>RAHUL SHRIMALANI</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Management</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/27.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">SOURABH</p>
              <p style={{ fontSize: '13px' }}>Drive train</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>SOURABH</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Drive train</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/28.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">SACHIN</p>
              <p className="font-semibold">KELKAR</p>
              <p style={{ fontSize: '13px' }}>Vehicle Dynamics</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>SACHIN KELKAR</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Vehicle Dynamics</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/29.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">SAGNIK DEB</p>
              <p style={{ fontSize: '13px' }}>DAQ</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>SAGNIK DEB</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>DAQ</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/30.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">SANGEET</p>
              <p className="font-semibold">AGGARWAL</p>
              <p style={{ fontSize: '13px' }}>Composites</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>MANAS</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Composites</div>
              </div>
            </div>
          </div>
        </div>


        <div className="flex p-5 ">
          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/31.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">SHIVAM</p>
              <p style={{ fontSize: '13px' }}>Power train</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>SHIVAM</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Power train</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/32.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">SHUBHAM SAHAI</p>
              <p style={{ fontSize: '13px' }}>Vehicle Dynamics</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>SHUBHAM SAHAI</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Vehicle Dynamics</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/33.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">SOORAJ</p>
              <p style={{ fontSize: '13px' }}>Driver</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>SOORAJ</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Driver</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/34.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">SUMEDH</p>
              <p className="font-semibold">CHHABRIA</p>
              <p style={{ fontSize: '13px' }}>Power train</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>

            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>DIVYH</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Power train</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/35.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">SUMIT</p>
              <p className="font-semibold">VADODARIA</p>
              <p style={{ fontSize: '13px' }}>Design</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>

            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>SUMIT VADODARIA</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Design</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/36.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">VAIBHAV</p>
              <p className="font-semibold">MITTAL</p>
              <p style={{ fontSize: '13px' }}>Electrical</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>

            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>VAIBHAV MITTAL</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Electrical</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex p-5 ">
          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/37.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">UDHAY</p>
              <p style={{ fontSize: '13px' }}>Driver</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Driver</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Aerodynamics</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team18/38.png" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">VIBHORE</p>
              <p style={{ fontSize: '13px' }}>Aerodynamics</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>VIBHORE</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Aerodynamics</div>
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


        </div>




      </div>

    </div>
  );
};

export default MyPage;
