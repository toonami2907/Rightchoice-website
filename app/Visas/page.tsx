'use client'
import { ActionButton } from '@/components/DownTestimonials';
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link';
import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";


const page = () => {
  return (
    <MaxWidthWrapper>
      <div className="mx-7">
        <h2 className="text-2xl font-extrabold dark:text-white my-5 Poppins">
          VISA ASSISTANCE | DOCUMENTATIONS | VISA SUPPORT{" "}
        </h2>
        <p className="my-4 text-lg text-muted-foreground inter ">
          {" "}
          We assist our clients to obtain visa - Our viss type range from
          short-stay or tourist visas, business visas, electronic Visas and
          medicals visas.{" "}
        </p>
        <button
          className="text-orange-500 bg-white hover:text-white hover:bg-orange-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm 
      px-5 Poppins py-2.5  me-2 mb-2 dark:bg-white dark:hover:bg-gray-200 focus:outline-none my-5 Poppins dark:focus:ring-blue-800 border-solid border-2 border-orange-500 flex"
        >
          VIEW OUR APPROVED VISAS
          <ArrowRight />
        </button>
        <p className="my-5 Poppins text-lg text-muted-foreground font-extralight">
          Rightchoice Travels & Tours provides visa assistance, visa support,
          documentations and we also help our clients to obtain a valid visa to
          treavel around the world, and other visa related services to
          individuals and corporate clients across industries. We have built a
          trusted corporate porfolio across embassies and consulates in Nigeria
          and beyond, and this gives us a kinf unparalled leverage over the
          competition. We pursue all those little applications, facilitating and
          providing advisory services in relation to visa acquisition for and on
          behalf of clients.
        </p>
      </div>
      <div className="mx-7">
        <h2 className="text-xl font-[35px] dark:text-white my-5 Poppins">
          {" "}
          Visa Consultation
        </h2>
        <p className="my-5 Poppins text-lg text-muted-foreground  font-extralight">
          We provide visa Consultation and visa support package to most
          countries worldwide, providing visa forms, requirements and
          documentations.
        </p>
        <span className="my-5 Poppins text-muted-foreground text-lg">
          Our main destinations includes:
        </span>
        <ul className="my-5 text-muted-foreground font-bold text-xl ">
          <li className="my-5 Poppins">
            <a href="#">Qatar</a>{" "}
          </li>
          <li className="my-5 Poppins">United Kingdon </li>
          <li className="my-5 Poppins">Kenya </li>
          <li className="my-5 Poppins">Canada </li>
          <li className="my-5 Poppins">Uganda </li>
          <li className="my-5 Poppins">Malaysia </li>
          <li className="my-5 Poppins">Tanzania </li>
          <li className="my-5 Poppins">Mauritius </li>
          <li className="my-5 Poppins">Solvenia </li>
          <li className="my-5 Poppins">Vietnam </li>
        </ul>
        <Link href="#" className="text-blue-500 text-xl font-bold mt-5 Poppins">
          Schengen Visa{" "}
        </Link>
      </div>
      <div className="mx-7 my-5 Poppins ">
        <a
          href="#"
          className=" text-orange-500 hover:underline hover:text-gray-500 text-xl font-normal my-7"
        >
          Do you want more information ?
        </a>
        <a href="#">
        <img
          src="/Whatsapp1.jpg"
          alt="whatsapp"
          className="mt-5 Poppins mb-5 Poppins"
          width={300}
          height={30}
        />
        </a>
        <div className="border-2 border-gray-400 mt-15" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mt-5 Poppins"
        >
          <motion.img
            variants={fadeIn("up", "tween", 0.2, 1)}
            src="/whatsapp.jpg"
            alt="link"
            className="my-10"
            width={500}
          />
        </motion.div>
      </div>
      <div className="border-2 border-gray-400 mt-15" />
    </MaxWidthWrapper>
  );
}

export default page