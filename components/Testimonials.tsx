import React from 'react'

const Testimonials = () => {
    return (
    
      <div className='my-6 font-[sans-serif] '>
          <div className='mb-10 text-center  max-w-3xl mx-auto'>
              <h2 className='text-4xl font-extrabold text-blue-600'>TESTIMONIALS</h2>
              <p className='text-sm text-[#333] mt-4 leading-relaxed'> Words of Satifaction from our reliable clients. Testimonial showcasing the Authentic Experience shared by our valued clients and unwavering Trust in our services.</p>
          </div>
          <div className='grid md:grid-cols-3 md:gap-6 max-md:gap-10 max-w-6xl mx-auto'>
              <div className='max-w-[350px] h-auto sm:p-8 p-4 rounded-md mx-auto transition duration-300 transform hover:scale-110 bg-green-200 relative'>
                  {/* <img src='/Effiongmichael.jpg' className='w-14 h-14 rounded-full absolute right-0 left-0 mx-auto -top-7'/> */}
                  <div className='mt-8 text-center '>
                      <p className='text-sm text-[#333] leading-relaxed'>Efficient and reliable. The entire trip was well-organized, and we faced no issues during our travels, Highly recommend this travel agency.</p>
                      <h4 className='text-base whitespace-nowrap font-extrabold mt-8'>(Kingsley Anaekwe)</h4>
                  </div>     
                  </div>
              <div className='max-w-[350px] h-auto sm:p-8 p-4 rounded-md mx-auto transition duration-300 transform hover:scale-110 bg-green-200 relative'>
                   <div className='mt-8 text-center '>
                      <p className='text-sm text-[#333] leading-relaxed'>Great attention to details. from flights to accommodations, every aspect of our journey was carefully planned, making our vacation stress-free</p>
                      <h4 className='text-base whitespace-nowrap font-extrabold mt-8'>(Ebunolorun Ayodeji)</h4>
              </div>
                </div>
              <div className='max-w-[350px] h-auto sm:p-8 p-4 rounded-md mx-auto transition duration-300 transform hover:scale-110 bg-green-200 relative'>
                   <div className='mt-8 text-center '>
                      <p className='text-sm text-[#333] leading-relaxed'>Exceptional service! This travel agency went above and beyond to create a personalized itinerary that exceeded our expectation.</p>
                      <h4 className='text-base whitespace-nowrap font-extrabold mt-8'>(Karachi Ezuruike)</h4>
              </div>
                </div>
              <div className='max-w-[350px] h-auto sm:p-8 p-4 rounded-md mx-auto transition duration-300 transform hover:scale-110 bg-green-200 relative'>
                   <div className='mt-8 text-center '>
                      <p className='text-sm text-[#333] leading-relaxed'>&#128571; Top-Ntch travel agency, proffessionalism and accurate, 100 percent legit.</p>
                      <h4 className='text-base whitespace-nowrap font-extrabold mt-8'>(Vivian Miracle)</h4>
              </div>
                </div>
                
     </div>
    </div>
  )
}

export default Testimonials