import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
      <MaxWidthWrapper>
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                  <div>
                      <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'> COMPANY </h2>
                      <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                          <li className='mb-4'>
                            <Link href='/' className='hover:underline'>Home</Link>
                          </li>
                          <li className='mb-4'>
                            <Link href='/' className='hover:underline'>About Us</Link>
                          </li>
                          <li className='mb-4'>
                            <Link href='/' className='hover:underline'>Payement Methods</Link>
                          </li>
                          <li className='mb-4'>
                            <Link href='/' className='hover:underline'>Mission and Vision</Link>
                          </li>
                      </ul>
                  </div>    
                  <div>
                      <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'> SERVICE </h2>
                      <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                          <li className='mb-4'>
                            <Link href='/' className='hover:underline'>Visa processing & Requirement</Link>
                          </li>
                          <li className='mb-4'>
                            <Link href='/' className='hover:underline'>Flight Reservation</Link>
                          </li>
                          <li className='mb-4'>
                            <Link href='/' className='hover:underline'>Hotel Reservation</Link>
                          </li>
                          <li className='mb-4'>
                            <Link href='/' className='hover:underline'>Proof of Funds </Link>
                          </li>
                      </ul>
                  </div>    
                  <div>
                      <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'> STUDY  </h2>
                      <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                          <li className='mb-4'>
                            <Link href='/' className='hover:underline'>Study in Canada</Link>
                          </li>
                          <li className='mb-4'>
                            <Link href='/' className='hover:underline'>Study in North Cyprus</Link>
                          </li>
                          <li className='mb-4'>
                            <Link href='/' className='hover:underline'>Study in UK</Link>
                          </li>
                          <li className='mb-4'>
                            <Link href='/' className='hover:underline'>Study in France</Link>
                          </li>
                      </ul>
                  </div>    
                  <div>
                      <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'> CONTACT US  </h2>
                      <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                          <li className='mb-4'>
                            <Link href='/' className='hover:underline flex'><Twitter className='mx-2'/> Twitter</Link>
                          </li>
                          <li className='mb-4'>
                            <Link href='/' className='hover:underline flex'><Instagram className='mx-2'/> Instagram</Link>
                          </li>
                          <li className='mb-4'>
                            <Link href='/' className='hover:underline flex '><Linkedin className='mx-2'/> LinkedIn</Link>
                          </li>
                          <li className='mb-4'>
                            <Link href='/' className='hover:underline flex'><Facebook className='mx-2'/> Facebook</Link>
                          </li>
                      </ul>
                  </div>    
        </div>
      </div>
    </footer>
      </MaxWidthWrapper>
  );
}

export default Footer