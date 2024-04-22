import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <div className="flex-shrink-0">
            <Link href="/" passHref>
              <img
                className="h-8 w-auto cursor-pointer"
                src="/img/general/logowhite.png"
                alt="Flagstone logo"
              />
            </Link>
          </div>

          <div className="hidden sm:block">
            <div className="flex space-x-4">
              <Link href="/" passHref>
                <p className="text-white hover:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                  Home
                </p>
              </Link>
              <div className="relative group">
                <Link href="/cars.php?select=10" passHref>
                  <p className="text-white hover:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium focus:outline-none cursor-pointer">
                    Cars
                  </p>
                </Link>
                <div className="absolute z-10 hidden bg-black bg-opacity-90 text-white group-hover:block w-48 py-2 mt-1 rounded-md">
                  <Link href="/cars.php?select=10" passHref>
                    <p className="block px-4 py-2 cursor-pointer">PRV 23</p>
                  </Link>
                  <Link href="/cars.php?select=9" passHref>
                    <p className="block px-4 py-2 cursor-pointer">PRV 21</p>
                  </Link>

                </div>
              </div>
              <div className="relative group">
                <Link href="/teamprv20.php" passHref>
                  <p className="text-white hover:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium focus:outline-none cursor-pointer">
                    Team
                  </p>
                </Link>
                <div className="absolute z-10 hidden bg-black bg-opacity-90 text-white group-hover:block w-48 py-2 mt-1 rounded-md">
                  <Link href="/teamprv20.php" passHref>
                    <p className="block px-4 py-2 cursor-pointer">Team PRV 23</p>
                  </Link>
                  <Link href="/teamprv20.php" passHref>
                    <p className="block px-4 py-2 cursor-pointer">Team PRV 22</p>
                  </Link>

                </div>
              </div>
              <div className="relative group">
                <Link href="/events.php#cd_block16" passHref>
                  <p className="text-white hover:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium focus:outline-none cursor-pointer">
                    Events
                  </p>
                </Link>
                <div className="absolute z-10 hidden bg-black bg-opacity-90 text-white group-hover:block w-48 py-2 mt-1 rounded-md">
                  <Link href="/events.php#cd_block16" passHref>
                    <p className="block px-4 py-2 cursor-pointer">FS East 2023</p>
                  </Link>
                  <Link href="/events.php#cd_block15" passHref>
                    <p className="block px-4 py-2 cursor-pointer">FS Germany 2023</p>
                  </Link>

                </div>
              </div>
              <Link href="/media.php" passHref>
                <p className="text-white hover:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                  Media
                </p>
              </Link>
              <Link href="/practivities.php" passHref>
                <p className="text-white hover:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                  PR Activities
                </p>
              </Link>
              <Link href="/driverless.php" passHref>
                <p className="text-white hover:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                  Driverless
                </p>
              </Link>
              <Link href="/sponsors.php" passHref>
                <p className="text-white hover:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                  Our Sponsors
                </p>
              </Link>
              <Link href="/contactus.php" passHref>
                <p className="text-white hover:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                  Contact Us
                </p>
              </Link>
              <Link href="/supportus.php" passHref>
                <p className="text-white hover:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                  Support Us
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;