"use client";
import { useEffect, useRef, useState } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets/assets";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setisScroll] = useState(false);

  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setisScroll(true);
      } else {
        setisScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-11/12 translate-y-[80%] -z-10 dark:hidden">
        <Image
          src={assets.header_bg_color}
          alt="background"
          className="w-full"
        />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 bg-white shadow-sm bg-opacity-50 backdrop-blur-md ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : "bg-transparent"
        }`}
      >
        <Link href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Logo"
            className="w-28 cursor-pointer mr-14"
          />
        </Link>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 text-sm lg:text-base ${
            isScroll
              ? "bg-opacity-50 shadow-sm bg-white dark:border dark:border-white/50 dark:bg-transparent"
              : "bg-transparent"
          }`}
        >
          <li>
            <Link href="#top" className="font-Ovo">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="font-Ovo">
              About Me
            </Link>
          </li>
          <li>
            <Link href="#services" className="font-Ovo">
              Services
            </Link>
          </li>
          <li>
            <Link href="#work" className="font-Ovo">
              My Work
            </Link>
          </li>
          <li>
            <Link href="#contact" className="font-Ovo">
              Contact Me
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode(!isDarkMode)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="moon_icon"
              className="w-6"
            />
          </button>
          <Link
            href="#contact"
            className="hidden lg:flex items-center font-Ovo gap-3 px-10 py-2 border border-gray-500 rounded-full ml-4 text-sm lg:text-base dark:border-white/50 hover:shadow-sm hover:shadow-gray-400/30 hover:dark:shadow-white/20 transition"
          >
            Contact{" "}
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="arrow_Icon"
              className="w-3"
            />
          </Link>

          <button onClick={openMenu} className="block md:hidden ml-3">
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="menu_black"
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-all duration-300 ease-in-out dark:bg-darkHover dark:text-white shadow-lg"
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="close_black"
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <Link href="#top" onClick={closeMenu} className="font-Ovo">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" onClick={closeMenu} className="font-Ovo">
              About Me
            </Link>
          </li>
          <li>
            <Link href="#services" onClick={closeMenu} className="font-Ovo">
              Services
            </Link>
          </li>
          <li>
            <Link href="#work" onClick={closeMenu} className="font-Ovo">
              My Work
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={closeMenu} className="font-Ovo">
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
