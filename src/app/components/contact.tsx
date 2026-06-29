
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

export default function ContactMap() {
  return (
    <section className="bg-[#f7f7f7] py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side Map */}
        <div className="overflow-hidden rounded-40 h-175">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18..."
            className="w-full h-full rounded-3xl border"
            loading="lazy"
            title="Dental Clinic Location Map"
            ></iframe>
        </div>

        {/* Right Side Content */}
        <div>

          <p className="uppercase tracking-[6px] text-[#1E84B5] font-semibold mb-6">
            ✦ Contact Now
          </p>

          <h2 className="text-4xl font-bold leading-tight mb-12">
            <span className="text-[#1E84B5]">Get Free</span>{" "}
            <span className="text-slate-900">
              Professional Consultation
            </span>
          </h2>

          {/* Contact Info */}

          <div className="space-y-10">

            <div className="flex items-center gap-6">
              <FaMapMarkerAlt className="text-[#1E84B5] text-2xl" />
              <p className="text-xl text-slate-600">
                24/11 Robert Road , New York , USA
              </p>
            </div>

            <div className="flex items-center gap-6">
              <FaPhoneAlt className="text-[#1E84B5] text-2xl" />
              <p className="text-xl text-slate-600">
                +(123) 698-5245
              </p>
            </div>

            <div className="flex items-center gap-6">
              <FaEnvelope className="text-[#1E84B5] text-2xl" />
              <p className="text-xl text-slate-600">
                info@domain.com
              </p>
            </div>

            <div className="flex items-center gap-6">
              <FaClock className="text-[#1E84B5] text-2xl" />
              <p className="text-xl text-slate-600">
                Mon - Sat : 09:00 AM - 08:00 PM
              </p>
            </div>

          </div>

          {/* Button */}

          <button className="mt-16 bg-[#1E84B5] hover:bg-sky-700 transition-all text-white rounded-full px-8 py-4 flex items-center gap-6 text-lear
          xl font-semibold cursor-pointer">
            Make An Appointment

            <span className="bg-white text-[#1E84B5] w-8 h-8 rounded-full flex items-center justify-center">
              <FaArrowRight />
            </span>
          </button>

        </div>
      </div>
    </section>
  );
}