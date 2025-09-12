import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useState } from "react";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0ce41698-e5ec-468f-85f0-a505902bcaa5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[8%] py-16 dark:bg-none scroll-mt-20 bg-[length:90%_auto] bg-no-repeat bg-center  "
      // bg-[url('/footer-bg-color.png')]
      id="contact"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        Connect with Me
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-3xl md:text-4xl font-ovo"
      >
        Get in Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-4 mb-11 font-ovo"
      >
        I'm currently open to new opportunities and collaborations. Whether
        you're looking for a dedicated developer to bring your project to life
        or just want to say hello, feel free to reach out. send me a message and
        let's discuss how we can work together to create something amazing. i
        would love to hear from you!
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        onSubmit={onSubmit}
        action="contact"
        className="flex flex-col items-center max-w-3xl mx-auto"
      >
        <div className="w-full flex flex-col md:flex-row gap-4 mb-4">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full md:w-1/2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 mb-4 dark:bg-darkHover/30 dark:border-white/90 dark:focus:ring-1 dark:focus:ring-white"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full md:w-1/2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 mb-4 dark:bg-darkHover/30 dark:border-white/90 dark:focus:ring-1 dark:focus:ring-white"
          />
        </div>

        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          name="message"
          rows={6}
          id="message"
          placeholder="Your Message"
          required
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 mb-4 dark:bg-darkHover/30 dark:border-white/90 dark:focus:ring-1 dark:focus:ring-white"
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center bg-black text-white py-2 px-4 rounded-lg transition-all duration-500 hover:bg-black/50 shadow-md shadow-gray-400 dark:bg-transparent dark:border-[0.5px] dark:border-white/90 dark:text-white dark:hover:bg-darkHover/30 dark:shadow-white/50"
        >
          Send Message{" "}
          <Image
            src={assets.right_arrow_white}
            alt="right_arrow_white"
            className="ml-2 w-5"
          />
        </motion.button>

        <p className="text-center mt-4">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
