import { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
// import { Link } from "react-scroll";
import Link from 'next/link';
import * as ethers from 'ethers';
import Image from 'next/image';
import Logo from '../public/fin-logo.png';
//import { Button } from 'react-scroll';
import { Button } from 'antd';
import SearchBar from './Searchbar';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const loadAccountData = async () => {};
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    loadAccountData();
  }, []);
  return (
    <div>
      {isReady && (
        <div>
          {/* <nav className=" shadow-sm fixed w-full z-10">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center  mx-20  justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 "> */}
          <nav className=" shadow-sm w-full z-22">
            <div className="w-full">
              <div className="flex items-center h-20 w-full">
                <div className="flex items-center  mx-20  justify-between w-full">
                  <Link
                    href="/"
                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <div className="flex justify-center items-center flex-shrink-0 ">
                                            <img className="h-52 w-52 " src="/logo.png"></img>
                    
                      {/* <h1 className=" font-bold text-xl cursor-pointer">
                    <span className="text-textblue ">Gnosis</span>
                  </h1> */}
                    </div>
                  </Link>
                  {window.location.pathname === '/' ? null : <SearchBar />}

                  <div>
                    <Button style={{ marginRight: '10px' }}>List Dao</Button>
                    <Button style={{ backgroundColor: '#fa5036', color: '#fff' }}>Premium</Button>
                  </div>
                </div>
              </div>
            </div>

            <Transition
              show={isOpen}
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {(ref) => (
                <div className="md:hidden" id="mobile-menu">
                  <div ref={ref} className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link
                      href="/"
                      className="cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black"
                    >
                      Home
                    </Link>
                    <Link
                      href="/swap"
                      className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      add
                    </Link>
                  </div>
                </div>
              )}
            </Transition>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Navbar;
