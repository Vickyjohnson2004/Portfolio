"use client";

import { assets, serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full px-[8%] md:px-[12%] py-20 scroll-mt-24"
    >
      {/* TITLE */}
      <motion.h4
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-2 text-lg font-ovo text-gray-600 dark:text-gray-300"
      >
        What I Offer
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-3xl md:text-4xl font-ovo font-semibold text-gray-900 dark:text-white"
      >
        My Services
      </motion.h2>

      {/* DESCRIPTION */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center max-w-3xl mx-auto mt-5 mb-14 text-gray-600 dark:text-gray-300 leading-7"
      >
        I offer a range of services including web development, UI/UX design,
        mobile apps, and technical consultancy. I focus on building scalable,
        modern, and production-ready digital solutions tailored to your needs.
      </motion.p>

      {/* GRID */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        {serviceData.map((service) => (
          <motion.div
            key={service.title}
            whileHover={{ y: -6, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="
              border border-gray-200 dark:border-white/10
              rounded-xl
              px-6 py-10
              flex flex-col items-center text-center gap-4
              bg-white/60 dark:bg-darkHover/20
              backdrop-blur-md
              shadow-sm
              hover:shadow-lg
              transition-all duration-300
            "
          >
            {/* ICON */}
            <Image
              src={service.icon}
              alt={service.title}
              width={60}
              height={60}
              className="w-10 h-10 object-contain"
            />

            {/* TITLE */}
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              {service.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-6">
              {service.description}
            </p>

            {/* LINK */}
            <Link
              href={service.link}
              className="
                mt-4 flex items-center gap-2
                text-sm font-medium
                text-black dark:text-white
                hover:underline
                transition
              "
            >
              Learn More
              <Image
                src={assets.right_arrow}
                alt="arrow"
                width={14}
                height={14}
                className="w-3.5 h-3.5 object-contain"
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Services;
