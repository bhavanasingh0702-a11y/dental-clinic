import Navbar from "../components/Navbar";
import Image from "next/image";
import { ArrowUpRight, CheckCircle, MessageCircle } from "lucide-react";

export default function DentalCare() {

const services = [
    "General Dental Care",
    "Dental Implants",
    "Cosmetic Dentistry",
    "Teeth Whitening",
];

    return(

        
        <>
        <Navbar />
        
        <section className= "bg-blue-50 py-24 px-6 ">
            <div className="text-center mb-16">
                <div className=" font-semibold text-[#0F2D46]"> 
                    <h2 className="text-6xl">
                        <span className="text-[#0F2D46]">General </span > 
                        <span className="text-[#2A8CCB]">Dental Care </span>
                    </h2>
            
                </div>
            </div>
</section>

    <section className="max-w-7xl mx-auto px-6 py-16 bg-blue-50">
    <div className="grid lg:grid-cols-[320px_1fr] gap-10 items-start">
        {/* Left Side */}
        <div className="space-y-8 sticky top-24 self-start">
          {/* Services Card */}
        <div className="bg-blue-50 rounded-[35px] p-10">
            <h2 className="text-3xl font-bold text-[#0B2A4A] mb-10">
            Our Services
            </h2>

            <div className="space-y-6">
            {services.map((service, index) => (
                <div key={index}>
                <div className="flex justify-between items-center group cursor-pointer">
                    <h3 className="text-lg text-[#17395A] group-hover:text-sky-500 transition">
                    {service}
                    </h3>

                    <ArrowUpRight
                    size={30}
                    className="text-sky-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                    />
                </div>

                {index !== services.length - 1 && (
                    <div className="border-b border-gray-300 mt-6"></div>
                )}
                </div>
            ))}
            </div>
        </div>

          {/* Need Help Card */}
        <div className="bg-[#2F8DBD] rounded-[35px] p-10 text-center text-white">
                <div className="flex justify-center mb-8">
            <div className="border-4 border-white rounded-full p-4">
                <MessageCircle size={60} />
            </div>
            </div>

            <h2 className="text-4xl font-bold">Need Help ?</h2>

            <p className="mt-5 text-lg text-blue-100">
            We are always here to answer your questions and guide you to the
            best dental care.
            </p>

            <button className="mt-8 bg-white text-[#2F8DBD] px-8 py-3 rounded-full font-semibold hover:bg-[#0E384c] transition">
            Contact Us
            </button>
        </div>
        </div>

        {/* Right Image */}
        <div className="space-y-12">
        <div className=" relative h-[500px] rounded-[45px] overflow-hidden">
        <Image
            src="/service-single-img.jpg" 
            alt="Dental"
            fill
            className="object-cover"
        />
        </div>


    <div className="mt-10">
    <h2 className="text-3xl font-bold text-[#143B5D] mb-8">
        Advanced Diagnostic Tools
    </h2>

      {/* Paragraph 1 */}
    <p className="text-lg text-gray-500 leading-relaxed mb-10">
        Modern dentistry utilizes advanced diagnostic tools and technologies to
        ensure accurate and efficient treatments. Digital X-rays, intraoral
        cameras, and 3D imaging provide detailed views of teeth and underlying
        structures, aiding in precise diagnosis and treatment planning.
    </p>

      {/* Paragraph 2 */}
    <p className="text-lg text-gray-500 leading-relaxed mb-14">
        Dentists recognize that each patient has unique needs and concerns.
        Personalized care plans are developed to address individual dental
        health goals and preferences. Dentists also educate patients on proper
        oral hygiene practices and offer advice on diet and lifestyle choices
        that can impact oral health.
    </p>

    
      {/* Heading */}
    <h2 className="text-3xl font-bold text-[#143B5D] mb-8">
        Comfort And Convenience
    </h2>

      {/* Paragraph */}
    <p className="text-lg text-gray-500 leading-relaxed mb-16">
        Many dental practices prioritize creating a comfortable and stress-free
        environment for patients. This includes offering amenities like
        sedation dentistry for those with dental anxiety, flexible scheduling
        options, and comprehensive care under one roof.
    </p>
    

      {/* Features */}
    <div className="grid md:grid-cols-2 gap-8 ">
        
        <div className="flex items-center gap-4">
        <CheckCircle
            className="text-sky-500 fill-sky-500 text-white"
            size={35}
        />
        <span className="text-xl font-bold text-[#143B5D]">
            Experienced Team
        </span>
        </div>

        <div className="flex items-center gap-4">
        <CheckCircle
            className="text-sky-500 fill-sky-500 text-white"
            size={35}
        />
        <span className="text-xl font-bold text-[#143B5D]">
            Comprehensive Services
        </span>
        </div>

        <div className="flex items-center gap-4">
        <CheckCircle
            className="text-sky-500 fill-sky-500 text-white"
            size={35}
        />
        <span className="text-xl font-bold text-[#143B5D]">
            State-Of-The-Art Technology
        </span>
        </div>

        <div className="flex items-center gap-4">
        <CheckCircle
            className="text-sky-500 fill-sky-500 text-white"
            size={35}
        />
        <span className="text-xl font-bold text-[#143B5D]">
            Emergency Dental Services
        </span>
        </div>
        </div>

        <section className="mt-16">

<div className="grid  md:grid-cols-2 gap-8">

    <div className="relative h-[400px] rounded-[35px] overflow-hidden shadow-lg">
    <Image
        src="/service-entry-img-1.jpg"
        alt=""
        fill
        className="object-cover hover:scale-105 duration-500"
    />
    </div>

    <div className="relative h-[400px] rounded-[35px] overflow-hidden shadow-lg">
    <Image
        src="/service-entry-img-2.jpg"
        alt=""
        fill
        className="object-cover hover:scale-105 duration-500"
    />
    </div>

</div>

<div className="mt-10 space-y-8">

    <p className="text-lg text-[#5C738A] text-justify">
    The effectiveness of teeth whitening depends on various factors,
    including the method used, the cause of discoloration, and the
    individual's teeth. In-office whitening treatments generally provide
    the most noticeable results, often lightening teeth by several shades
    in a single visit. At-home kits can also be very effective,
    especially when used consistently and as directed.
    </p>

    <p className="text-lg  text-[#5C738A] text-justify">
    It's important to note that teeth whitening is not permanent.
    The longevity of the results depends on your lifestyle and oral
    hygiene habits. Avoiding foods and drinks that cause staining,
    not smoking, and maintaining good oral hygiene can help prolong
    the effects of whitening treatments.
    </p>

</div>

</section>

        </div>
    </div>
    </div>

    
    </section>
    </>
    )
}





