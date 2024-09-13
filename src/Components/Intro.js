import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState } from 'react';
import img1 from '../Images/img1.png'
import React from 'react'

gsap.registerPlugin(ScrollTrigger)
const skill = ["Software Developer", "Full Stack Developer", "Programmer", "Designer", "Manga Artist"]

export const Intro = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const pfp1Ref = useRef(null)
    const introRef = useRef(null)
    const skillRef = useRef(null)
    useEffect(() => {
        gsap.from(pfp1Ref.current, { opacity: 0, x: 1000, duration: 3, ease: "back.out(1.2)" })
        gsap.from(introRef.current, { opacity: 0, x: -1000, duration: 3, ease: "back.out(1.2)" })
    }, [])

    useEffect(() => {
        gsap.to(skillRef.current, {
            opacity: 0,
            position: "relative",
            y: "-10",
            duration: 1.5,
            delay: 2,
            onComplete: () => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % skill.length)
                gsap.fromTo(
                    skillRef.current,
                    { y: 10, opacity: 0, delay: 1 },
                    { y: 0, opacity: 1, duration: 1.5 }
                )
            }
        })
    }, [currentIndex])

    return (
        <>
            <div className='h-screen poppins-regular overflow-hidden'>
                <div className='flex justify-around relative top-1/4'>
                    <div ref={introRef} className='text-white flex flex-col justify-between'>
                        <div className='text-6xl poppins-bold'>
                            <div>
                                Hello , I'm a
                            </div>
                            <div style={{ "width": "30rem", "height": "12rem" }} className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent' ref={skillRef}>
                                {skill[currentIndex]}
                            </div>
                        </div>
                        <div className='text-xl flex justify-between flex-col'>
                            <div>
                                Creative Solution for Complex problems
                            </div>
                            <div className='flex py-7'>
                                <button className='w-52 bg-blue-900 border-8 rounded-3xl border-blue-900'>Learn more</button>
                            </div>
                        </div>
                    </div>
                    <div ref={pfp1Ref} className='hidden lg:block'>
                        <img src={img1} alt="" style={{ "height": "30rem" }} />
                    </div>
                </div>
            </div>
        </>
    )
}
