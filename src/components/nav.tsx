'use client';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className='fixed navTest'
      style={{ borderBottom: '1px solid black', zIndex: 10000, width: '100%' }}
    >
      <div className='mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex-shrink-0'>
            <Link href='/' passHref>
              <Image
                src='/images/general/logowhite.png'
                alt='Flagstone logo'
                width={500}
                height={300}
                className='h-16 w-auto cursor-pointer'
              />
            </Link>
          </div>
          <div className='hidden sm:block' style={{ marginTop: '29.4px' }}>
            <div className='flex space-x-4'>
              <Link href='/' passHref>
                <p className='text-white hover:text-black px-3 py-2 rounded-md text-sm font-medium cursor-pointer'>
                  Home
                </p>
              </Link>
              <div className='relative group'>
                <Link href='/cars' passHref>
                  <p className='text-white hover:text-black px-3 py-2 rounded-md text-sm font-medium cursor-pointer'>
                    Cars
                  </p>
                </Link>
                <div className='absolute z-10 hidden bg-black bg-opacity-90 text-white group-hover:block w-48 py-2 rounded-md'>
                  <Link
                    href={{ pathname: '/cars', query: { slide: 0 } }}
                    passHref
                  >
                    <p className='block px-4 py-2 cursor-pointer'>
                      PRV Delta Phoenix
                    </p>
                  </Link>
                  <Link
                    href={{ pathname: '/cars', query: { slide: 1 } }}
                    passHref
                  >
                    <p className='block px-4 py-2 cursor-pointer'>PRV 13</p>
                  </Link>
                  <Link
                    href={{ pathname: '/cars', query: { slide: 2 } }}
                    passHref
                  >
                    <p className='block px-4 py-2 cursor-pointer'>PRV 14</p>
                  </Link>
                  <Link
                    href={{ pathname: '/cars', query: { slide: 3 } }}
                    passHref
                  >
                    <p className='block px-4 py-2 cursor-pointer'>PRV 15</p>
                  </Link>
                  <Link
                    href={{ pathname: '/cars', query: { slide: 4 } }}
                    passHref
                  >
                    <p className='block px-4 py-2 cursor-pointer'>PRV 16</p>
                  </Link>
                  <Link
                    href={{ pathname: '/cars', query: { slide: 5 } }}
                    passHref
                  >
                    <p className='block px-4 py-2 cursor-pointer'>PRV 17</p>
                  </Link>
                  <Link
                    href={{ pathname: '/cars', query: { slide: 6 } }}
                    passHref
                  >
                    <p className='block px-4 py-2 cursor-pointer'>PRV 18</p>
                  </Link>
                  <Link
                    href={{ pathname: '/cars', query: { slide: 7 } }}
                    passHref
                  >
                    <p className='block px-4 py-2 cursor-pointer'>PRV 19</p>
                  </Link>
                  <Link
                    href={{ pathname: '/cars', query: { slide: 8 } }}
                    passHref
                  >
                    <p className='block px-4 py-2 cursor-pointer'>PRV 20</p>
                  </Link>
                  <Link
                    href={{ pathname: '/cars', query: { slide: 9 } }}
                    passHref
                  >
                    <p className='block px-4 py-2 cursor-pointer'>PRV 21</p>
                  </Link>
                </div>
              </div>
              <div className='relative group'>
                <Link href='/teams/2020' passHref>
                  <p className='text-white hover:text-black px-3 py-2 rounded-md text-sm font-medium cursor-pointer'>
                    Team
                  </p>
                </Link>
                <div className='absolute z-10 hidden bg-black bg-opacity-90 text-white group-hover:block w-48 py-2 mt-1 rounded-md'>
                  <Link href='/teams/2020' passHref>
                    <p className='block px-4 py-2 cursor-pointer'>
                      Team PRV 23
                    </p>
                  </Link>
                  <Link href='/teams/2020' passHref>
                    <p className='block px-4 py-2 cursor-pointer'>
                      Team PRV 22
                    </p>
                  </Link>
                  <Link href='/teams/2020' passHref>
                    <p className='block px-4 py-2 cursor-pointer'>
                      Team PRV 21
                    </p>
                  </Link>
                  <Link href='/teams/2020' passHref>
                    <p className='block px-4 py-2 cursor-pointer'>
                      Team PRV 20
                    </p>
                  </Link>
                  <Link href='/teams/2019' passHref>
                    <p className='block px-4 py-2 cursor-pointer'>
                      Team PRV 19
                    </p>
                  </Link>
                  <Link href='/teams/2018' passHref>
                    <p className='block px-4 py-2 cursor-pointer'>
                      Team PRV 18
                    </p>
                  </Link>
                  <Link href='/teams/2017' passHref>
                    <p className='block px-4 py-2 cursor-pointer'>
                      Team PRV 17
                    </p>
                  </Link>
                  <Link href='/teams/2016' passHref>
                    <p className='block px-4 py-2 cursor-pointer'>
                      Team PRV 16
                    </p>
                  </Link>
                  <Link href='/teams/2015' passHref>
                    <p className='block px-4 py-2 cursor-pointer'>
                      Team PRV 15
                    </p>
                  </Link>
                  <Link href='/teams/2014' passHref>
                    <p className='block px-4 py-2 cursor-pointer'>
                      Team PRV 14
                    </p>
                  </Link>
                  <Link href='/teams/2013' passHref>
                    <p className='block px-4 py-2 cursor-pointer'>
                      Team PRV 13
                    </p>
                  </Link>
                </div>
              </div>
              <div className='relative group'>
                <Link href='/events' passHref>
                  <p className='text-white hover:text-black px-3 py-2 rounded-md text-sm font-medium cursor-pointer'>
                    Events
                  </p>
                </Link>
                <div className='absolute z-10 hidden bg-black bg-opacity-90 text-white group-hover:block w-48 py-2 mt-1 rounded-md'>
                  <Link href='/events' passHref>
                    <p className='block px-4 py-2 cursor-pointer'>
                      FS East 2023
                    </p>
                  </Link>
                  <Link href='/events' passHref>
                    <p className='block px-4 py-2 cursor-pointer'>
                      FS Germany 2023
                    </p>
                  </Link>
                </div>
              </div>
              <div className='relative group'>
                <Link href='/photos' passHref>
                  <p className='text-white hover:text-black px-3 py-2 rounded-md text-sm font-medium cursor-pointer'>
                    Media
                  </p>
                </Link>
                <div className='absolute z-10 hidden bg-black bg-opacity-90 text-white group-hover:block w-48 py-2 mt-1 rounded-md'>
                  <Link href='/photos' passHref>
                    <p className='block px-4 py-2 cursor-pointer'>Photos</p>
                  </Link>
                  <Link href='/videos' passHref>
                    <p className='block px-4 py-2 cursor-pointer'>Videos</p>
                  </Link>
                  <Link href='/articles' passHref>
                    <p className='block px-4 py-2 cursor-pointer'>Articles</p>
                  </Link>
                  <Link href='/linkedin' passHref>
                    <p className='block px-4 py-2 cursor-pointer'>
                      LinkedIn Articles
                    </p>
                  </Link>
                </div>
              </div>
              <Link href='/practivities' passHref>
                <p className='text-white hover:text-black px-3 py-2 rounded-md text-sm font-medium cursor-pointer'>
                  PR Activities
                </p>
              </Link>
              <Link href='/driverless' passHref>
                <p className='text-white hover:text-black px-3 py-2 rounded-md text-sm font-medium cursor-pointer'>
                  Driverless
                </p>
              </Link>
              <Link href='/sponsors' passHref>
                <p className='text-white hover:text-black px-3 py-2 rounded-md text-sm font-medium cursor-pointer'>
                  Our Sponsors
                </p>
              </Link>
              <Link href='/supportus' passHref>
                <p className='text-white hover:text-black px-3 py-2 rounded-md text-sm font-medium cursor-pointer'>
                  Support Us
                </p>
              </Link>
              <Link href='/contactus' passHref>
                <p className='text-white hover:text-black px-3 py-2 rounded-md text-sm font-medium cursor-pointer'>
                  Contact Us
                </p>
              </Link>
            </div>
          </div>
          <div className='-mr-2 flex sm:hidden'>
            <button
              onClick={toggleMenu}
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
            >
              {isOpen ? (
                <XIcon className='block h-6 w-6' aria-hidden='true' />
              ) : (
                <MenuIcon className='block h-6 w-6' aria-hidden='true' />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}
        style={{
          zIndex: '99999999999999999999999999999',
          backgroundColor: 'white',
          width: '50%',
        }}
      >
        <div className='px-2 pt-2 pb-3 space-y-1'>
          <Link href='/' passHref>
            <p className='text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer'>
              Home
            </p>
          </Link>
          <Link href='/cars' passHref>
            <p className='text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer'>
              Cars
            </p>
          </Link>
          <Link href='/teamprv20' passHref>
            <p className='text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer'>
              Team
            </p>
          </Link>
          <Link href='/events' passHref>
            <p className='text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer'>
              Events
            </p>
          </Link>
          <Link href='/photos' passHref>
            <p className='text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer'>
              Media
            </p>
          </Link>
          <Link href='/practivities' passHref>
            <p className='text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer'>
              PR Activities
            </p>
          </Link>
          <Link href='/driverless' passHref>
            <p className='text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer'>
              Driverless
            </p>
          </Link>
          <Link href='/sponsors' passHref>
            <p className='text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer'>
              Our Sponsors
            </p>
          </Link>
          <Link href='/supportus' passHref>
            <p className='text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer'>
              Support Us
            </p>
          </Link>
          <Link href='/contactus' passHref>
            <p className='text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer'>
              Contact Us
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
