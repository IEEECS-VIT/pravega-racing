
import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
  return (

    <nav className="bg-gray-800 fixed" style={{ borderBottom: '1px solid black', backgroundColor: 'rgba(0,0,0,0)', zIndex: 10000, width: '100%' }}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">


          <nav
            className='bg-gray-800 fixed'
            style={{
              borderBottom: '1px solid black',
              backgroundColor: 'rgba(0,0,0,0)',
              zIndex: 10000,
              width: '100%',
            }}
          >
            <div className='mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='flex items-center justify-between h-16'>
                <div className='flex-shrink-0'>
                  <Link href='/' passHref>
                    <Image
                      src='/images/general/logowhite.png'
                      alt='Flagstone logo'
                      width={500} // Adjust the width and height as needed
                      height={300} // Adjust the height as needed
                      className='h-8 w-auto cursor-pointer'


                    />
                  </Link>
                </div>



                <div className='hidden sm:block mt-5' style={{ marginTop: '29.4px' }}>
                  <div className='flex space-x-4 '>
                    <Link href='/' passHref>
                      <p className='text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer'>
                        Home
                      </p>
                    </Link>
                    <div className='relative group'>
                      <Link href='/cars' passHref>
                        <p className='text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none cursor-pointer'>
                          Cars
                        </p>
                      </Link>
                      <div className='absolute z-10 hidden bg-black bg-opacity-90 text-white group-hover:block w-48 py-2 rounded-md'>
                        <Link href='/cars' passHref>
                          <p className='block px-4 py-2 cursor-pointer'>PRV 23</p>
                        </Link>
                        <Link href='/cars' passHref>
                          <p className='block px-4 py-2 cursor-pointer'>PRV 21</p>
                        </Link>
                      </div>
                    </div>
                    <div className='relative group'>
                      <Link href='/teamprv20' passHref>
                        <p className='text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none cursor-pointer'>
                          Team
                        </p>
                      </Link>
                      <div className='absolute z-10 hidden bg-black bg-opacity-90 text-white group-hover:block w-48 py-2 mt-1 rounded-md'>
                        <Link href='/teamprv20' passHref>
                          <p className='block px-4 py-2 cursor-pointer'>
                            Team PRV 23
                          </p>
                        </Link>
                        <Link href='/teamprv20' passHref>
                          <p className='block px-4 py-2 cursor-pointer'>
                            Team PRV 22
                          </p>
                        </Link>
                        <Link href='/teamprv20' passHref>
                          <p className='block px-4 py-2 cursor-pointer'>
                            Team PRV 21
                          </p>
                        </Link>
                        <Link href='/teamprv20' passHref>
                          <p className='block px-4 py-2 cursor-pointer'>
                            Team PRV 20
                          </p>
                        </Link>
                        <Link href='/teamprv19' passHref>
                          <p className='block px-4 py-2 cursor-pointer'>
                            Team PRV 19
                          </p>
                        </Link>
                        <Link href='/teamprv18' passHref>
                          <p className='block px-4 py-2 cursor-pointer'>
                            Team PRV 18
                          </p>
                        </Link>
                        <Link href='/teamprv17' passHref>
                          <p className='block px-4 py-2 cursor-pointer'>
                            Team PRV 17
                          </p>
                        </Link>
                        <Link href='/teamprv16' passHref>
                          <p className='block px-4 py-2 cursor-pointer'>
                            Team PRV 16
                          </p>
                        </Link>
                        <Link href='/teamprv15' passHref>
                          <p className='block px-4 py-2 cursor-pointer'>
                            Team PRV 15
                          </p>
                        </Link>
                        <Link href='/teamprv14' passHref>
                          <p className='block px-4 py-2 cursor-pointer'>
                            Team PRV 14
                          </p>
                        </Link>
                        <Link href='/teamprv13' passHref>
                          <p className='block px-4 py-2 cursor-pointer'>
                            Team PRV 13
                          </p>
                        </Link>
                      </div>
                    </div>
                    <div className="relative group">
                      <Link href="/events" passHref>
                        <p className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none cursor-pointer">
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
                    <Link href='/media' passHref>
                      <p className='text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer'>
                        Media
                      </p>
                    </Link>
                    <Link href='/practivities' passHref>
                      <p className='text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer'>
                        PR Activities
                      </p>
                    </Link>
                    <Link href='/driverless' passHref>
                      <p className='text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer'>
                        Driverless
                      </p>
                    </Link>
                    <Link href='/sponsors' passHref>
                      <p className='text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer'>
                        Our Sponsors
                      </p>
                    </Link>
                    <Link href='/contactus' passHref>
                      <p className='text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer'>
                        Contact Us
                      </p>
                    </Link>
                    <Link href='/supportus' passHref>
                      <p className='text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer'>

                        Support Us
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Nav;