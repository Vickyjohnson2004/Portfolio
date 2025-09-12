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
} from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

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
            <Link
              target="_blank"
              href="https://www.facebook.com/share/1BudUMto1w/"
            >
              <FaFacebook />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://x.com/victorjohnsonn?t=N7mrW9bizMMdR5rzVVwyNw&s=08"
            >
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://www.instagram.com/vic_tor_johnson/"
            >
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://l.facebook.com/l.php?u=https%3A%2F%2Flinkedin.com%2Fin%2Fvictor-johnson-563353257%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBEwZWJvek5pc1JjeXZaYVRpVgEetLrkQwjNucBN-hs7HzZrgHwfi5Lzc6cLzOuLn6wXhIxxrePxi_SdFmyyZ5M_aem_qBM25t0Mq8FcUhTP_sPTag&h=AT0_ExTMHeh4aFvmGYCCIw534SPLFOElOK4QQP1hcj7SBvtYptvfbhf_B9dyTZBDkp89GgUjgAWiB3SgMKu6orUSN00c3YW0JXgxnyktZj3zfJSfXIW90sAlwJGgqV3d1aUVUoaARysKk2gheef4"
            >
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
