"use client";

import { assets, workData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
  return (
    <motion.section
      id="work"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full px-[8%] py-20 scroll-mt-20"
    >
      {/* TITLE */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-2 text-lg font-ovo text-gray-600 dark:text-gray-300"
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-3xl md:text-4xl font-ovo font-semibold"
      >
        My Latest Work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center max-w-3xl mx-auto mt-4 mb-12 text-gray-600 dark:text-gray-400"
      >
        Here are some of my recent projects that showcase my skills in web and
        mobile development. Each project focuses on performance, scalability,
        and user experience.
      </motion.p>

      {/* GRID */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="group"
          >
            {/* CARD */}
            <div className="relative overflow-hidden rounded-xl shadow-md bg-white dark:bg-darkHover">
              {/* IMAGE (FIXED: NO LAYOUT SHIFT + NO LCP ISSUE) */}
              <div className="relative w-full h-64">
                <Image
                  src={project.bgImage}
                  alt={project.title}
                  fill
                  priority={index === 0} // only first image is LCP safe
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h2>

                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {project.description}
                </p>

                {/* ICON (FIXED) */}
                <div className="flex justify-end mt-4">
                  <Image
                    src={assets.send_icon}
                    alt="View Project"
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain cursor-pointer hover:scale-110 transition-transform"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* BUTTON */}
      <div className="flex justify-center mt-12">
        <Link
          href="#"
          className="
            flex items-center gap-2
            text-gray-700 dark:text-white
            border border-gray-500 dark:border-gray-300
            px-6 py-3 rounded-full
            hover:bg-gray-800 hover:text-white
            dark:hover:bg-darkHover
            transition-all duration-300
          "
        >
          Show More
          <Image
            src={
              isDarkMode
                ? assets.right_arrow_bold_dark
                : assets.right_arrow_bold
            }
            alt="arrow"
            width={16}
            height={16}
            className="w-4 h-4 object-contain"
          />
        </Link>
      </div>
    </motion.section>
  );
};

export default Work;
