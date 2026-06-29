
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
return (
    <footer className="bg-[#0f3a4a] text-white">
    <div className="mx-auto max-w-7xl px-6 py-16">
    
        <div className="grid gap-12 md:grid-cols-4">
        
        <div>
            <div className="flex items-center gap-3">
            
            <Image
            src="/logo1.jpeg"
            alt="Dentaire Logo"
            width={50}
            height={50}
            className="rounded-full bg-[#0E384c]"
            />
            
            <span className="text-3xl font-semibold text-cyan-300">
                Dentaire
            </span>
            </div>

            <p className="mt-6 text-cyan-100/80 leading-7">
            The goal our clinic is provide friendly, caring dentistry and
            highest level of general, cosmetic, and specialist dental
            treatments.
            </p>
        </div>

        
        <div>
            <h3 className="text-2xl font-semibold ml-5">Quick Links</h3>
            <ul className="mt-6 space-y-4 text-cyan-100/90 cursor-pointer">
            <li>
                <Link href="#" className="transition hover:text-white ml-5">
                Home
                </Link>
            </li>
            <li>
                <Link href="#" className="transition hover:text-white ml-5">
                About Us
                </Link>
            </li>
            <li>
                <Link href="#" className="transition hover:text-white ml-5">
                Services
                </Link>
            </li>
            <li>
                <Link href="#" className="transition hover:text-white ml-5">
                Appointment
                </Link>
            </li>
            </ul>
        </div>

        
        <div>
            <h3 className="text-2xl font-semibold">Social Media</h3>
            <ul className="mt-6 space-y-4 text-cyan-100/90">
            <li>
                <Link href="#" className="transition hover:text-white">
                Facebook
                </Link>
            </li>
            <li>
                <Link href="#" className="transition hover:text-white">
                Instagram
                </Link>
            </li>
            <li>
                <Link href="#" className="transition hover:text-white">
                YouTube
                </Link>
            </li>
            <li>
                <Link href="#" className="transition hover:text-white">
                Twitter
                </Link>
            </li>
            </ul>
        </div>

        
        <div>
            <h3 className="text-2xl font-semibold">Contact Us</h3>
            <ul className="mt-6 space-y-4 text-cyan-100/90">
            <li>
                <a href="mailto:info@domain.com" className="hover:text-white">
                Info@Domain.Com
                </a>
            </li>
            <li>
                <a href="tel:+11236985245" className="hover:text-white">
                +(123) 698-5245
                </a>
            </li>
            </ul>
        </div>
        </div>

        
        <div className="mt-12 h-px w-full bg-white/10" />

        
        <div className="mt-6 text-center text-cyan-100/70">
        Copyright © 2026 Dentaire. All Rights Reserved.
        </div>
    </div>
    </footer>
);
}
