import { assets, workData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[8%] py-16 scroll-mt-20"
      id="work"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-3xl md:text-4xl font-ovo"
      >
        My Latest Work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-4 mb-11 font-ovo"
      >
        Here are some of my recent projects that showcase my skills and
        expertise in web and mobile app development. Each project is a unique
        blend of creativity, functionality, and user-centric design. I take
        pride in delivering high-quality solutions that meet the needs of my
        clients and exceed their expectations.
      </motion.p>

      {/* Responsive Grid with Gap */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 dark:text-black"
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="w-full"
          >
            <div
              className="bg-cover aspect-square bg-no-repeat cursor-pointer bg-center rounded-lg relative shadow-md hover:shadow-black hover:scale-105 transition-transform group"
              style={{
                backgroundImage: `url(${project.bgImage})`,
                height: "270px",
              }}
            >
              <div className="absolute bg-white w-11/12 rounded-md bottom-5 flex justify-between items-center duration-500 group-hover:bottom-7 left-1/2 -translate-x-1/2 transition-opacity">
                <div className="p-4">
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  <p className="mt-2">{project.description}</p>
                  <div>
                    <Image
                      src={assets.send_icon}
                      alt="Send Icon"
                      className="w-5 cursor-pointer mt-4 hover:scale-110 transition-transform"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Show More Button */}
      <div className="flex justify-center items-center mt-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <Link
            href="#"
            className="text-center text-lg font-ovo text-gray-700 border border-gray-700 px-6 py-3 rounded-full hover:bg-gray-700 hover:text-white transition-colors dark:text-white dark:border-gray-300 dark:hover:bg-darkHover dark:hover:text-black"
          >
            Show More{" "}
            <Image
              src={
                isDarkMode
                  ? assets.right_arrow_bold_dark
                  : assets.right_arrow_bold
              }
              alt="right_arrow_bold"
              className="w-5 inline-block ml-2"
            />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Work;
