import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import MaxWidthWrapper from './MaxWidthWrapper'
import { Plane } from 'lucide-react';

const Services = () => {
  return (
    <MaxWidthWrapper>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className=" mx-auto text-center flex flex-col items-center max-w-3xl bg-white dark:bg-gray-900"
      >
        <motion.h2
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-2xl font-bold font-mono -tracking-tight text-gray-600 sm:text-4xl uppercase border-b-4 border-red-300 m-4 inline-block"
        >
          Our services include{" "}
        </motion.h2>
      </motion.div>
      <section className="py-14 flex flex-col">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex grid grid-cols-1">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl"
            >
              <motion.p
                variants={fadeIn("up", "tween", 0.2, 1)}
                className="text-gray-800 text-3xl font-mono sm:text-4xl"
              >
                Visa | Visa Assistance
              </motion.p>
              <motion.p
                variants={fadeIn("up", "tween", 0.2, 1)}
                className="mt-3 text-gray-600"
              >
                Rightchoioce Travels & Tours provides visa assistance, visa
                support, documentations and we also help our clients to obtain a
                valid visa to travel to countries around the world, and other
                visa related services to individuals and corporate clients
                across industries. We have built a trusted corporate portfolio
                across embassies and consulates in Nigeria and beyond, and this
                gives us a kind of unparalleled leverage over the competition.
              </motion.p>
              <motion.a
                variants={fadeIn("up", "tween", 0.2, 1)}
                href="javascript:void(0)"
                className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.a>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl"
            >
              <motion.p
                variants={fadeIn("up", "tween", 0.2, 1)}
                className="text-gray-800 text-3xl font-mono sm:text-4xl"
              >
                Flight Booking
              </motion.p>
              <motion.p
                variants={fadeIn("up", "tween", 0.2, 1)}
                className="mt-3 text-gray-600"
              >
                We have a robust online flight booking system which gives us an
                edge at booking local and international flights at competitive
                prices. We provide travel advisory services and a structured
                travel itinerary for clients to suit their interests. We also
                handle changes and other issues that may pop up before or during
                the trip.
              </motion.p>
              <motion.a
                variants={fadeIn("up", "tween", 0.2, 1)}
                href="javascript:void(0)"
                className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.a>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl"
            >
              <motion.p
                variants={fadeIn("up", "tween", 0.2, 1)}
                className="text-gray-800 text-3xl font-mono sm:text-4xl"
              >
                Study Aboard Package
              </motion.p>
              <motion.p
                variants={fadeIn("up", "tween", 0.2, 1)}
                className="mt-3 text-gray-600"
              >
                Rightchoioce Travels and Tours is an official representative of
                a wide range of universities and colleges worldwide. We have
                study abroad packages for countries like Turkey, UK, Cyprus,
                Canada, Scotland, etc. Our Study Abroad packages include
                admission processing, visa support, fees payment, scholarship
                abroad, etc. We have a track record of successful admission
                processings. When you buy any of our study abroad package, with
                the right document and our assistance, your admission is
                guaranteed..
              </motion.p>
              <motion.a
                variants={fadeIn("up", "tween", 0.2, 1)}
                href="javascript:void(0)"
                className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </div>
      {/* <h2 className='text-4xl items-center ml-10 pt-5'> View More </h2> */}
      </section>
    </MaxWidthWrapper>
  );
}

export default Services