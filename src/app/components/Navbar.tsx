"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";


import Link from "next/link";
import Image from "next/image";
import { IoChevronDownOutline } from "react-icons/io5";
export default function Navbar() {

const [menuOpen, setMenuOpen] = useState(false);

return (

    <nav className=" bg-blue-50 text-black flex justify-between items-center px-4 md:px-8 py-3 cursor-pointer">

<div className="flex items-center gap-2 mt-3 ">
    <Image
    src="/logo.png"
    alt="Dentaire Logo"
    width={48}
    height={48}
    className="rounded-full"
    />



    <h2 className=" text-2xl  md:text-3xl mt-2 font-bold text-[#1E84B5] ">
        Dentaire
    </h2>
    </div>

    <button
onClick={() => setMenuOpen(!menuOpen)}
className="lg:hidden text-3xl text-[#0E384c]"
>
{menuOpen ? <HiX /> : <HiMenu />}
</button>

    <div className="  hidden lg:flex text-[#0E384c] flex-1 gap-14 items-center justify-center mt-3">
        <div className="relative group">
        <Link href="/Hero" className= "flex items-center gap-1 hover:text-[#1E84B5]">Home
        <IoChevronDownOutline size={15} />
        </Link>
        <div className="absolute top-full left-0 hidden group-hover:block bg-[#0E384c] text-white shadow-lg rounded-lg min-w-45 z-50">
            <Link href="/Hero" className="block px-4 py-3 whitespace-nowrap hover:text-[#1E84B5] transition-all duration-300">
            Home - Hero Version 1
            </Link>
            <Link href="/Hero2" className="block px-4 py-3 whitespace-nowrap hover:text-[#1E84B5]">
            Home - Hero Version 2
            </Link>
            <Link href="/Hero3" className="block px-4 py-3  whitespace-nowrap hover:text-[#1E84B5]">
            Home - Hero Version 3
            </Link>
            <Link href="/Hero4" className="block px-4 py-3  whitespace-nowrap hover:text-[#1E84B5]">
            Home - Hero Version 4
            </Link>
            <Link href="/Hero5" className="block px-4 py-3 whitespace-nowrap hover:text-[#1E84B5]">
            Home - Hero Version 5
            </Link>
        </div>
        </div>
        <Link href="./about" className="hover:text-[#1E84B5]">About</Link>
        <div className="relative group">
        <Link href="./services" className="flex items-center gap-1 hover:text-[#1E84B5]">Services
        <IoChevronDownOutline size={15} />
        </Link>
        <div className="absolute top-full left-0 hidden group-hover:block bg-[#0E384c] text-white shadow-lg rounded-lg min-w-45 z-50">
            <Link href="/GeneralCare" className="block px-4 py-3 hover:text-[#1E84B5]">
            General Dentalcare
            </Link>
            <Link href="#" className="block px-4 py-3 hover:text-[#1E84B5]">
            Dental Implants
            </Link>
            <Link href="#" className="block px-4 py-3 hover:text-[#1E84B5]">
            Cosmetic Dentistry
            </Link>
            <Link href="#" className="block px-4 py-3 hover:text-[#1E84B5]">
            Teeth Whitening
            </Link>
        </div>
        </div>
        <div className="relative group">
        <Link href=""className=" flex items-center gap-1 hover:text-[#1E84B5]">Pages
        <IoChevronDownOutline size={15} />
        </Link>
        <div className="absolute top-full left-0 hidden group-hover:block bg-[#0E384c] text-white shadow-lg rounded-lg min-w-[180px] z-50">
            <Link href="#" className="block px-4 py-3 hover:text-[#1E84B5]">
            Our Blog
            </Link>
            <Link href="#" className="block px-4 py-3 hover:text-[#1E84B5]">
            Our team
            </Link>
            <Link href="#" className="block px-4 py-3 hover:text-[#1E84B5]">
            Gallery
            </Link>
            <Link href="#" className="block px-4 py-3 hover:text-[#1E84B5]">
            Technology
            </Link>
            <Link href="#" className="block px-4 py-3 hover:text-[#1E84B5]">
            Testimonials
            </Link>
            <Link href="#" className="block px-4 py-3 hover:text-[#1E84B5]">
            FAQ&apos;S
            </Link>
            <Link href="#" className="block px-4 py-3 hover:text-[#1E84B5]">
            Header Layouts
            </Link>
            
            <Link href="#" className="block px-4 py-3 hover:text-[#1E84B5]">
            Footer Layouts
            </Link>
        </div>
        </div>
        <Link href="/contactUs1"className="hover:text-[#1E84B5]">Contact Us</Link>

<button className="bg-[#1E84B5] text-white px-4 py-2 rounded-full hover:bg-[#0E384c] flex items-center gap-2 ml-16 cursor-pointer">
Book Appointment 
<div className="rounded-full bg-white text-[#1E84B5] w-8 h-8 flex items-center justify-center text-sm">→</div>
</button>
        
    </div>

{menuOpen && (
<div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col gap-4 p-5 lg:hidden z-50">
    
    <Link href="/Hero">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/services">Services</Link>
    <Link href="/contactUs1">Contact Us</Link>

    <button className="bg-[#1E84B5] text-white px-4 py-2 rounded-full">
    Book Appointment
    </button>

</div>
)}

    </nav>
);
}



