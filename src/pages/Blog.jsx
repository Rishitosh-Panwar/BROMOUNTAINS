import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'
import img1 from '../assets/image1.jpg';
import img2 from '../assets/image2.jpg';
import img3 from '../assets/image3.jpg';
import img4 from '../assets/image4.jpg';
import img5 from '../assets/image5.jpeg';
import img6 from '../assets/image6.JPG';
import img7 from '../assets/image7.jpg';
import img8 from '../assets/image8.jpg';
import img9 from '../assets/image9.jpg';
import img10 from '../assets/image10.JPG';
import img11 from '../assets/image11.jpg';
import img12 from '../assets/image12.jpg';
import img13 from '../assets/image13.jpeg';
import img14 from '../assets/image14.jpg';

const Blog = () => {
  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14
];

  useGSAP(function(){
    
    gsap.to(imageDivRef.current,{
    scrollTrigger:{
      trigger:imageDivRef.current,
      //markers: true,
      start:'top%',
      end:'top -195%',
      pin: true,
      pinSpacing: true,
      pinReparent: true,
      pinType: 'transform',
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate:(elem)=>{
        let imageIndex;
        if(elem.progress < 1){
          imageIndex = Math.floor(elem.progress * imageArray.length)
        }else{
          imageIndex = imageArray.length - 1;
        }
        imageRef.current.src = imageArray[imageIndex]
      }
    }
    })
  })

  return (
  <div className='parent text-black'>
    <div id='page1' className='py-1 bg-white'>
      <div
  ref={imageDivRef}
  className="absolute overflow-hidden lg:h-[25vw] h-[35vw] lg:rounded-4xl rounded-xl lg:w-[20vw] w-[30vw] top-0 mt-32 lg:mt-0 lg:top-40 left-[20vw] lg:left-[25vw]"
>
  <img
    ref={imageRef}
    className="h-full object-cover w-full"
    src={img1}
    alt=""
  />
</div>


      <div className='relative font-[font1]'>
        <div className='lg:mt-[50vh] mt-[30vh]'>
          <h1 className='text-[11.3vw] text-center uppercase leading-[17vw]'>
            #BROMOUNTAINS
          </h1>
          <h1 className='text-[20vw] text-center uppercase leading-[17vw]'>
            BLOG
          </h1>
        </div>

        <div className='lg:pl-[40%] lg:mt-20 mt-6 p-3'>
          <p className='lg:text-5xl text-lg leading-tight'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            At BROMOUNTAINS, we believe every adventure tells a story worth
            sharing. Our blog is where travel meets inspiration—bringing you
            firsthand trekking experiences, practical guides, and insights into
            hidden trails across India. From serene Himalayan sunrises to
            thrilling waterfall rappels, we cover it all to help you plan your
            next journey with confidence. Stay connected as we share tips,
            stories, and the spirit of exploration that defines every mountain
            escape.
          </p>
        </div>
      </div>
    </div>

    <div id='page2' className='h-screen'>
      {/* blog section*/}
    </div>
  </div>
)
}
export default Blog