import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'

const Study = () => {
  return (
    <MaxWidthWrapper>

      <section className='bg-gray-50 flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 border-t border-gray-200'>
          <article className='sm:w-1/2 '>    
              <h2 className='text-4xl font-bold lg:mr-40 text-blue-600 sm:text-5xl sm:text-center sm:items-center sm:justify-center dark:text-white sm:mb-12'>
                    Admission Processing.
              </h2>
          <p className='sm:text-5xl mt-0 text-muted-foreground  text-center text-medium sm:justify-center sm:items-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vitae pariatur dolores eveniet aperiam dicta corrupti nostrum eum quo nemo!
          </p>
          </article>
          <img src='/graduate1.png' alt='hero' className='h-auto w-1/2 '/>
    </section>
    </MaxWidthWrapper>
  )
}

export default Study