import { useGSAP } from '@gsap/react'
import ExploreCard from '../components/Explore/ExploreCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import dodital from '../assets/Dodital.jpg';
import kyarkoti from '../assets/Kyarkoti.jpg';
import dayara from '../assets/Dayara.jpg';
import harshil from '../assets/Harshil.jpg';
import tapovan from '../assets/Tapovan.jpeg';
import moila from '../assets/Moila.jpg';

const Explore = () => {
  const explore = [
    {
      image1: dayara,
      title1: 'Dayara Bugyal',
      image2: dodital,
      title2: 'Dodital'
    },
    {
      image1: kyarkoti,
      title1: 'KYARKOTI',
      image2: harshil,
      title2: 'Harshil Valley'
    },
    {
      image1: tapovan,
      title1: 'Gaumukh Tapovan',
      image2: moila,
      title2: 'Chakrata'
    }
  ]

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(function () {
    gsap.from('.hero', {
      height: '70px',
      stagger: {
        amount: 0.3
      },
      scrollTrigger: {
        trigger: '.cards',
        //markers:true,
        start: 'top 100%',
        end: 'top -370%',
        scrub: true
      }
    })
  })

  return (
    <div className='lg:p-4 p-2 mb-10'>
      <div className=' pt-[33vh]'>
        <h2 className='font-[font2] lg:text-[12vw] text-[20vw] uppercase leading-36'>EXPLORE</h2>
      </div>
      <div className='-lg:mt-20 cards'>
        {explore.map((elem, idx) => (
          <div key={idx} className='hero w-full lg:h-[850px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
            <ExploreCard 
              image1={elem.image1} 
              title1={elem.title1}
              image2={elem.image2} 
              title2={elem.title2} 
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Explore
