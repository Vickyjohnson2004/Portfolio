import React from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "@/assets/assets";

const About = () => {
  return (
    <div className="w-full px-[12%] py-16 scroll-mt-20" id="about">
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
      <h2 className="text-center text-3xl md:text-4xl font-ovo">About Me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-10 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none shadow-lg">
          <Image
            src={assets.user_image}
            alt="Portrait of [Your Name]"
            className="w-full rounded-3xl"
            width={320}
            height={400}
            priority
          />
        </div>
        <div className="flex-1">
          <p className="mb-8 max-w-2xl text-justify font-ovo">
            I am a passionate developer with a love for creating dynamic and
            user-friendly web applications. My journey in tech started with a
            curiosity for how things work, and it has evolved into a
            full-fledged career in software development, specializing in both
            front-end and back-end technologies. I have worked on various
            projects ranging from small business websites to complex web
            applications, I have had the privilege of working with clients from
            different parts of the world, helping them bring their ideas to life
            through code.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-2xl">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="border border-gray-400 rounded-xl p-6 cursor-pointer hover:scale-105 transition-transform flex flex-col gap-4 items-center text-center hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black  hover:shadow-md"
              >
                <Image src={icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700 font-Ovo">Tools I use</h4>
          <ul className="flex items-center gap-3 sm:gap-7 flex-wrap">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 cursor-pointer hover:scale-118 aspect-square border border-gray-400 rounded-lg transition-transform hover:-translate-y-1 duration-500"
              >
                <Image src={tool} alt={tool} className="w-5 sm:w-7 mt-3" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
