import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'
import programming from '../Images/programming.jpg'
import sketching from '../Images/sketching.jpg'
import softwaredev from '../Images/softwaredev.jpg'
import fullstack from '../Images/fullstack.jpg'

gsap.registerPlugin(ScrollTrigger)


export const Expertise = () => {
    const programmingRef = useRef(null)
    const fullstackRef = useRef(null)
    const softwaredevRef = useRef(null)
    const sketchingRef = useRef(null)
    const headingRef = useRef(null)
    const expertiseRef = useRef(null)

    useEffect(() => {
        const timeline1 = gsap.timeline({
            scrollTrigger: {
                trigger: headingRef.current,
                // markers: true , 
                start: 'top 1000'
            }
        })

        timeline1
            .from(headingRef.current, { y: 400, opacity: 0, duration: 1.5 , ease: "expo.out" })

        const timeline2 = gsap.timeline({
            scrollTrigger: {
                trigger: expertiseRef.current,
                start: 'top 400'
            }
        })

        timeline2
            .from(programmingRef.current, { opacity: 0, y: -300, duration: 1.5 , ease: "circ.out" }, 0)
            .from(softwaredevRef.current, { opacity: 0, y: -300, duration: 1.5 , ease: "circ.out" }, 0)
            .from(fullstackRef.current, { opacity: 0, y: 300, duration: 1.5 , ease: "circ.out" }, 0)
            .from(sketchingRef.current, { opacity: 0, y: 300, duration: 1.5 , ease: "circ.out" }, 0)

    }, [])

    const handleMouseEnter = (imgRef) => {
        const img = imgRef.current.querySelector('img')
        gsap.to(imgRef.current, { scale: 1.2, duration: 0.5 })
        gsap.to(img, { filter: "grayscale(0%)", duration: 0.5 })
    }

    const handleMouseExit = (imgRef) => {
        const img = imgRef.current.querySelector('img')
        gsap.to(imgRef.current, { scale: 1, duration: 0.5 })
        gsap.to(img, { filter: "grayscale(100%)", duration: 0.5 })
    }

    return (
        <>
            <div className='min-h-screen text-white poppins-regular overflow-hidden text-xl'>
                <div ref={headingRef} className='text-6xl poppins-bold my-32 text-center'>Expertise</div>
                <div ref={expertiseRef} className='flex lg:flex-row flex-col justify-around'>
                    <div ref={programmingRef} onMouseEnter={() => handleMouseEnter(programmingRef)} onMouseLeave={() => handleMouseExit(programmingRef)} className='max-[1200px]:flex max-[1200px]:flex-col max-[1200px]:justify-center max-[1200px]:items-center'>
                        <img src={programming} className='h-80 filter grayscale' alt="" />
                        <div className='text-center pt-4'>Programming</div>
                    </div>
                    <div ref={fullstackRef} onMouseEnter={() => handleMouseEnter(fullstackRef)} onMouseLeave={() => handleMouseExit(fullstackRef)} className='max-[1200px]:flex max-[1200px]:flex-col max-[1200px]:justify-center max-[1200px]:items-center'>
                        <img src={fullstack} className='h-80 grayscale' alt="" />
                        <div className='text-center pt-4'>Fullstack</div>
                    </div>
                    <div ref={softwaredevRef} onMouseEnter={() => handleMouseEnter(softwaredevRef)} onMouseLeave={() => handleMouseExit(softwaredevRef)} className='max-[1200px]:flex max-[1200px]:flex-col max-[1200px]:justify-center max-[1200px]:items-center'>
                        <img src={softwaredev} className='h-80 grayscale' alt="" />
                        <div className='text-center pt-4'>Software Development</div>
                    </div>
                    <div ref={sketchingRef} onMouseEnter={() => handleMouseEnter(sketchingRef)} onMouseLeave={() => handleMouseExit(sketchingRef)} className='max-[1200px]:flex max-[1200px]:flex-col max-[1200px]:justify-center max-[1200px]:items-center'>
                        <img src={sketching} className='h-80 grayscale' alt="" />
                        <div className='text-center pt-4'>Sketching</div>
                    </div>
                </div>
            </div>
        </>
    )
}
