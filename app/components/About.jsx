"use client";

import React from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "@/assets/assets";
import { motion } from "motion/react";

const About = ({ isDarkMode }) => {
  return (
    <motion.section
      id="about"
      className="w-full px-[12%] py-20 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* HEADER */}
      <motion.h4
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="text-center mb-2 text-lg font-ovo text-gray-600 dark:text-white/80"
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-center text-3xl md:text-4xl font-ovo text-gray-900 dark:text-white"
      >
        About Me
      </motion.h2>

      {/* MAIN CONTENT */}
      <div className="flex w-full flex-col lg:flex-row items-center gap-10 my-10">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-64 sm:w-80 rounded-3xl overflow-hidden shadow-lg"
        >
          <Image
            src={assets.profile_img}
            alt="Victor Johnson"
            width={400}
            height={500}
            priority
            className="w-full h-auto object-cover rounded-3xl"
          />
        </motion.div>

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <p className="mb-6 max-w-2xl text-justify text-gray-600 dark:text-white/80 font-ovo leading-7">
            I am a passionate developer with a love for creating dynamic and
            user-friendly web applications. My journey in tech started with
            curiosity and evolved into full-stack development expertise. I build
            scalable applications using modern technologies and focus on clean
            UI, performance, and user experience.
          </p>

          {/* INFO CARDS */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.03 }}
                className="
                  border border-gray-300 dark:border-white/20
                  rounded-xl p-4
                  flex flex-col items-center text-center gap-3
                  bg-white/40 dark:bg-darkHover/30
                  backdrop-blur-md
                  hover:shadow-lg transition-all duration-300
                "
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  width={28}
                  height={28}
                  className="w-7 h-7 object-contain"
                />

                <h3 className="font-semibold text-gray-800 dark:text-white">
                  {title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-white/70">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* TOOLS TITLE */}
          <h4 className="mt-10 mb-4 text-gray-700 dark:text-white/80 font-Ovo">
            Tools I use
          </h4>

          {/* TOOLS GRID */}
          <ul className="flex flex-wrap items-center gap-4">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="
                  w-16 sm:w-20 aspect-square
                  flex items-center justify-center
                  border border-gray-300 dark:border-white/20
                  rounded-lg
                  bg-white/40 dark:bg-darkHover/30
                  hover:scale-105 transition-transform duration-300
                "
              >
                <Image
                  src={tool}
                  alt="tool"
                  width={60}
                  height={60}
                  className="w-10 h-10 object-contain"
                />
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
