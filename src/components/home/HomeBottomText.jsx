import React from 'react';
import { Link } from 'react-router-dom';

const HomeBottomText = () => {
  return (
    <div className="fixed lg:bottom-0 bottom-5 left-0 right-0 flex items-center justify-center gap-15 font-[font2] bg-transparent p-2">
      <p className="absolute lg:w-[17vw] w-64 lg:right-3 right-0 bottom-50 lg:bottom-35 font-[font2] lg:text-sm text-xs lg:leading-4 leading-tight">
        <span className="text-[#FEDF59] font-extrabold text-base lg:text-lg block mb-1 uppercase">
          Go where roads don’t — leave only footprints.
        </span>
        At BROMOUNTAINS, we vibe with the raw Himalayas while keeping it green and clean. Every trek is about exploring wild trails responsibly, protecting mountains, and leaving no plastic behind. Join the crew, hike responsibly, and keep the Himalayas as fresh as they’ve always been.
        <br />
      </p>
      <div className="lg:border-3 border-2 lg:h-20 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center px-6 border-white rounded-full uppercase">
        <Link className="lg:text-[4vw] text-[7vw]" to="/Explore">Explore</Link>
      </div>
      <div className="lg:border-3 border-2 lg:h-20 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center px-6 border-white rounded-full uppercase">
        <Link className="lg:text-[4vw] text-[7vw]" to="/Blog">Blog</Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
