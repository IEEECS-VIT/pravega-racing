'use client';
import React, { useRef } from 'react';
import Footer from '@/components/footer';
import Nav from '@/components/nav';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Team20Background from '@/components/team20background';
import Team19Background from '@/components/team19background';
import Team18Background from '@/components/team18background';
import Team17Background from '@/components/team17background';
import Team16Background from '@/components/team16background';
import Team15Background from '@/components/team15background';
import Team14Background from '@/components/team14background';
import Team13Background from '@/components/team13background';
import Team21Background from '@/components/team20background';
import Team22Background from '@/components/team20background';
import Team23Background from '@/components/team20background';
import { teamData } from '@/constant/teamdata';

const TeamPage = ({ params }: { params: { year: string } }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  console.log('Params:', params);

  let year = parseInt(params.year, 10);

  const chunkArray = (arr: any[], size: number) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const teamMembers = teamData[year] || [];
  console.log('Team Members:', teamMembers);

  const chunkedMembers = chunkArray(teamMembers, 6); // 6 members per row
  console.log('Chunked Members:', chunkedMembers);

 
  const BackgroundComponent = (() => {
    switch (year) {
      case 2023:
        return Team20Background;
      case 2022:
        return Team20Background;
      case 2021:
        return Team20Background;
      case 2020:
        return Team20Background;
      case 2019:
        return Team19Background;
      case 2018:
        return Team18Background;
      case 2017:
        return Team17Background;
      case 2016:
        return Team16Background;
      case 2015:
        return Team15Background;
      case 2014:
        return Team14Background;
      case 2013:
        return Team13Background;
      default:
        return null;
    }
  })();

  return (
    <div>
      <div className='relative z-10'>
        <Nav />
        <ScrollToTopButton />
      </div>
      <div className='relative z-0 h-[10rem]'>
        {BackgroundComponent && <BackgroundComponent />} 
      </div>
      <div
        ref={contentRef}
        className='container py-8 pt-60 flex flex-col w-full justify-center items-center'>
        <h1 className="pt-8">Team {year}</h1>
        {chunkedMembers.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap p-5 justify-center w-full">
            {row.map((member, memberIndex) => (
              <div key={memberIndex} className="relative overflow-hidden group gap-5 flex px-4 flex-col items-center justify-start w-[200px] h-64">
                <div className="w-32 h-32 overflow-hidden rounded-full bg-white flex items-center justify-center">
                  {member.image ? (
                    <img src={member.image} alt={`${member.name} Profile Picture`} className="w-full h-full object-cover" />
                  ) : (
                    <p className="text-white">No Image</p> 
                  )}
                </div>
                <div className="text-center">
                  <p className="font-semibold text-sm md:text-base">{member.name}</p>
                  {member.role.split(',').map((role, roleIndex) => (
                    <p key={roleIndex} className="text-xs md:text-sm" style={{ fontSize: '13px' }}>{role.trim()}</p>
                  ))}
                </div>
                <div className="absolute inset-x-0 top-[-100%] group-hover:inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex flex-col items-center justify-center h-full w-full">
                    <div>{member.name}</div>
                    {member.role.split(',').map((role, roleIndex) => (
                      <div key={roleIndex} className="font-semibold" style={{ fontSize: '15px' }}>{role.trim()}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            {/* Fill empty slots in the last row if needed */}
            {rowIndex === chunkedMembers.length - 1 && 
             [...Array(6 - row.length)].map((_, index) => (
               <div key={`empty-${index}`} className="flex px-7 flex-col w-[200px] items-center justify-between h-64">
                 <div className="w-24 h-24 md:w-32 md:h-32 bg-white flex items-center justify-center">
                   <p className="text-white">No Image</p> 
                 </div>
                 <div className="text-center">
                   <p className="font-semibold"></p>
                   <p style={{ fontSize: '13px' }}></p>
                   <p style={{ fontSize: '13px' }}></p>
                   <p style={{ fontSize: '13px' }}></p>
                 </div>
               </div>
             ))
            }
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default TeamPage;
