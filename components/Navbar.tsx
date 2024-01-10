'use client'
import React, { useState, useRef, } from 'react'
import { useRouter } from 'next/navigation'
import {Transition} from '@headlessui/react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useOnClickOutside } from '@/hooks/use-on-click-outside'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navRef = useRef<HTMLDivElement | null>(null)

  useOnClickOutside(navRef, () => setIsOpen(false))
  
  return (
    <div className="bg-white lg:sticky z-50 top-0 inset-x-0 h-16">
      <header className="w-full">
        <MaxWidthWrapper className="block items-center h-full w-full">
          <div className="border-full border-gray-200">
            <div className="flex items items-center my-5  justify-between w-full">
              <div className="cursor-pointer">
                <Link href="/">
                  <img className="h-10 w-10" src="/global-network.png" />
                </Link>
              </div>
              <div className="hidden md:block" ref={navRef}>
                <div className="ml-10 flex items-baseline space-x-4 justify-end">
                  <Link
                    href="/"
                    className="cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black"
                  >
                    Home
                  </Link>
                  <Link
                    href="/About"
                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-mf text-sm font-medium"
                  >
                    About
                  </Link>
                  <Link
                    href="/Contact"
                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-mf text-sm font-medium"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/"
                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-mf text-sm font-medium"
                  >
                    Payment Methods
                  </Link>
                  <div className="dropdown cursor-pointer  hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    <button className="dropbtn">Services</button>
                    <div className="dropdown-content">
                      <Link
                        href="/Visas"
                        className="text-muted-foreground text-base"
                      >
                        Visa and processing
                      </Link>
                      <Link
                        href="/Flight"
                        className="text-muted-foreground text-base"
                      >
                        Filght reseervation
                      </Link>
                      <Link
                        href="/Hotel"
                        className="text-muted-foreground text-base"
                      >
                        Hotel Reservation
                      </Link>
                      <Link
                        href="/Study"
                        className="text-muted-foreground text-base"
                      >
                        Study Aboard
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mr-10 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-600 focus:outline-none
             focus:ring-offset-2 focus:ring-offset-blue-800  focus:ring-white"
                >
                  <span className="sr-only ">Open Main Menu</span>
                  {!isOpen ? (
                    <Menu className="block h-6 w-6" />
                  ) : (
                    <X className="block h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
            <Transition
              show={isOpen}
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 scale-95 "
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {(ref) => (
                <div className="md:hidden ">
                  <div
                    ref={ref}
                    className="bg-white px-2  pb-3 space-y-1 sm:px-3"
                  >
                    <Link
                      href="/"
                      className="cursor-pointer  hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Home
                    </Link>
                  </div>
                  <div
                    ref={ref}
                    className="bg-white px-2  pb-3 space-y-1 sm:px-3"
                  >
                    <Link
                      href="/About"
                      className="cursor-pointer  hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      About
                    </Link>
                  </div>
                  <div
                    ref={ref}
                    className="bg-white px-2  pb-3 space-y-1 sm:px-3"
                  >
                    <Link
                      href="/Contact"
                      className="cursor-pointer  hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Contact Us
                    </Link>
                  </div>
                  <div
                    ref={ref}
                    className="bg-white px-2  pb-3 space-y-1 sm:px-3"
                  >
                    <Link
                      href="/"
                      className="cursor-pointer  hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Payment Methods
                    </Link>
                    <div className="dropdown cursor-pointer  hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      <button className="dropbtn">Services</button>
                      <div className="dropdown-content">
                        <Link
                          href="/Visas"
                          className="text-muted-foreground text-base"
                        >
                          Visa and processing
                        </Link>
                        <Link
                          href="/Flight"
                          className="text-muted-foreground text-base"
                        >
                          Filght reseervation
                        </Link>
                        <Link
                          href="/Hotel"
                          className="text-muted-foreground text-base"
                        >
                          Hotel Reservation
                        </Link>
                        <Link
                          href="/Study"
                          className="text-muted-foreground text-base"
                        >
                          Study Aboard
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Transition>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
}

export default Navbar