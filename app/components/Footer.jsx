import React from "react";
import Image from "next/image";
import Link from "next/link";
import { assets, workData } from "@/assets/assets";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaThreads,
} from "react-icons/fa";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="Footer Logo"
          className="w-32 mx-auto mb-2"
        />
      </div>
      <div className="w-max flex items-center mx-auto gap-2 mb-4">
        <Image
          src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
          alt="Mail Icon"
          className="w-6"
        />
        okikevictorodinaka@gmail.com
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>
          © {new Date().getFullYear()} Victor Johnson💎. All rights reserved.
        </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <Link target="_blank" href="https://github.com/Vickyjohnson2004">
              <FaGithub />
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://github.com/Vickyjohnson2004">
              <FaFacebook />
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://github.com/Vickyjohnson2004">
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://github.com/Vickyjohnson2004">
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://github.com/Vickyjohnson2004">
              <FaLinkedin />
            </Link>
          </li>

          <li>
            <Link
              target="_blank"
              href="https://www.threads.com/@vic_tor_johnson?xmt=AQF07G2QgH33yFnlaNQ3veCws_6_IdyWWXt9ISwtLCFk91s"
            >
              <FaThreads />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
