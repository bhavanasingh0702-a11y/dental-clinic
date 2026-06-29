import Image from "next/image";
import { FaTooth } from "react-icons/fa";
import Navbar from "../components/Navbar";
import AppointmentBanner from "../components/AppointmentBanner";


export default function Hero() {
  return (
<>
    <Navbar />

    <section id="Hero">
    <section id="Hero2">
    <section className="bg-blue-50 min-h-screen flex items-center relative overflow-hidden">

<Image 
src="/star.jpg"
alt="star"
width={60}
height={60}
className="absolute left-165 top-30 animate-pulse rounded-full shadow-lg "
/>

<div className="absolute right-20 top-1/2 bg-white p-4 rounded-full shadow-lg">
  <FaTooth className="text-4xl text-[#1E84B5]" />
</div>

<div className="absolute left-170 bottom-1/4 bg-white p-4 rounded-full shadow-lg">
  <FaTooth className="text-4xl text-[#1E84B5] " />
</div>

      <div className="mx-auto px-6 grid md:grid-cols-2 gap-10">

        <div className= "mt-32">
          

          <h1 className=" text-[#0E384c] text-5xl font-bold mt-4">
            Exceptional <span className="text-[#1E84B5]">Dental Excellence</span>
            with a Gentle Touch
          </h1>

          <p className="text-gray-600 mt-6 text-lg">
            It is a long established fact that a reader will be distracted by the <br />
          readable content of a page when looking at its layout. <br />
          The point of using Lorem Ipsum is that it has a more-or-less normal.
          </p>

          <button className="bg-[#1E84B5] text-white px-4 py-2 rounded-full mt-6 hover:bg-[#0E384c] flex items-center gap-3">
            Make An Appointment 
            <div className="rounded-full bg-white text-[#1E84B5] w-8 h-8 flex items-center justify-center text-sm">→</div>
          </button>
        </div>

        <div>
          <Image
            src="/doctor.png"
            alt="doctor"
            className="rounded-xl object-cover w-full h-auto max-h-200"
            width={600}
            height={420}
            priority
          />
      
        </div>
      </div>
  
    </section>
    
    </section>
  
    </section>
    <AppointmentBanner />
</>

  );
}


