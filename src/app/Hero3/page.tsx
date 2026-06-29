import Navbar from "../components/Navbar";
import AppointmentBanner from "../components/AppointmentBanner";

export default function HeroSection() {
return (
    <>
    < Navbar />
    
    <section
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
    style={{
        backgroundImage:
        "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
    }}
    >

    <div className="absolute inset-0 bg-slate-900/60"></div>

    
    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-slate-900/20 to-white/20"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        <div className="flex items-center justify-center gap-3 mb-6">
        <span className="text-white text-sm tracking-[2px] uppercase">
            ✦ Welcome To Dentaire
        </span>
        </div>

        
        <h1 className="text-white font-bold leading-none">
        <span className="block text-5xl md:text-7xl lg:text-8xl">
            Dental Care for the
        </span>
        <span className="block text-5xl md:text-7xl lg:text-8xl mt-4">
            Whole Family
        </span>
        </h1>

        
        <p className="mt-10 max-w-5xl mx-auto text-white/90 text-sm md:text-2xl leading-relaxed">
        It is a long established fact that a reader will be distracted
        by the readable content of a page when looking at its layout.
        The point of using Lorem Ipsum is that it has a more-or-less
        normal.
        </p>

        
        <div className="mt-12">
        <button className="inline-flex items-center gap-5 bg-[#1E84B5] hover:bg-[#0E384c] transition-all text-white font-semibold text-xl px-4 py-2 rounded-full">
            Make An Appointment

            <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-sky-500 text-xl">
            ↗
            </span>
        </button>
        </div>
    </div>
    </section>
    <AppointmentBanner />
    </>
);
}