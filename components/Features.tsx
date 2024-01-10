import React from 'react'

const Features = () => {
  return (
      <section className='flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 '>
          <article className='sm:w-1/2'>    
              <h2 className='text-4xl font-bold text-center text-blue-600 sm:text-5xl sm:text-center sm:items-center sm:justify-center dark:text-white sm:mb-12'>
                  Why work with us ?.
              </h2>
          <p className='sm:text-5xl mt-0 text-muted-foreground text-medium  sm:justify-center sm:items-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vitae pariatur dolores eveniet aperiam dicta corrupti nostrum eum quo nemo!
          </p>
          </article>
          <img src='/myhero.png' alt='hero' className='w-1/2'/>
    </section>
  )
}

export default Features