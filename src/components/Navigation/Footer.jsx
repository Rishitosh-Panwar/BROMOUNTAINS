import React, { useEffect, useState } from "react";
import { FaInstagram, FaHeart, FaGlobe, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateIST = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateIST();
    const interval = setInterval(updateIST, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-black text-white px-4 md:px-10 py-10 md:py-16 relative text-base md:text-xl flex flex-col justify-between min-h-[70vh]">
      <div className="flex flex-col md:flex-row flex-wrap md:justify-between md:items-center items-center gap-4 md:gap-0 mb-8">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          <a
            href="https://www.instagram.com/bromountains/"
            className="w-full md:w-auto px-6 md:px-10 py-4 md:py-5 border-2 border-white rounded-full font-bold flex items-center gap-3 md:gap-4 text-lg md:text-2xl hover:text-[#D3FD50] hover:border-[#D3FD50] justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} className="md:text-2xl" /> Instagram
          </a>
          <a
            href="mailto:bromountains01@gmail.com?cc=avinav942@gmail.com&bcc=rishiiipanwar@gmail.com&subject=BROMOUNTAINS%20query%20%3A"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-6 md:px-10 py-4 md:py-5 border-2 border-white rounded-full font-bold flex items-center gap-3 md:gap-4 text-lg md:text-2xl hover:text-[#D3FD50] hover:border-[#D3FD50] justify-center"
          >
            <FaEnvelope size={24} className="md:text-2xl" /> Mail
          </a>
        </div>
        <a
          href="./pages/Contact"
          className="w-full md:w-auto px-6 md:px-12 py-4 md:py-6 border-2 border-white rounded-full font-bold flex items-center gap-3 md:gap-4 text-lg md:text-2xl hover:text-[#D3FD50] hover:border-[#D3FD50] justify-center mt-3 md:mt-0"
        >
          CONTACT <FaHeart size={20} className="md:text-2xl" />
        </a>
      </div>

      <div className="flex flex-col md:flex-row flex-wrap md:justify-between md:items-center items-center text-sm md:text-lg text-gray-300 gap-4 md:gap-0 mt-auto">
        <div className="flex items-center gap-2 md:gap-3">
          <FaGlobe size={18} className="md:text-2xl" />
          <span className="font-medium">Dehradun {time} IST</span>
        </div>

        <div className="flex gap-5 md:gap-10 font-medium">
          <a href="#">PRIVACY POLICY</a>
          <a href="#">PRIVACY NOTICE</a>
        </div>

        <a href="#" className="font-bold text-base md:text-xl">
          BACK TO TOP
        </a>
      </div>
    </footer>
  );
};

export default Footer;
