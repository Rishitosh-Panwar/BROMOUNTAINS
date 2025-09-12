import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useRef, useEffect } from 'react'
import { NavbarContext } from '../../context/NavContext'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo1.png'

import nav1 from '../../assets/navbar1.jpeg'
import nav1b from '../../assets/navbar1 (2).jpeg'
import nav2 from '../../assets/navbar2.jpg'
import nav2b from '../../assets/navbar2 (2).jpg'
import nav3 from '../../assets/navbar3.JPG'
import nav3b from '../../assets/navbar3 (2).JPG'
import nav4 from '../../assets/navbar4.JPG'
import nav4b from '../../assets/navbar4 (2).jpg'

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null)
  const fullScreenRef = useRef(null)
  const [navOpen, setNavOpen] = useContext(NavbarContext)

  function gsapAnimation() {
    const tl = gsap.timeline()
    tl.to('.fullscreennav', { display: 'block' })
    tl.to('.stairing', {
      delay: 0.2,
      height: '100%',
      stagger: { amount: -0.3 }
    })
    tl.to('.link', {
      opacity: 1,
      rotateX: 0,
      stagger: { amount: 0.3 }
    })
    tl.to('.navlink', { opacity: 1 })
  }
  
  function gsapAnimationReverse() {
    const tl = gsap.timeline()
    tl.to('.link', {
      opacity: 0,
      rotateX: 90,
      stagger: { amount: 0.1 }
    })
    tl.to('.stairing', {
      height: 0,
      stagger: { amount: 0.1 }
    })
    tl.to('.navlink', { opacity: 0 })
    tl.to('.fullscreennav', { display: 'none' })
  }
  
  useGSAP(() => {
    if (navOpen) gsapAnimation()
    else gsapAnimationReverse()
  }, [navOpen])

  useEffect(() => {
    if (navOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [navOpen])

  return (
    <div ref={fullScreenRef} id='fullscreennav' className='fullscreennav hidden text-white overflow-hidden h-screen w-full z-50 absolute'>
      <div className='h-screen w-full fixed'>
        <div className='h-full w-full flex'>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
        </div>
      </div>
      <div ref={fullNavLinksRef} className='relative'>
        <div className="navlink flex w-full justify-between items-start">
          <div>
            <Link to="/" onClick={() => setNavOpen(false)} className='lg:w-36 w-24 block'>
              <img src={logo} alt="BROMOUNTAINS" className="w-full h-auto cursor-pointer relative lg:-translate-x-4 lg:-translate-y-5 -translate-x-2.5 -translate-y-3" />
            </Link>
          </div>
          <div onClick={() => setNavOpen(false)} className='lg:h-32 h-20 w-20 lg:w-32 relative cursor-pointer group'>
            <div className='lg:h-44 h-28 lg:w-1 w-0.5 -rotate-45 origin-top absolute bg-[white] group-hover:bg-[#D3FD50]'></div>
            <div className='lg:h-44 h-28 lg:w-1 w-0.5 right-0 rotate-45 origin-top absolute bg-[white] group-hover:bg-[#D3FD50]'></div>
          </div>
        </div>

        {/* EXPLORE */}
        <Link to="/Explore" onClick={() => setNavOpen(false)} className='link origin-top relative border-t-1 border-white block cursor-pointer'>
          <h1 className='font-[font2] text-5xl lg:text-[8vw] text-center uppercase'>Explore</h1>
          <div className='moveLink absolute inset-0 flex items-center text-black bg-[#D3FD50]'>
            <div className='moveX flex items-center'>
              <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center uppercase'>Explore</h2>
              <img className='lg:h-31 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src={nav1} alt="" />
              <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center uppercase'>Explore</h2>
              <img className='lg:h-31 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src={nav1b} alt="" />
            </div>
            <div className='moveX flex items-center'>
              <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center uppercase'>Explore</h2>
              <img className='lg:h-31 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src={nav1} alt="" />
              <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center uppercase'>Explore</h2>
              <img className='lg:h-31 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src={nav1b} alt="" />
            </div>
          </div>
        </Link>

        {/* BLOG */}
        <Link to="/Blog" onClick={() => setNavOpen(false)} className='link origin-top relative border-t-1 border-white block cursor-pointer'>
          <h1 className='font-[font2] text-5xl lg:text-[8vw] text-center uppercase'>BLOG</h1>
          <div className='moveLink absolute inset-0 flex items-center text-black bg-[#D3FD50]'>
            <div className='moveX flex items-center'>
              <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center uppercase'>BLOG</h2>
              <img className='lg:h-31 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src={nav2} alt="" />
              <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center uppercase'>BLOG</h2>
              <img className='lg:h-31 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src={nav2b} alt="" />
            </div>
            <div className='moveX flex items-center'>
              <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center uppercase'>BLOG</h2>
              <img className='lg:h-31 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src={nav2} alt="" />
              <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center uppercase'>BLOG</h2>
              <img className='lg:h-31 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src={nav2b} alt="" />
            </div>
          </div>
        </Link>

        {/* CONTACT */}
        <Link to="/Contact" onClick={() => setNavOpen(false)} className='link origin-top relative border-t-1 border-white block cursor-pointer'>
          <h1 className='font-[font2] text-5xl lg:text-[8vw] text-center uppercase'>CONTACT</h1>
          <div className='moveLink absolute inset-0 flex items-center text-black bg-[#D3FD50]'>
            <div className='moveX flex items-center'>
              <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center uppercase'>CONTACT</h2>
              <img className='lg:h-31 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src={nav3} alt="" />
              <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center uppercase'>CONTACT</h2>
              <img className='lg:h-31 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src={nav3b} alt="" />
            </div>
            <div className='moveX flex items-center'>
              <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center uppercase'>CONTACT</h2>
              <img className='lg:h-31 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src={nav3} alt="" />
              <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center uppercase'>CONTACT</h2>
              <img className='lg:h-31 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src={nav3b} alt="" />
            </div>
          </div>
        </Link>

        {/* ABOUT US */}
        <Link to="/About" onClick={() => setNavOpen(false)} className='link origin-top relative border-y-1 border-white block cursor-pointer'>
          <h1 className='font-[font2] text-5xl lg:text-[8vw] text-center uppercase'>ABOUT US</h1>
          <div className='moveLink absolute inset-0 flex items-center text-black bg-[#D3FD50]'>
            <div className='moveX flex items-center'>
              <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center uppercase'>ABOUT US</h2>
              <img className='lg:h-31 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src={nav4} alt="" />
              <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center uppercase'>ABOUT US</h2>
              <img className='lg:h-31 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src={nav4b} alt="" />
            </div>
            <div className='moveX flex items-center'>
              <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center uppercase'>ABOUT US</h2>
              <img className='lg:h-31 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src={nav4} alt="" />
              <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center uppercase'>ABOUT US</h2>
              <img className='lg:h-31 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover' src={nav4b} alt="" />
            </div>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default FullScreenNav
