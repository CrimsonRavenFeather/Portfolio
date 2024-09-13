import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'
import trackit from '../Images/trackit.png'
import pdfeditor from '../Images/pdfeditor.png'
gsap.registerPlugin(ScrollTrigger)

export const Projects = () => {

    const p1_img_ref = useRef(null)
    const p1_des_ref = useRef(null)
    const p2_img_ref = useRef(null)
    const p2_des_ref = useRef(null)
    const underline1Ref = useRef(null)
    const underline2Ref = useRef(null)
    const headingRef = useRef(null)


    useEffect(() => {
        const timeline1 = gsap.timeline({
            scrollTrigger: {
                trigger: headingRef.current,
                start: "top 400"
            }
        })

        timeline1
            .from(headingRef.current, { opacity: 0, y: 200, ease: "circ.out", duration: 1.5 }, 0)
            .from(p1_img_ref.current, { opacity: 0, x: -400, ease: "circ.out", duration: 1.5 }, 0)
            .from(p1_des_ref.current, { opacity: 0, x: 400, ease: "circ.out", duration: 1.5 }, 0)
            .from(p2_img_ref.current, { opacity: 0, x: 400, ease: "circ.out", duration: 1.5 }, 0)
            .from(p2_des_ref.current, { opacity: 0, x: -400, ease: "circ.out", duration: 1.5 }, 0)
    }, [])

    const handleMouseEnter = (underlineRef) => {
        gsap.to(underlineRef.current, { width: '13%', duration: 0.5, ease: "power3.out" });
    };

    const handleMouseLeave = (underlineRef) => {
        gsap.to(underlineRef.current, { width: '0%', duration: 0.5, ease: "power3.out" });
    };

    return (
        <>
            <div className='min-h-screen text-white overflow-hidden'>
                <div ref={headingRef} className='text-6xl poppins-bold text-center py-8'>Projects</div>
                <div>
                    <div className='flex justify-around mb-8'>
                        <div ref={p1_img_ref}>
                            <img src={trackit} alt="" />
                        </div>
                        <div ref={p1_des_ref} className='flex flex-col justify-around'>
                            <div>
                                <div className='text-4xl'>
                                    Track It
                                </div>
                                <div onMouseEnter={() => handleMouseEnter(underline1Ref)} onMouseLeave={() => handleMouseLeave(underline1Ref)}>
                                    <div>
                                        <div className='text-xl'><a href="https://github.com/CrimsonRavenFeather/Track__it" target="_blank">Repo link</a></div>
                                        <div className='h-1 bg-white w-0' ref={underline1Ref}></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                Track it is a user-friendly platform designed to help individuals record and manage their workout routines. <br />
                                Users can log details such as the weight lifted, number of reps, and sets for each exercise, organized by date. <br />
                                The platform also allows users to make notes on specific workout days and easily refer back to previous workouts, <br /> helping track progress and maintain consistency over time.
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-row-reverse justify-around mb-8'>
                        <div ref={p2_img_ref}>
                            <img src={pdfeditor} alt="" />
                        </div>
                        <div ref={p2_des_ref} className='flex flex-col justify-around'>
                            <div>
                                <div className='text-4xl'>
                                    Pdf editor pro <br />
                                </div>
                                <div onMouseEnter={() => handleMouseEnter(underline2Ref)} onMouseLeave={() => handleMouseLeave(underline2Ref)}>
                                    <div>
                                        <div className='text-xl'><a href="https://github.com/CrimsonRavenFeather/Pdf-trim" target="_blank">Repo link</a></div>
                                        <div ref={underline2Ref} className='h-1 bg-white w-0'></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                PDF Editor Pro is a versatile online tool designed to help users easily manage their PDF files. <br />
                                The platform allows you to change the order of pages, delete unwanted pages, <br />
                                and merge multiple PDFs into a single document. <br />
                                Whether you need to reorganize, combine, or fine-tune your PDFs, <br />
                                PDF Editor Pro provides an intuitive interface for seamless PDF editing and management.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
