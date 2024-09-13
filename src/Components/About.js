import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react';
import img2 from '../Images/img2.jpg'
import insta from '../Icons/insta.png'
import React from 'react'

gsap.registerPlugin(ScrollTrigger)

export const About = () => {
    const box1Ref = useRef(null)
    const box2Ref = useRef(null)
    const imgRef = useRef(null)
    const summaryRef = useRef(null)
    const educationRef = useRef(null)
    const experienceRef = useRef(null)

    useEffect(() => {
        const timeline1 = gsap.timeline({
            scrollTrigger: {
                trigger: box1Ref.current,
                start: "top 400"
            }
        })

        timeline1
            .from(imgRef.current, { opacity: 0, x: -500, duration: 1.5, ease: "circ.out" }, 0)
            .from(summaryRef.current, { opacity: 0, x: 500, duration: 1.5, ease: "circ.out" }, 0)


        const timeline2 = gsap.timeline({
            scrollTrigger: {
                trigger: box2Ref.current,
                start: "top 400"
            }
        })

        timeline2
            .from(experienceRef.current, { opacity: 0, x: -500, duration: 1.5, ease: "circ.out" }, 0)
            .from(educationRef.current, { opacity: 0, x: 500, duration: 1.5, ease: "circ.out" }, 0)

    }, [])
    return (
        <>
            <div className='min-h-screen text-white poppins-regular overflow-hidden'>
                <div ref={box1Ref} className='flex justify-around'>
                    <div ref={imgRef} className='hidden lg:block'>
                        <img src={img2} alt="" />
                    </div>
                    <div ref={summaryRef} className='flex flex-col justify-between m-4'>
                        <div className='text-6xl poppins-bold mb-8'>
                            SELF SUMMARY
                        </div>
                        <div className='text-xl bg-slate-950 p-14 rounded-3xl'>
                            <div className='poppins-bold pb-16'>Sahil Kumar</div>
                            <div>
                                HI , I’m a Computer Science Graduate <br />
                                System Engineer currently working at TCS digital
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={box2Ref} className='pt-12 flex justify-around sm:flex-row flex-col'>
                    <div ref={experienceRef}>
                        <div className='text-xl bg-slate-950 rounded-3xl flex flex-col justify-between p-8 m-4'>
                            <div className='text-4xl'>Experience</div>
                            <div className='pt-12'>
                                <div className='pb-2'>
                                    <div className='opacity-50'>
                                        2024 - present
                                    </div>
                                    <div>
                                        System Engineer , TCS
                                    </div>
                                </div>
                                <div className='pb-2'>
                                    <div className='opacity-50'>
                                        2023 - 2023
                                    </div>
                                    <div>
                                        SDE intern , JALA Academy
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row justify-between m-4'>
                            <div className='text-xl bg-slate-950 rounded-3xl flex flex-col justify-between p-8 mr-2'>
                                <div className='text-2xl'>
                                    Coding Profiles
                                </div>
                                <div className='pt-12 flex flex-col'>
                                    <div>
                                        <a href="https://codeforces.com/profile/DilucRagvinder" target="_blank" rel="noopener noreferrer">Codeforce</a>
                                    </div>
                                    <div>
                                        <a href="https://www.codechef.com/users/dawnharbinger" target="_blank" rel="noopener noreferrer">CodeChef</a>
                                    </div>
                                    <div>
                                        <a href="https://leetcode.com/u/darkhawk/" target="_blank" rel="noopener noreferrer">LeetCode</a>
                                    </div>
                                </div>
                            </div>
                            <div className='text-xl bg-slate-950 rounded-3xl flex flex-col justify-between p-8 ml-2'>
                                <div className='text-2xl'>
                                    Social Media
                                </div>
                                <div className='flex flex-col'>
                                    <div>
                                        <a href="https://www.instagram.com/sahil_kr_kanwar/?next=%2F" target='_blank'>Instagram</a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/sahil-kumar-3a5696204/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                    </div>
                                    <div>
                                        X / Twitter
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div ref={educationRef} className='text-xl bg-slate-950 p-14 rounded-3xl flex flex-col justify-around m-4'>
                        <div className='text-4xl'>
                            Education
                        </div>
                        <div>
                            <div className='pb-2'>
                                <div className='opacity-50'>
                                    2020-204
                                </div>
                                <div>
                                    Bachelor Degree in Computer Science
                                    NIT , Durgapur
                                </div>
                            </div>
                            <div className='pb-2'>
                                <div className='opacity-50'>
                                    2018 - 2020
                                </div>
                                <div>
                                    Senior Secondary School
                                    KVS , Chittaranjan
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
