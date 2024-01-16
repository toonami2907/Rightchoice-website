import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'

const HomeCta = () => {
    return (
      <MaxWidthWrapper>      
      <div className='bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center'>
          <div className='w-full py-12 px-4 sm:px-6 lg:py-16 z-20'>
              <h2 className='text-3xl font-extrabold text-black dark:text-white sm:text-4xl'>
                  <span className='block'> Travel with Rightchoice Travels</span>
              </h2>
              <p className='text-md mt-4 text-gray-500'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident natus sunt, esse a eius qui sequi magnam reiciendis ipsa
                        quae numquam aspernatur. Soluta laborum beatae fugit harum iusto culpa molestias?</p>
                    <div className='lg:mt-0 lg:flex-shrink-0'>
                        <div className='mt-12 inline-block rounded-md shadow'>
                            <button type='button' className='py-2 px-4 bg-green-500 hover:bg-green-700 focus:ring-green-500
                            focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold 
                            shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg'>
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-8 p-8 lg:p-24 '>
                    <img src='/beach1.jpg' alt='image' className='w-2/2 rounded-lg'/>
                </div>
                <div>
                    <img src='/beach2.jpg' alt='image' className='mb-8 rounded-lg'/>
                    <img src='/Effiongmichael.jpg' alt='image' className=' mb-7 rounded-lg'/>
                </div>
    </div>
      </MaxWidthWrapper>
  )
}

export default HomeCta