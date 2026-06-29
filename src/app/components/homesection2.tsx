"use client";

import Image from "next/image";
import {
  FaUserMd,
  FaTooth,
  FaHandHoldingUsd,
  FaPhoneAlt,
  FaStar,
  FaCog,
} from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#eef7fc] py-24">
      <div className="max-w-7xl mx-auto px-6">

        
        <div className="text-center mb-20">
          <p className="uppercase tracking-[4px] text-[#1E84B5] font-medium">
            ✦ Why Choose Us
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0E384C] mt-4">
            <span className="text-[#1E84B5]">Diagnosis</span> of Dental Diseases
          </h2>

          <p className="text-gray-600 text-sm mt-4">
            We are committed to sustainability, eco-friendly initiatives.
          </p>
        </div>

        
        <div className="grid lg:grid-cols-3 gap-8 items-center">

        
          <div className="space-y-20">

            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#0E384C]">
                  Experienced Doctor
                </h3>
                <p className="text-gray-600 text-sm mt-4 leading-10">
                  The goal of our clinic is to provide friendly, caring dentistry.
                </p>
              </div>

              <FaUserMd className="text-[#1E84B5] text-3xl" />
            </div>

            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#0E384C]">
                  Personalized Care
                </h3>
                <p className="text-gray-600 text-sm mt-4 leading-10">
                  The goal of our clinic is to provide friendly, caring dentistry.
                </p>
              </div>

              <FaTooth className="text-[#1E84B5] text-3xl" />
            </div>

            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#0E384C]">
                  Flexible Payment Options
                </h3>
                <p className="text-gray-600 text-sm mt-4 leading-10">
                  The goal of our clinic is to provide friendly, caring dentistry.
                </p>
              </div>

              <FaHandHoldingUsd className="text-[#1E84B5] text-3xl" />
            </div>
          </div>

        
          <div className="flex justify-center">
            <div className="relative w-90 h-90 rounded-full border-2 border-sky-200 flex items-center justify-center">

              <div className="absolute w-95 h-95 rounded-full bg-white" />

              <Image
                src="/teeth.png"
                alt="Tooth"
                width={300}
                height={300}
                className="relative z-10"
              />

        
              <div className="absolute top-10 left-1/2 w-5 h-5 bg-[#1E84B5] rounded-full"></div>
              <div className="absolute bottom-10 left-1/2 w-5 h-5 bg-[#1E84B5] rounded-full"></div>
              <div className="absolute left-10 top-1/2 w-5 h-5 bg-[#1E84B5] rounded-full"></div>
              <div className="absolute right-10 top-1/2 w-5 h-5 bg-[#1E84B5] rounded-full"></div>
            </div>
          </div>


      
          <div className="space-y-20 gap-8">

            <div className="flex items-start gap-6">
              <FaPhoneAlt className="text-[#1E84B5] text-3xl mt-2" />

              <div>
                <h3 className="text-xl font-bold text-[#0E384C]">
                  Emergency Services
                </h3>
                <p className="text-gray-600 text-sm mt-4 leading-10">
                  The goal of our clinic is to provide friendly, caring dentistry.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <FaStar className="text-[#1E84B5] text-3xl mt-2" />

              <div>
                <h3 className="text-xl font-bold text-[#0E384C]">
                  Positive Patient Reviews
                </h3>
                <p className="text-gray-600 text-sm mt-4 leading-10">
                  The goal of our clinic is to provide friendly, caring dentistry.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <FaCog className="text-[#1E84B5] text-3xl mt-2" />

              <div>
                <h3 className="text-xl font-bold text-[#0E384C]">
                  Latest Technology
                </h3>
                <p className="text-gray-600 text-sm mt-4 leading-10">
                  The goal of our clinic is to provide friendly, caring dentistry.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}