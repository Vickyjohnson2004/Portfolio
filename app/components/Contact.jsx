import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useState } from "react";

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
    <div
      className="w-full px-[8%] py-16 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-[length:90%_auto] bg-no-repeat bg-center"
      id="contact"
    >
      <h4 className="text-center mb-2 text-lg font-ovo">Connect with Me</h4>
      <h2 className="text-center text-3xl md:text-4xl font-ovo">
        Get in Touch
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-4 mb-11 font-ovo">
        I'm currently open to new opportunities and collaborations. Whether
        you're looking for a dedicated developer to bring your project to life
        or just want to say hello, feel free to reach out. send me a message and
        let's discuss how we can work together to create something amazing. i
        would love to hear from you!
      </p>

      <form
        onSubmit={onSubmit}
        action="contact"
        className="flex flex-col items-center max-w-3xl mx-auto"
      >
        <div className="w-full flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full md:w-1/2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 mb-4"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full md:w-1/2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 mb-4"
          />
        </div>
        <textarea
          name="message"
          rows={6}
          id="message"
          placeholder="Your Message"
          required
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 mb-4       "
        ></textarea>
        <button className="flex items-center justify-center bg-black text-white py-2 px-4 rounded-lg transition-all duration-500 hover:bg-black/50 shadow-md shadow-gray-400">
          Send Message{" "}
          <Image
            src={assets.right_arrow_white}
            alt="right_arrow_white"
            className="ml-2 w-5"
          />
        </button>
        <p className="text-center mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
