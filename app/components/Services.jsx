"use client";
import { assets, serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-16 scroll-mt-20"
      id="services"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        What I Offer
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-3xl md:text-4xl font-ovo"
      >
        My Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-4 mb-11 font-ovo"
      >
        I offer a range of services to help you achieve your goals. Whether you
        need assistance with web development, design, digital marketing, or app
        development, I have the expertise to help you succeed. I also offer
        consultancy services to help you make informed decisions about your
        technology needs — including collaborations.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid gap-8 mx-auto my-10 grid-cols-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-400 rounded-lg  px-8 py-12 cursor-pointer hover:scale-105 transition-transform flex flex-col gap-4 items-center text-center shadow-md hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <Image src={icon} alt={title} className="w-10" />
            <h3 className="my-4 text-lg font-semibold text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-gray-700 leading-5 text-sm dark:text-white/80">
              {description}
            </p>

            <Link
              href={link}
              className="flex justify-center items-center gap-2 mt-5 hover:underline"
            >
              Learn More
              <Image
                src={assets.right_arrow}
                alt="right_arrow"
                className="w-4"
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
