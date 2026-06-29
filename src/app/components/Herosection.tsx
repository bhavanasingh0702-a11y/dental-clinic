"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
const [showVideo, setShowVideo] = useState(false); 
return (
    <section
    id="home"
    className="relative h-screen overflow-hidden"
    >
    
    <div
        className="absolute inset-0 bg-cover bg-center bg-[url('/visit-clinic-bg.jpg')]"
    />

    
    <div className="absolute inset-0 bg-[#0E384C]/60" />

    
    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        <motion.p
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="uppercase tracking-[6px] text-white text-lg font-medium mb-4"
        >
        ✦ Visit Clinic
        </motion.p>

        <motion.h1
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-white font-bold leading-tight max-w-5xl text-5xl md:text-7xl"
        >
        Comprehensive Dental Care
        <br />
        For All Ages
        </motion.h1>

    <motion.button
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        onClick={() => setShowVideo(true)}
        className="mt-10 bg-white rounded-full px-4 py-2 flex items-center gap-4 shadow-xl hover:scale-105 transition hover:bg-[#0E384C] cursor-pointer"
    >
        <span className="text-[#1E84B5] font-semibold text-xl ">
            Play Video
        </span>

        <div className="w-8 h-8 rounded-full bg-sky-600 flex items-center justify-center">
            <span className="text-white text-xl">▶</span>
        </div>
    </motion.button>

    </div>

{showVideo && (
<div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
    <div className="relative w-[90%] max-w-4xl">

    <button
        onClick={() => setShowVideo(false)}
        className="absolute -top-12 right-0 text-white text-4xl"
    >
        ×
    </button>

    <iframe
        className="w-full h-125 rounded-xl"
        src="https://www.youtube.com/embed/VH1Y6x4N4v8?autoplay=1"
        title="YouTube video"
        allow="autoplay; encrypted-media"
        allowFullScreen
    />
    </div>
</div>
)}

    </section>
);
}