import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <section className='bg-white dark:bg-gray-900 min-h-screen'>
          <div className='container py-12 px-12 mx-auto'>
              <div>
                  <p className='font-medium text-blue-500 dark:text-blue-500 '>Contact Us</p>
                  <h1 className='mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white'>Get in touch</h1>
                  <p className='mt-3 text-gray-500 dark:text-gray-400'>Our Friendly Staff are always available to Chat</p>
              </div>
          </div>
          <div className='grid grid-cols-1 gap-12  md:grid-cols-2 lg:grid-cols-3'>
              <div className='ml-10'>
              <span className='inline-block p-3  text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800'>
                  <Mail className='w-6 h-6'/>
                  </span>  
              <h2 className='mt-4 text-lg font-medium text-gray-800 dark:text-white'>Email</h2> 
              <p className='mt-2 text-gray-500 dark:text-gray-400'>We are here to help</p>   
              <p className='mt-2 text-blue-500 dark:text-blue-400'>Rightchoicetravel2@gmail.com</p>   
              </div>
              <div className='ml-10'>
              <span className='inline-block p-3  text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800'>
                  <MapPin className='w-6 h-6'/>
                  </span>  
              <h2 className='mt-4 text-lg font-medium text-gray-800 dark:text-white'>Office</h2> 
              <p className='mt-2 text-gray-500 dark:text-gray-400'>Come say hello at our office HQ</p>   
              <p className='mt-2 text-blue-500 dark:text-blue-400'>86 Iyesi Road, Otta, Ogun State, Nigeria.</p>   
              </div>
              <div className='ml-10'>
              <span className='inline-block p-3  text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800'>
                  <Phone className='w-6 h-6'/>
                  </span>  
              <h2 className='mt-4 text-lg font-medium text-gray-800 dark:text-white'>Call Now</h2> 
              <p className='mt-2 text-gray-500 dark:text-gray-400'>Mon-Fri from 8am to 5pm</p>   
              <p className='mt-2 text-blue-500 dark:text-blue-400'>+234816295822</p>   
              </div>
          </div>
    </section>
  )
}

export default Contact 