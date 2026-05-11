"use client";

import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    formData.append("access_key", "0ce41698-e5ec-468f-85f0-a505902bcaa5");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully 🚀");
        event.target.reset();
      } else {
        console.log("Error:", data);
        setResult(data.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
      setResult("Network error. Try again.");
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full px-[8%] py-20 scroll-mt-20"
    >
      {/* TITLE */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center text-lg font-medium"
      >
        Connect with Me
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center text-3xl md:text-4xl font-bold mt-2"
      >
        Get in Touch
      </motion.h2>

      {/* DESCRIPTION */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center max-w-2xl mx-auto mt-4 mb-10 text-gray-600 dark:text-gray-300"
      >
        I'm open to opportunities, collaborations, and freelance work. Send a
        message and let's build something great together.
      </motion.p>

      {/* FORM */}
      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="max-w-3xl mx-auto flex flex-col gap-4"
      >
        {/* NAME + EMAIL */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-white/20 dark:bg-darkHover/30 outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-white/20 dark:bg-darkHover/30 outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
          />
        </div>

        {/* MESSAGE */}
        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          required
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-white/20 dark:bg-darkHover/30 outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-all dark:bg-white dark:text-black"
        >
          Send Message
          <Image
            src={assets.right_arrow_white}
            alt="arrow"
            width={16}
            height={16}
            className="w-4 h-4"
          />
        </button>

        {/* RESULT */}
        <p className="text-center mt-3 text-sm text-gray-600 dark:text-gray-300">
          {result}
        </p>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
