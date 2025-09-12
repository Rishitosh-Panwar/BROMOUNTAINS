import React from 'react'
import Video1 from './Video1'

const HomeHeroText = () => {
  return (
    <div className="font-[font1] absolute top-0 left-0 w-full h-full flex flex-col justify-start px-10 text-center mt-64 lg:mt-0">

      <h1 className="lg:text-[9.5vw] text-[11vw] flex justify-center items-center uppercase">
        EXPLORE
      </h1>

      <div className="flex justify-center items-center -mt-[7vw]">
        <span className="lg:text-[9.5vw] text-[11vw] uppercase">WI</span>
        <div className="h-[7vw] w-[16vw] -mt-1 rounded-full overflow-hidden">
          <Video1 />
        </div>
        <span className="text-[9.5vw] uppercase">TH</span>
      </div>

      <h1  style={{ color: "#FEDF59" }} className=" lg:text-[9.5vw] text-[11vw] flex justify-center items-center uppercase -mt-[7vw]">
        #BROMOUNTAINS
      </h1>
    </div>
  )
}

export default HomeHeroText
