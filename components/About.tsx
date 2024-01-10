import React from 'react'

const About = () => {
    return (
      <div className="text-center p-8  my-20" >
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-600">
          Why to choose Us?
        </h2>
        <p className='my-5 text-lg sm:text-xl md:text-2xl lg:text-2xl text-muted-foreground text-center '>
          At Rightchoice travel and Tours, we take pride in providing unparalleled services that revolve around four principle:
          Reliable communication, Low Prices, a commitment to error free documentation, and meticulous time management.
        </p>
        <div className="flex flex-wrap items-center mt-20  text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="/about2.jpg"
              alt="gem"
              className="inline-bock rounded "
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              Reliable Communication
            </h3>
            <p className="sm:text-lg mt-6">
              Our dedication to reliable communication ensures that clients are kept well-informed throughtout their journey. From the moment of enqiury
              to the completion of their travel, our responsive team is readily available to address enquries, provide updates and offer assistance.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center mt-20 text-left md:text-center ">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="/lowprice.jpg"
              alt="gem2"
              className="inline-block rounded "
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              Low Prices
            </h3>
            <p className="sm:text-lg mt-6">
              We understand the importance of affordabilty in travel. At Rightchoice Travel and Tours , we strive to offer competitive
              and budget-friendly packages without compromising on Quality. Our commitment to provide cost-effective solution enables travelers to explore the world without breaking the bank.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center mt-20 text-left md:text-center ">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="/about3.svg"
              alt="gem2"
              className="inline-block rounded "
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4  text-center md:text-left lg:pr-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              No Document Error
            </h3>
            <p className="sm:text-lg mt-6">
              Accuracy is paramount in the travel industry.Also Note, that we have no power over approval of visa, but we work on our document rigorously to enhance fast approval from the embassey.
              Our rigorous processes and attention to detail elimate the possibility of document errors, ensuring a hassle-free travel experience
              for our clients.
              From Visas to itineraries, every document is meticulously checkes to guarantee accurancy and compilance with all requirements.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center mt-20 text-left md:text-center ">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="/about1.svg"
              alt="gem2"
              className="inline-block rounded "
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              Time Mamagement
            </h3>
            <p className="sm:text-lg mt-6">
              Time is the essence, especially in the realm of travel. Our agency prioritizes efficient time management to optimize every aspect of our servicess.
              From prompt responses to timely bookings, we work deligently to ensure that our clients' schedules are met seemlessly, allowing them to make the most of their travel experience.
            </p>
          </div>
        </div>
      </div>
    );
}

export default About