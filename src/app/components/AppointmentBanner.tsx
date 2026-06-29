import { FaPhoneAlt, FaClock, FaArrowRight } from "react-icons/fa";

export default function AppointmentBanner() {
return (
    <section className="bg-[#0E3B52] py-8 px-4 hover:scale-[1.01] transition-all duration-500">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

    
        <div className="flex items-center gap-5">
        <FaPhoneAlt className="text-white text-3xl" />
        <div>
            <h3 className="text-white text-2xl font-bold">
            Need Dental Services ?
            </h3>
            <p className="text-white text-xl mt-2">
            Call on : (+01) 987 828 745
            </p>
        </div>
        </div>

        
        <div className="hidden lg:block w-px h-24 bg-white/20"></div>

        
        <div className="flex items-center gap-5">
        <FaClock className="text-sky-400 text-3xl" />
        <div>
            <h3 className="text-white text-2xl font-bold">
            Opening Hours
            </h3>
            <p className="text-white text-xl mt-2">
            Mon to Sat 9:00AM to 9:00PM
            </p>
        </div>
        </div>

    
        <button className="bg-[#1E84B5] hover:bg-white hover:text-[#0E384c] text-white font-bold px-4 py-2 rounded-full flex items-center gap-4 transition-all duration-300 cursor-pointer">
        Make An Appointment
        <span className="bg-white text-sky-500 w-8 h-8 rounded-full flex items-center justify-center">
            <FaArrowRight />
        </span>
        </button>

    </div>
    </section>
);
}