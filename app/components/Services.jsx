"use client";
import { assets, serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <div className="w-full px-[12%] py-16 scroll-mt-20" id="services">
      <h4 className="text-center mb-2 text-lg font-ovo">What I Offer</h4>
      <h2 className="text-center text-3xl md:text-4xl font-ovo">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-4 mb-11 font-ovo">
        I offer a range of services to help you achieve your goals. Whether you
        need assistance with web development, design, digital marketing, or app
        development, I have the expertise to help you succeed. I also offer
        consultancy services to help you make informed decisions about your
        technology needs — including collaborations.
      </p>

      <div className="grid gap-8 mx-auto my-10 grid-cols-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg  px-8 py-12 cursor-pointer hover:scale-105 transition-transform flex flex-col gap-4 items-center text-center shadow-md hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black"
          >
            <Image src={icon} alt={title} className="w-10" />
            <h3 className="my-4 text-lg font-semibold text-gray-700">
              {title}
            </h3>
            <p className="text-gray-700 leading-5 text-sm">{description}</p>

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
