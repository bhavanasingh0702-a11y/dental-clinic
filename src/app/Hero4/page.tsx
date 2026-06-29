"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import AppointmentBanner from "../components/AppointmentBanner";
export default function Page() {
const slides = [
    {
    image: "/hero-bg.jpg",
    title1: "Dental Care for the",
    title2: "Whole Family",
    description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    button: "Make An Appointment",
    },
    {
    image: "/hero-bg-2.jpg",
    title1: "Professional",
    title2: "Dental Services",
    description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.",
    button: "Book Consultation",
    },
];

const [current, setCurrent] = useState(0);

return (
    <>
    <Navbar />

    <motion.section
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
        backgroundImage: `url(${slides[current].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        }}
    >
        
        <div className="absolute inset-0 bg-slate-900/60"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-slate-900/20 to-white/20"></div>

        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-white text-sm tracking-[4px] uppercase">
            ✦ Welcome To Dentaire
            </span>
        </div>

        <h1 className="text-white font-bold leading-none">
            <span className="block text-5xl md:text-7xl lg:text-8xl">
            {slides[current].title1}
            </span>

            <span className="block text-5xl md:text-7xl lg:text-8xl mt-4">
            {slides[current].title2}
            </span>
        </h1>

        <p className="mt-10 max-w-5xl mx-auto text-white/90 text-sm md:text-2xl leading-relaxed">
            {slides[current].description}
        </p>

        <div className="mt-8">
            <button className="inline-flex items-center gap-5 bg-[#1E84B5] hover:bg-[#0E384c] transition-all text-white font-semibold text-xl px-4 py-2 rounded-full">
            {slides[current].button}

            <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-sky-500 text-xl">
                ↗
            </span>
            </button>
        </div>
        </div>

        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {slides.map((_, index) => (
            <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            title={`Go to slide ${index + 1}`}
            className={`w-4 h-4 rounded-full transition-all ${
                current === index ? "bg-sky-500" : "bg-white"
            }`}
            ></button>
        ))}
        </div>
    </motion.section>
    <AppointmentBanner />
    </>
);
}