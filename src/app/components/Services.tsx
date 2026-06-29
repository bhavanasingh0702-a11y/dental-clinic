
"use client";
import { FaTooth,FaTeeth,FaSmile,FaRegSmileBeam,FaBaby } from "react-icons/fa";
import { useState } from "react";

export default function Services() {
const [showMore, setShowMore] = useState(false);

const services = [
    {
    icon: <FaTooth />,   
    title: "General Dental Care",
    desc: "We are excited to meet you and provide the best dental care for your family.",
    },
    {
    icon: <FaTeeth />,
    title: "Dental Implants",
    desc: "We are excited to meet you and provide the best dental care for your family.",
    },
    {
        icon: <FaSmile />,
    title: "Cosmetic Dentistry",
    desc: "We are excited to meet you and provide the best dental care for your family.",
    },
    {
        icon: <FaRegSmileBeam />,
    title: "Teeth Whitening",
    desc: "We are excited to meet you and provide the best dental care for your family.",
    },
];

const extraServices = [
{
    icon: <FaBaby />,
    title: "Pediatric Dental Care",
    desc: "We are excited to meet you and provide the best dental care for your family",
},
{
    icon: <FaTooth />,
    title: "Advanced Oral Care",
    desc: "We are excited to meet you and provide the best dental care for your family.",
},
{
    icon: <FaTooth />,
    title: "Comfort Dentistry",
    desc: "We are excited to meet you and provide the best dental care for your family.",
},
{
    icon: <FaTooth />,
    title: "Smile Renewal",
    desc: "We are excited to meet you and provide the best dental care for your family.",
},
];


const allServices = showMore
    ? [...services, ...extraServices] // click ke baad 4 aur cards
    : services;

return (

    <section className="bg-[#EEF7FC] py-24 px-6">
    <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
        <p className="text-[#2A8CCB] uppercase tracking-[6px] font-semibold mb-4">
            ✦ Our Services
        </p>

        <h2 className="text-5xl md:text-6xl font-bold">
            <span className="text-[#2A8CCB]">Hight Quality</span>{" "}
            <span className="text-[#0F2D46]">Services for You.</span>
        </h2>

        <p className="text-gray-500 text-lg mt-2">
            We are committed to sustainability. eco-friendly initiatives.
        </p>
        </div>

    <section id="services" className="py-0 bg-blue-50">
    <section className="py-16 px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {allServices.map((service) => (
        <div
            key={service.title}
            className= "group bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition hover:bg-[#0E384C]">



<div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 text-3xl mb-4 ">
{service.icon}
</div>

            <h3 className="text-2xl font-semibold mb-4 text-[#0E384C] group-hover:text-white">
{service.title}
</h3>

            <p className="text-gray-500 mb-6 group-hover:text-white">
            {service.desc}
            </p>

            <button className="text-[#1E84B5] font-semibold">
            Read More →
            </button>
        </div>
        ))}
    </div>

    <p className="text-center text-gray-600 text-lg mb-6 mt-8">
We believe in using the latest technology and techniques to <br />
ensure the best outcomes for our patients.
</p>
s
    <div className="flex justify-center mt-8">
        {!showMore && (
        <button
            onClick={() => setShowMore(true)}
            className="bg-sky-600 text-white px-4 py-2 rounded-full hover:bg-[#0E384c] flex items-center gap-2 cursor-pointer ">
            View All Service 
            <div className="rounded-full bg-white text-[#1E84B5] w-8 h-8 flex items-center justify-center text-sm">→</div>
        </button>
        )}
    </div>
    </section>
    </section>
    </div>
    </section>
);
}