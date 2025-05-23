// "use client"
// import Link from 'next/link'
// import { Button } from '@/components/ui/button.jsx'
// import Image from 'next/image'
// import { useEffect, useRef } from 'react'

// const HeroSection = () => {
//     const imageRef = useRef(null);
//     useEffect(() => {
//         const scrollPosition = window.scrollY;
//         const scrollThreshold = 100;
//         if (imageRef.current) {
//             imageRef.current.style.transform = "rotateX(15deg) scale(1)";
//           }
//     }, []);
//     return (
//         <section className="w-full pt-36 md:pt-48 pb-20">
//             <div className="container mx-auto px-4">
//                 <div className="flex flex-col items-center">
//                     <div className="space-y-6 text-center mb-8">
//                         <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient">
//                             Your AI Career Coach for
//                             <br />
//                             Professional Success
//                         </h1>
//                         <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
//                             Advance your career with personalized guidance, interview prep, and
//                             AI-powered tools to help you land your dream job.
//                         </p>
//                     </div>

//                     <div className="flex justify-center space-x-4 mb-10">
//                         <Link href="/dashboard">
//                             <Button size="lg" className="px-8">
//                                 Get Started
//                             </Button>
//                         </Link>
//                         <Link href="https://www.youtube.com/roadsidecoder">
//                             <Button size="lg" variant="outline" className="px-8">
//                                 Watch Demo
//                             </Button>
//                         </Link>
//                     </div>

//                     <div className="hero-image-wrapper w-full max-w-7xl max-h-5xl">
//                         <div ref={imageRef} className="hero-image" >
//                         <Image
//                             src="/banner3.jpeg"
//                             width={1280}
//                             height={720}
//                             alt="Dashboard Preview"
//                             className="rounded-lg shadow-2xl border mx-auto w-full"
//                             priority
//                         />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default HeroSection

// import React from "react";
"use client"
import Link from 'next/link'
import { Button } from '@/components/ui/button.jsx'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

const HeroSection = () => {
    const imageRef = useRef(null);

    useEffect(() => {
        const imageElement = imageRef.current;
        if (!imageElement) return; // ✅ Prevents errors if ref is not attached

        const handleScroll = () => {
            if (window.scrollY > 100) {
                imageElement.classList.add("scrolled");
            } else {
                imageElement.classList.remove("scrolled");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="w-full pt-36 md:pt-48 pb-10">
            <div className="space-y-6 text-center">
                <div className="space-y-6 mx-auto">
                    <div className="space-y-6 text-center mb-8">
                        <h1 className="bg-gradient-to-r from-gray-400 via-gray-200 to-gray-600 bg-clip-text text-transparent text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl p-4 animate-gradient">
                            Your AI Career Coach for
                            <br />
                            Professional Success
                        </h1>

                        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                            Advance your career with personalized guidance, interview prep, and AI-powered tools to help you land your dream job.
                        </p>
                    </div>

                    <div className="flex justify-center space-x-4 mb-10">
                        <Link href="/dashboard">
                            <Button size="lg" className="px-8">Get Started</Button>
                        </Link>
                        <Link href="https://www.youtube.com/roadsidecoder">
                            <Button size="lg" variant="outline" className="px-8">Watch Demo</Button>
                        </Link>
                    </div>

                    <div className="hero-image-wrapper mt-5 md:mt-0">
                        {/* ✅ Added ref directly to Image's parent div */}
                        <div ref={imageRef} className="hero-image">
                            <Image
                                src="/banner3.jpeg"
                                width={1280}
                                height={720}
                                alt="Banner Sensai"
                                className="rounded-lg shadow-2xl border mx-auto"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
