
'use client';
import React, { useRef } from 'react';

import Footer from '@/components/footer';
import Nav from '@/components/nav';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Team17Background from '@/components/team17background';
const MyPage: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);


  return (
    <div>
      <div className='relative z-10'>
        <Nav />
        <ScrollToTopButton />
      </div>
      <div className='relative z-0 h-[10rem]'>
        <Team17Background />
      </div>
      <div
        ref={contentRef}
        className='container mx-auto py-8 pt-60 flex flex-col w-full items-center'>
        <h1 className="p-5" >PRV-17 Team</h1>

        <div className="flex p-2 ">
          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-32 h-32 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/1.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Abhijai Tibrewala</p>
              <p style={{ fontSize: '13px' }}>Team Captain</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Abhijai Tibrewala</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Team Captain</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/2.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Aagosh Mishra</p>
              <p style={{ fontSize: '13px' }}>Powertrain Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Aagosh Mishra</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Team Captain & Powertrain Lead</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/3.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Arnav Patel</p>
              <p style={{ fontSize: '13px' }}>Team Manager</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Arnav Patel</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Team Manager</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/4.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Ayush Nahata</p>
              <p style={{ fontSize: '13px' }}>Composites Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Ayush Nahata</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Composites Lead</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/5.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Nishant Dixit</p>
              <p style={{ fontSize: '13px' }}>R&D Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>VARUN MAMTANI</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>R&D Lead</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/6.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Shantanu Singh</p>
              <p style={{ fontSize: '13px' }}>Chassis and Assembly Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Shantanu Singh</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Chassis and Assembly Lead</div>

              </div>
            </div>
          </div>



        </div>


        <div className="flex p-5 ">
          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/7.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Siddharth Sethi</p>
              <p style={{ fontSize: '13px' }}>Ergonomics Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Siddharth Sethi</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Ergonomics Lead</div>
              </div>
            </div>
          </div>



          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/8.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Sushant Srivastav</p>
              <p style={{ fontSize: '13px' }}>Aerodynamics Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Sushant Srivastav</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Aerodynamics Lead</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/9.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Tarun Bhatia</p>
              <p style={{ fontSize: '13px' }}>Design and Analysis Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Tarun Bhatia</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Design and Analysis Lead</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/10.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Udit Saraswat</p>
              <p style={{ fontSize: '13px' }}>Vehicle Dynamics Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Udit Saraswat</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Vehicle Dynamics Lead</div>

              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/11.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Yashasavi Karnena</p>
              <p style={{ fontSize: '13px' }}>Electrical Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Yashasavi Karnena</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Electrical Lead</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/12.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Aarati Noronha</p>
              <p style={{ fontSize: '13px' }}>Vehicle Dynamics</p>
              <p style={{ fontSize: '13px' }}>Lead</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Aarati Noronha</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Vehicle Dynamics</div>
              </div>
            </div>
          </div>

        </div>


        <div className="flex p-5 ">
          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/13.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Akshyt Kumar</p>
              <p style={{ fontSize: '13px' }}>Powertrain</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Akshyt Kumar</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Powertrain</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/14.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Dhananjay Singh</p>
              <p style={{ fontSize: '13px' }}>Vehicle Dynamics</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Dhananjay Singh</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Vehicle Dynamics</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/15.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Prathamesh Gunjal</p>
              <p style={{ fontSize: '13px' }}>Powertrain</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Prathamesh Gunjal</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Powertrain</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/16.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Rishiraj Chauhan</p>
              <p style={{ fontSize: '13px' }}>Powertrain</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Rishiraj Chauhan</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Powertrain</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/17.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Sachin Ht</p>
              <p style={{ fontSize: '13px' }}>Powertrain</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Sachin Ht</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Powertrain</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/18.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Shreyansh Garhewal</p>
              <p style={{ fontSize: '13px' }}>Vehicle Dynamics</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Shreyansh Garhewal</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Vehicle Dynamics</div>
              </div>
            </div>
          </div>
        </div>


        <div className="flex p-5 ">
          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/19.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Vaibhav Sharma</p>
              <p style={{ fontSize: '13px' }}>Powertrain</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Vaibhav Sharma</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Powertrain</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/20.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Adithya Venugopal</p>
              <p style={{ fontSize: '13px' }}>Vehicle Dynamics</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Adithya Venugopal</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Vehicle Dynamics</div>
              </div>
            </div>
          </div>


          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/21.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Aman Agarwal</p>
              <p style={{ fontSize: '13px' }}>Powertrain</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Aman Agarwal</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Powertrain</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/22.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Amogh Chourasia</p>
              <p style={{ fontSize: '13px' }}>Brakes</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Amogh Chourasia</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Brakes</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/23.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Apoorv Singh</p>
              <p style={{ fontSize: '13px' }}>Electrical</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Apoorv Singh</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Electrical</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/24.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Ashwarya Anupam</p>
              <p style={{ fontSize: '13px' }}>Composites</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Ashwarya Anupam</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Composites</div>
              </div>
            </div>
          </div>
        </div>



        <div className="flex p-5 ">
          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/25.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Moideen Shariq</p>
              <p style={{ fontSize: '13px' }}>Vehicle Dynamics</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Moideen Shariq</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Vehicle Dynamics</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/26.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Nikhil Agrawal</p>
              <p style={{ fontSize: '13px' }}>Marketing Executive</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Nikhil Agrawal</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Marketing Executive</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/27.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Naman Shukla</p>
              <p style={{ fontSize: '13px' }}>Marketing Executive</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Naman Shukla</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Marketing Executive</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/28.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Nimish Gupta</p>
              <p style={{ fontSize: '13px' }}>Marketing Executive</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Nimish Gupta</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Marketing Executive</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/29.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Rohit Aggrawal</p>
              <p style={{ fontSize: '13px' }}>Composites</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Rohit Aggrawa</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Composites</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/30.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Ruchit Jain</p>
              <p style={{ fontSize: '13px' }}>Aerodynamics</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Ruchit Jain</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Aerodynamics</div>
              </div>
            </div>
          </div>
        </div>


        <div className="flex p-5 ">
          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/31.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">S Sooraj</p>
              <p style={{ fontSize: '13px' }}>Vehicle Dynamics</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>S Sooraj</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Vehicle Dynamics</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/32.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Saahil Vishwakarma</p>
              <p style={{ fontSize: '13px' }}>Data Aquisation</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Saahil Vishwakarma</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Data Aquisation</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/33.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Sai Teja</p>
              <p style={{ fontSize: '13px' }}>Drive train</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Sai Teja</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>rive train</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/34.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Salil Madhav</p>
              <p style={{ fontSize: '13px' }}>Brakes</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Salil Madhav</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Brakes</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/35.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Sanchit Chaudhary</p>
              <p style={{ fontSize: '13px' }}>Composites</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Sanchit Chaudhary</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Composites</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/36.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Shantan Khandar</p>
              <p style={{ fontSize: '13px' }}>Design</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Shantan Khandar</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Design</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex p-5 ">
          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/37.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Udhay Singh</p>
              <p style={{ fontSize: '13px' }}>Powertrain</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Udhay Singh</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Powertrain</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/38.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Uma Shankar</p>
              <p style={{ fontSize: '13px' }}>Data Acquisition</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Uma Shankar</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Data Acquisition</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/39.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Utkarsh Palav</p>
              <p style={{ fontSize: '13px' }}>Electrical</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Utkarsh Palav</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Electrical</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/40.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Vibhor Malik</p>
              <p style={{ fontSize: '13px' }}>Aerodynamics</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Vibhor Malik</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Aerodynamics</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/41.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Vignesh R</p>
              <p style={{ fontSize: '13px' }}>Vehicle Dynamics</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Vignesh R</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Vehicle Dynamics</div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group flex px-7 flex-col items-center justify-between h-screen md:h-64">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full">
              <img src="/images/general/teams/team17/42.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center ">
              <p className="font-semibold">Vishal Agrawal</p>
              <p style={{ fontSize: '13px' }}>Vehicle Dynamics</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
              <p style={{ fontSize: '13px' }}>&nbsp;</p>
            </div>
            <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500 ">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div>Vishal Agrawal</div>
                <div className="font-semibold" style={{ fontSize: '15px' }}>Vehicle Dynamics</div>
              </div>
            </div>
          </div>

        </div>




      </div>
      <Footer />
    </div>
  );
};

export default MyPage;
