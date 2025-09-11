import React from "react";
import Image from "next/image";
import Link from "next/link";
import { assets, workData } from "@/assets/assets";

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
              Github
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://github.com/Vickyjohnson2004">
              Facebook
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://github.com/Vickyjohnson2004">
              X
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://github.com/Vickyjohnson2004">
              Instagram
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://github.com/Vickyjohnson2004">
              Linkedin
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
