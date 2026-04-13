import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Link from "next/link";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div
      className="w-11/12  max-w-4xl mx-auto text-center h-screen pt-45 pb-20 flex flex-col items-center justify-center gap-4"
      id="top"
    >
      <motion.div
        initial={{ scale: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        whileInView={{ scale: 1 }}
      >
        <Image
          src={assets.profile_img}
          alt="profile_img"
          className="w-32 h-32 sm:pt-10 rounded-full mx-auto border-4 border-white shadow-md shadow-gray-500"
        />
      </motion.div>
      <motion.h3
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-lg md:text-xl "
      >
        Hi i'm Victor Johnson{" "}
        <Image src={assets.hand_icon} alt="hand_icon" className="w-6" />
      </motion.h3>

      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -30, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-2xl lg:text-[46px] font-Ovo mb-1"
      >
        Full Stack Developer based in Nigeria
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <p className="max-w-2xl mx-auto mb-3">
          I am a Full Stack Web and Mobile App Developer with a passion for
          creating dynamic and responsive applications from scratch to finish.
        </p>
        <p className="max-w-2xl mx-auto mb-2">
          I have experience working with various technologies and frameworks,
          including React, Node.js, and React Native. I'm from Nigeria and I'm
          currently open to new opportunities.
        </p>
      </motion.div>

      <div className="flex flex-col sm:flex-row items-center justify-center mt-2 gap-6">
        <motion.a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="px-10 py-3 border rounded-full  border-gray-500  bg-black text-white flex items-center gap-3 ml-4 dark:bg-transparent dark:border-gray-500"
          href="#contact"
        >
          Contact Me{" "}
          <Image
            src={assets.right_arrow_white}
            alt="right_arrow_white"
            className="w-4"
          />
        </motion.a>

        <motion.a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="/Victor_Johnson_Resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex bg-white items-center gap-3 ml-4 dark:text-black dark:bg-white"
        >
          My resume{" "}
          <Image
            src={assets.download_icon}
            alt="download_icon"
            className="w-4"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
