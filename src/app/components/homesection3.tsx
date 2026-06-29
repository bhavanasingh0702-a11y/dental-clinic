"use client";

import { useState } from "react";
import Image from "next/image";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function HowItWorks() {
const [active, setActive] = useState(0);

const accordionData = [
    {
    title: "Book An Appointment",
    content:
        "The goal of our clinic is to provide friendly, caring dentistry and the highest level of general, cosmetic, and specialist treatments.",
    },
    {
    title: "What Conditions Can Manual Therapy Treat?",
    content:
        "We offer a wide range of dental treatments to improve your oral health and smile.",
    },
    {
    title: "Expert Care",
    content:
        "Our experienced team ensures every patient receives personalized treatment and attention.",
    },
];

return (
    <section className=" bg-white">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2  gap-10 items-stretch">

        <div className="relative min-h-full ">
        <Image
            src="/girls2.jpg"
            alt="Dental"
            width={600}
            height={650}
            className=" rounded-[50px] object-cover"
        />
        </div>

    
        <div className="bg-white px-16 py-10 flex flex-col justify-center">

        <p className="uppercase tracking-[4px] text-[#1E84B5] font-semibold mb-4">
            ✦ HOW IT WORK
        </p>

        <h2 className="text-6xl font-bold leading-tight mb-2">
            <span className="text-[#1E84B5]">What We Do</span>{" "}
            <span className="text-[#0d3557]">for Your Teeth</span>
        </h2>

        <p className="text-gray-500 text-lg leading-10 mb-10">
            We are committed to sustainability. Our clinic practices
            eco-friendly initiatives like digital records to reduce paper waste
            and energy-efficient equipment.
        </p>

        
        <div className="space-y-2 border border-gray-200 rounded-md overflow-hidden">
            {accordionData.map((item, index) => (
            <div
                key={index}
                className="border border-gray-200 rounded-md overflow-hidden"
            >
                <button
                onClick={() =>
                    setActive(active === index ? -1 : index)
                }
                className="w-full flex justify-between items-center p-2 text-black"
                >
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-[#0d3557]">
                    {index + 1}.
                    </span>

                    <h3 className="text-lg font-bold text-[#0d3557] ">
                    {item.title}
                    </h3>
                </div>

                {active === index ? (
                    <FiMinus size={24} />
                ) : (
                    <FiPlus size={24} />
                )}
                </button>

                {active === index && (
                <div className="px-20 pb-8 text-gray-500 text-sm leading-4">
                    {item.content}
                </div>
                )}
            </div>
            ))}
        </div>

        </div>
    </div>
    </section>
);
}