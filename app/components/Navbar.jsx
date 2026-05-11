"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets/assets";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);

  const sideMenuRef = useRef(null);

  // OPEN MOBILE MENU
  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  // CLOSE MOBILE MENU
  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  // SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* BACKGROUND */}
      <div className="fixed top-0 left-0 w-full -z-10 opacity-40 dark:hidden">
        <Image
          src={assets.header_bg_color}
          alt="Header Background"
          priority
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* NAVBAR */}
      <nav
        className={`
          fixed top-0 left-0 w-full z-50
          px-5 lg:px-8 xl:px-[8%]
          py-4
          flex items-center justify-between
          transition-all duration-300
          ${
            isScroll
              ? "bg-white/80 backdrop-blur-lg shadow-md dark:bg-darkTheme/80"
              : "bg-transparent"
          }
        `}
      >
        {/* LOGO */}
        <Link href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Victor Johnson Logo"
            priority
            width={160}
            height={50}
            className="w-28 h-auto object-contain cursor-pointer"
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul
          className={`
            hidden md:flex items-center
            gap-8
            px-10 py-3
            rounded-full
            text-sm lg:text-base
            transition-all duration-300
            ${
              isScroll
                ? "bg-white/70 shadow-sm dark:bg-darkHover/40 border dark:border-white/10"
                : "bg-transparent"
            }
          `}
        >
          {[
            ["Home", "#top"],
            ["About", "#about"],
            ["Services", "#services"],
            ["Projects", "#work"],
            ["Contact", "#contact"],
          ].map(([title, link]) => (
            <li key={title}>
              <Link
                href={link}
                className="
                  relative
                  text-gray-700 dark:text-white
                  hover:text-black dark:hover:text-gray-300
                  transition-colors duration-300
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-black
                  dark:after:bg-white
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">
          {/* DARK MODE BUTTON */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="
              p-2 rounded-full
              hover:bg-gray-100
              dark:hover:bg-darkHover
              transition
            "
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Theme Toggle"
              width={24}
              height={24}
              className="w-6 h-6 object-contain"
            />
          </button>

          {/* CONTACT BUTTON */}
          <Link
            href="#contact"
            className="
              hidden lg:flex items-center gap-3
              px-7 py-3
              rounded-full
              border border-gray-300 dark:border-white/20
              bg-white/80 dark:bg-darkHover/30
              backdrop-blur-md
              text-gray-800 dark:text-white
              hover:shadow-lg
              hover:scale-105
              transition-all duration-300
            "
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="Arrow Icon"
              width={12}
              height={12}
              className="w-3 h-3 object-contain"
            />
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button onClick={openMenu} className="block md:hidden p-2">
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu Icon"
              width={24}
              height={24}
              className="w-6 h-6 object-contain"
            />
          </button>
        </div>

        {/* MOBILE MENU */}
        <ul
          ref={sideMenuRef}
          className="
            md:hidden
            fixed
            top-0
            right-[-16rem]
            bottom-0
            w-64
            h-screen
            z-50
            flex flex-col
            gap-6
            px-10
            py-24
            bg-white dark:bg-darkTheme
            shadow-2xl
            transition-transform duration-300 ease-in-out
          "
        >
          {/* CLOSE BUTTON */}
          <button onClick={closeMenu} className="absolute top-6 right-6">
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Close Menu"
              width={20}
              height={20}
              className="w-5 h-5 object-contain"
            />
          </button>

          {[
            ["Home", "#top"],
            ["About", "#about"],
            ["Services", "#services"],
            ["Projects", "#work"],
            ["Contact", "#contact"],
          ].map(([title, link]) => (
            <li key={title}>
              <Link
                href={link}
                onClick={closeMenu}
                className="
                  text-lg
                  text-gray-700 dark:text-white
                  hover:text-black dark:hover:text-gray-300
                  transition-colors duration-300
                "
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
