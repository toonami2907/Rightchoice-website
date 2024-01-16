import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const SecondCta = () => {
  return (
    <MaxWidthWrapper>
      <div className="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
        <div className="container relative flex px-6 py-16 mx-auto">
          <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
                      <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white" />
                      <h1 className='flex flex-col text-6xl font-black leading-none text-gray-800 uppercase sm:text-8xl dark:text-white'>
                          TRAVEL ON <span className='text-5xl sm:text-7xl'/> TIME
                      </h1>
                      <p className='text-sm text-gray-700 sm:text-base dark:text-white Poppins'>
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio est qui fugit ducimus consequuntur dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, molestias.
                      </p>
                      <div className='flex mt-8'>
                          <Link href='#' className=' flex px-4 py-2 mr-4 text-white uppercase bg-blue-500 border-2 border-transparent rounded-lg text-md hover:bg-blue-400'>
                          Book nOW <ArrowRight/>
                          </Link> 
                          <Link href='#' className=' flex px-4 py-2  text-blue-500 uppercase bg-transparent border-2 border-blue-700 rounded-lg text-md hover:bg-blue-500 hover:text-white'>
                          Explore more <ArrowRight/>
                          </Link> 
                      </div>
                  </div>
                  <div className='relative hidden sm:block sm:w-1/3 lg:w-3/5'>
                      <img src='/travelling.jpg' alt='image' className='max-w-xs m-auto md:max-w-sm'/>
                  </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default SecondCta