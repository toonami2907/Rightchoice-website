'use client'
import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { TypeAnimation } from "react-type-animation";
import Effiongmichael from '../public/Effiongmichael.jpg'
import { Award, Fingerprint, Star } from 'lucide-react'

const HomePage = () => {
    return (
      <section className="relative  bg-bluegray-50">
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-xl ">
          <div className="absolute top-0 w-full bg-center bg-contain h-full bg-[url('../public/Effiongmichael.jpg')]">
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                  className="pr-12"
                >
                  <motion.h1
                    variants={fadeIn("up", "tween", 0.2, 1)}
                    className="text-white font-semibold text-5xl items-center"
                  >
                    Welcome To Rightchoice Travels
                    {/* <TypeAnimation
                      sequence={[
                        "Welcome to Rightchoice travels.", 1000,
                        
                    ]}
                      wrapper="span"
                      speed={60}
                      deletionSpeed={70}
                      repeat={Infinity}
                    /> */}
                  </motion.h1>
                  <p className="mt-4 text-lg text-gray-200 font-mono">
                    where your travelling dreams can come to pass..
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px transform translateZ(0px)">
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
        <section className="pb-10 bg-gray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg transition duration-300 transform hover:scale-110">
                  <div className="px-4 py-5 flex-auto ">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <Award />
                    </div>
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-gray-500">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg transition duration-300 transform hover:scale-110">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <Star />
                    </div>
                    <h6 className="text-xl font-semibold">Free Revisions</h6>
                    <p className="mt-2 mb-4 text-gray-500">
                     At Rightchoice Travel and Tours, we value your Opinion. Your Feedback is a vital compass guiding to Provide the best possible service. Share your Experience
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg transition duration-300 transform hover:scale-110">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <Fingerprint />
                    </div>
                    <h6 className="text-xl font-semibold">Verified Company</h6>
                    <p className="mt-2 mb-4 text-gray-500">
                      As a CAC approved  and verified Company, we are adhere to the highest standards of professionalism and legal requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
}

export default HomePage