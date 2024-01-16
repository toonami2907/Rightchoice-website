import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image'
import Link from 'next/link'
 
const products = [
    {
    id: 1,
    name: ' Visa & Study in Colombia',
    href: '/',
    imageSrc: '/Colombia.jpg',
    imageAlt: 'This is a alternative text for the products image',
    a: 'Learm more',
    aLink: '/'    
    },
    {
    id: 2,
    name: 'Visa To Albania',
    href: '/',
    imageSrc: '/albania.jpg',
    imageAlt: 'This is a alternative text for the products image',
    a: 'Learm more',
    aLink: '/'    
    },
    {
    id: 3,
    name: 'Qatar freelance visa',
    href: '/',
    imageSrc: '/QATAR FREELANCE VISA.jpg',
    imageAlt: 'This is a alternative text for the products image',
    a: 'Learm more',
    aLink: '/'    
    },
    {
    id: 4,
    name: 'Study in scotland',
    href: '/',
    imageSrc: '/8.jpg',
    imageAlt: 'This is a alternative text for the products image',
    a: 'Learm more',
    aLink: '/'    
    },
    {
    id: 5,
    name: 'Study in UK',
    href: '/',
    imageSrc: '/9.jpg',
    imageAlt: 'This is a alternative text for the products image',
    a: 'Learm more',
    aLink: '/'    
    },
    {
    id: 6,
    name: 'Spend the Holiday well',
    href: '/',
    imageSrc: '/3.jpg',
    imageAlt: 'This is a alternative text for the products image',
    a: 'Learm more',
    aLink: '/'    
    }, 
    {
    id: 7,
    name: 'Get Omar visa ',
    href: '/11',
    imageSrc: '/easy japa.jpg',
    imageAlt: 'This is a alternative text for the products image',
    a: 'Learm more',
    aLink: '/'    
    },
]
const HotOffers = () => {
  return (
    <MaxWidthWrapper>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="mx-auto text-center text-2xl font-bold mt-9 lex flex-col items-center max-w-3xl bg-white dark:bg-gray-900" >
            OUR HOT OFFERS
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group-relative">
                <div className="aspect-h-1 aspect-1 w-50 overflow-hidden rounded-md bg-gray-200 lg:aspect-none transition duration-300 transform hover:scale-110 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-[49] w-[49]  sm:h-[35] sm:w-[35] object-cover object-center lg:w-full"
                  />
                  <div className='mt-4 flex justify-between'>
                    <div>
                      <h3 className='text-2xl text-gray-900'>
                        <Link href={product.href}>
                          <span className='absolute inset-2' />
                          {product.name}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default HotOffers