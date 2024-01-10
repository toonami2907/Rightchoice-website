import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper';
import Link from 'next/link';
import { Button, buttonVariants } from './button';

const Section = () => {
  return (
    <MaxWidthWrapper>
      <div className=" py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold -tracking-tight text-gray-900 sm:text-6xl">
          Your Homepage for high-quality{" "}
          <span className="text-blue-600"> and reliable services</span>.
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Welcome to Rightchoice. Where We turn your traveling dreams into
          Reality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6 ">
          {/* <Link href='/products' className='bg-blue-700 hover:bg-blue-800 text-white font-medium px-5 py-2.5 dark:hover:bg-blue-700 dark:bg-blue-600 focus:ring-4 focus:ring-blue-300 rounded-lg'>
          Explore More
        </Link> */}
          <Link href="/products" className={buttonVariants()}>
            Explore More
          </Link>
          <Button variant="ghost">Contact Us &rarr;</Button>
        </div>
        {/* <Image src='/myhero.png' alt='hero' width={50} height={50} className='sm:w-1/2'/> */}
      </div>
      {/* <h1 className='text-4xl font-extrabold leading-none tracking-tight text-gray-900 md-'>Our Service</h1> */}
    </MaxWidthWrapper>
  );
}

export default Section