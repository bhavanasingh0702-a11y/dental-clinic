import { FaStar } from "react-icons/fa";
import Image from "next/image";

import { FaTooth } from "react-icons/fa";

export default function Home() {
  return (
    <section className="bg-blue-50 min-h screen flex items-center relative overflow-x-hidden">
        <div className=" container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div className="max-w-2xl ">

          <h1 className=" text-[#0E384c] text-3xl md:text-4xl font-bold lg:text-5xl">
            Exceptional <span className="text-[#1E84B5]">Dental Excellence</span>
            with a Gentle Touch
          </h1>

            <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-xl">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal.
            </p>

            <button className="group mt-10 inline-flex items-center gap-4 bg-[#2287c7] hover:bg-[#0a2c43] text-white font-semibold px-4 py-2 rounded-full transition cursor-pointer">
              Make An Appointment

              <div className="rounded-full bg-white text-[#1E84B5] w-8 h-8 flex items-center justify-center text-sm">→</div>
            </button>

            {/* Rating */}
            <div className="mt-8 border-t border-slate-300 pt-6 flex flex-wrap items-center gap-4 text-[#0a2c43]">
              <span className="text-xl font-medium">Google Rating</span>

              <div className="flex items-center gap-2">
                <span className="text-amber-500 text-2xl font-semibold">
                  5.0
                </span>

                <div className="flex text-amber-500">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
            </div>

              <Image 
                src="/icon-star-1.svg"
                alt="star"
                width={60}
                height={60}
                className="absolute left-170 top-[90px] animate-pulse rounded-full shadow-lg"
          />
              </div>

              <span className="text-xl text-slate-700">
                Based on 492 Reviews
              </span>
            </div>
          </div>

          {/* Right Content */}

          <div className="relative flex justify-center lg:justify-end">


            {/* Doctor Image */}

            <div className="relative h-[800px] md:h-[800px] w-full overflow-hidden ">
              <Image
                src="/doctor.png"
                alt="Doctor"
                fill
                priority
                className="object-cover"
              />

              {/* Tooth Badge Top */}

              
                <div className="absolute right-0 top-1/3 bg-white p-4 rounded-full shadow-lg hover:bg-[#0E384c]">
                  <FaTooth className="text-4xl text-[#1E84B5]" />
                </div>

                <div className="absolute right-100 top-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-[#0E384c]">
                  <FaTooth className="text-4xl text-[#1E84B5]" />
                </div>
              

              {/* Doctor Card */}

              <div className=" doctor-card absolute bottom-20 left-0 bg-white rounded-3xl shadow-xl p-3 flex items-center gap-4 min-w-55 mt-5">


                <Image
                  src="/dantist-doctor-img.jpg"
                  alt="Doctor"
                  width={50}
                  height={50}
                  className="rounded-2xl object-cover"
                />

                <div>
                  <h3 className="text-xl font-bold text-[#0a2c43]">
                    Dr. Clara Lee
                  </h3>

                  <p className="text-slate-500 text-sm">Dentist</p>
                </div>


              </div>
            </div>
          </div>
        </div>
      
    </section>
  );
}