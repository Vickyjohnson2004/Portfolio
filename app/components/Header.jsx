"use client";

import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";

const Header = () => {
  return (
    <section
      id="top"
      className="w-11/12 max-w-6xl mx-auto min-h-screen pt-32 pb-16 flex flex-col items-center justify-center text-center"
    >
      {/* PROFILE IMAGE */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
        }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <Image
          src={assets.profile_img}
          alt="Victor Johnson"
          width={220}
          height={220}
          priority
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white shadow-xl shadow-black/20"
        />
      </motion.div>

      {/* INTRO */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex items-center gap-2 text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 mb-3"
      >
        Hi, I'm Victor Johnson
        <Image
          src={assets.hand_icon}
          alt="Hand Icon"
          width={24}
          height={24}
          className="w-6 h-6 object-contain"
        />
      </motion.h3>

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white max-w-4xl"
      >
        Full Stack Web & Mobile App Developer
      </motion.h1>

      {/* DESCRIPTION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-6 max-w-3xl"
      >
        <p className="text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-400">
          I build modern, scalable, and responsive web & mobile applications
          using React, Next.js, Node.js, TypeScript, and React Native.
        </p>

        <p className="text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-400 mt-4">
          Passionate about clean UI design, secure backend systems, animations,
          and production-ready full-stack applications.
        </p>
      </motion.div>

      {/* BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-center gap-5 mt-10"
      >
        {/* CONTACT BUTTON */}
        <a
          href="#contact"
          className="
            flex items-center gap-3
            px-8 py-3
            rounded-full
            bg-black
            text-white
            border border-black
            hover:bg-gray-900
            transition-all duration-300
            shadow-lg shadow-black/10
          "
        >
          Contact Me
          <Image
            src={assets.right_arrow_white}
            alt="Arrow Icon"
            width={16}
            height={16}
            className="w-4 h-4 object-contain"
          />
        </a>

        {/* RESUME BUTTON */}
        <a
          href="/Victor_Johnson_Professional_Resume.pdf"
          download
          className="
            flex items-center gap-3
            px-8 py-3
            rounded-full
            bg-white
            text-gray-900
            border border-gray-300
            hover:bg-gray-100
            transition-all duration-300
            shadow-lg shadow-black/5
            dark:bg-white
            dark:text-black
          "
        >
          Download Resume
          <Image
            src={assets.download_icon}
            alt="Download Icon"
            width={16}
            height={16}
            className="w-4 h-4 object-contain"
          />
        </a>
      </motion.div>
    </section>
  );
};

export default Header;
