import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Navbar from "../components/Navbar";
export default function Contact() {
return (
  <>
  <Navbar />
  
    <section id="contact" className="py-20 bg-white ">
    <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[3px] text-sky-500 font-semibold mb-2 mt-10">
        Contact Info
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items:stretch">

          
        <div>

            <h2 className="text-5xl font-bold leading-tight mb-4">
            <span className="text-sky-500 whitespace-nowrap">Connecting</span>{" "}
            <span className="text-[#0E384C]">Near & Far</span>
            </h2>

            <p className="text-gray-500 text-xl leading-8 mb-15">
            For emergency dental care or to schedule an appointment,
            contact our office or visit our clinic.
            </p>

            <div className="grid md:grid-cols-2 gap-8">

              
            <div className="bg-white border rounded-2xl p-8 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center mb-8">
                <FaMapMarkerAlt className="text-sky-600 text-3xl" />
                </div>

                <h3 className="text-2xl font-bold text-[#0E384C] mb-4">
                Visit Us On
                </h3>

                <p className="text-gray-500 text-l leading-5">
                24/11 Robert Road,
                <br />
                New York, USA
                </p>
            </div>

              
            <div className="bg-white border rounded-2xl p-8 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center mb-8">
                <FaPhoneAlt className="text-sky-600 text-3xl" />
                </div>

                <h3 className="text-2xl font-bold text-[#0E384C] mb-4">
                Contact Us
                </h3>

                <p className="text-gray-500 text-l leading-5">
                (+01) 789 854 856
                <br />
                (+01) 789 854 856
                </p>
            </div>

            
            <div className="bg-white border rounded-3xl p-10 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center mb-8">
                <FaClock className="text-sky-600 text-3xl" />
                </div>

                <h3 className="text-2xl font-bold text-[#0E384C] mb-4">
                Opening Hours
                </h3>

                <p className="text-gray-500 text-l leading-8">
                Mon - Sat : 09 AM - 08 PM
                <br />
                Sunday Closed
                </p>
            </div>

    
            <div className="bg-white border rounded-3xl p-10 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center mb-8">
                <FaEnvelope className="text-sky-600 text-3xl" />
                </div>

                <h3 className="text-2xl font-bold text-[#0E384C] mb-4">
                Email Us
                </h3>

                <p className="text-gray-500 text-l leading-8">
                info@example.com
                <br />
                support@example.com
                </p>
            </div>

            </div>
        </div>

        
        <div className="flex items-start">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18..."
            className="w-full h-full rounded-3xl border"
            loading="lazy"
            ></iframe>
        </div>

        </div>
    </div>

    <section className="bg-[#f8f8f8] mt-20">
      <div className="grid lg:grid-cols-2">

        <div>
          <Image
            src="/Girl.jpg"
            alt="Contact Girl"
            width={900}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-12">
          <p className="uppercase tracking-[4px] text-sky-500 font-semibold mb-4">
            Contact Us
          </p>

          <h2 className="text-5xl font-bold text-[#0E384C] mb-10">
            <span className="text-sky-500">Get</span> In Touch With Us
          </h2>

          <div className="grid md:grid-cols-2 gap-5 ">
            <input
              type="text"
              placeholder="Enter Name"
              className="border rounded-2xl p-5 text-black "
            />

            <input
              type="email"
              placeholder="Enter Email"
              className="border rounded-2xl p-5 text-black"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="border rounded-2xl p-5 text-black"
            />

            <input
              type="text"
              placeholder="Subject"
              className="border rounded-2xl p-5 text-black"
            />
          </div>

          <textarea
            rows={6}
            placeholder="Your Message"
            className="w-full border rounded-2xl p-5 mt-5 text-black"
          ></textarea>

          <button className="mt-8 bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-[#0E384c] flex items-center gap-2">
            Send Message 
            <div className="rounded-full bg-white text-[#1E84B5] w-8 h-8 flex items-center justify-center text-sm">→</div>
          </button>
        </div>
      </div>
    </section>

    </section>
    </>
);
}








