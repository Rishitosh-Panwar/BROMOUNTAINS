import React from 'react'
import Video1 from '../components/home/Video1'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'

const Home = () => {
  return (
    <div className='text-white'>
      <div className='h-screen w-screen fixed'>
        <Video1 />
      </div>
      <div className='h-screen w-screen relative overflow-hidden flex flex-col justify-between'>
      <HomeHeroText />
      <HomeBottomText />
      </div>
    </div>
  )
}

export default Home