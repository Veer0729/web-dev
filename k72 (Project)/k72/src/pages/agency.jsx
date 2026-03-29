import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]

  useGSAP(function () {

    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: 'top 28%',
        end: 'top -70%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })


  return (
    <div className='parent'>
      <div id='page1' className='py-1 '>
        <div ref={imageDivRef} className='absolute overflow-hidden lg:h-[20vw] h-[300vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] lg:top-96 -top-80 lg:left-[30vw] left-[30vw]'>
          <img ref={imageRef} className='h-full object-cover w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>
        <div className='relative font-[font2]'>
          <div className='lg:mt-[55vh] mt-[30vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>SEVEN7Y TWO</h1>
          </div>
          <div className='lg:pl-[40%] lg:mt-20 mt-4 p-3'>
            <p className='lg:text-6xl text-xl leading-tight font-[font2]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
          </div>

          <div className='lg:mt-60 mt-20 lg:px-60 px-5 flex lg:flex-row flex-col'>
            <div className='w-full'>
              <h1 className='text-2xl font-[font2] mb-10'>Expertise</h1>
            </div>
            <div className='w-full lg:text-3xl text-xl font-[font2] leading-tight pr-210'>
              <p>Strategy</p>
              <p>Advertising</p>
              <p>Branding</p>
              <p>Design</p>
              <p>Content</p>
            </div>
          </div>

          <div className='lg:mt-60 mt-20 lg:px-60 px-5 grid lg:grid-cols-3 grid-cols-1 gap-20 pb-40'>
            <div className='space-y-4'>
              <h3 className='lg:text-2xl text-xl font-[font2]'>Our Work_Born in curiosity, raised by dedication and fed with a steady diet of creativity.</h3>
            </div>
            <div className='space-y-4'>
              <h3 className='lg:text-2xl text-xl font-[font2]'>Our Creative_Simmering in an environment where talent can come to a full boil. Encouraged to become the best versions of ourselves.</h3>
            </div>
            <div className='space-y-4'>
              <h3 className='lg:text-2xl text-xl font-[font2]'>Our Culture_We’re open to each other. Period. The team works together to create a space that makes us proud.</h3>
            </div>
          </div>
        </div>
      </div>
      <div id='page2' className="h-screen whitespace-nowrap">
      </div>
    </div>
  )
}

export default Agence