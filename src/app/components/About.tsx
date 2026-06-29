
import Image from "next/image";

export default function About() {
return (
    <section className="bg-[#f8fbfd] py-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-20 items-start">

        
        <div className="relative flex justify-center lg:block pb-40 md:pb-52 lg:pb-0">

        
            <Image
            src="/About2.jpg"
            alt="Dental Care"
            width={420}
            height={220}
            className="rounded-[40px] border-8 border-white shadow-xl"
            />


{/* Rotating Circle */}

<div className="absolute left-1/2 top-1/4 -translate-x-1/2 translate-y-1/2 -mt-10">
<div className="absolute flex items-center justify-center ml-10">
    <svg className="animate-spin-slow w-40 h-40"
    viewBox="0 0 200 200">
    <defs>
<path
    id="circlePath"
    d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
/>
</defs>
        <circle
        cx="100"
        cy="100"
        r="75"
        fill="none"
        stroke="#1E84B5"
        strokeWidth="30"
        />


        <text
        fill="white"
        fontSize="12"
        fontWeight="700"
        letterSpacing="3"
        >
            <textPath href="#circlePath"> 15+ YEARS OF EXPERIENCE . 15+ YEARS OF EXPERIENCE</textPath>
        </text>
    </svg>

</div>
</div>

        
            <div className="absolute -bottom-24 left-32">
            <Image
                src="/About1.jpg"
                alt="Clinic"
                width={380}
                height={320}
                className="rounded-[40px] border-8 border-white shadow-xl"
            />
            </div>
        </div>

        
        <div>

            <p className="uppercase tracking-[5px] text-[#1E84B5] font-semibold mb-4">
            About Us
            </p>

            <h2 className=" text-4xl font-bold leading-tight mb-8">
            <span className="text-[#1E84B5] mr-2">
                Your Journey
                </span>
                <span className="text-[#0E384C] ">   
                to a Healthier
            <br />
            Smile Begins Here
            </span>
            </h2>

            <p className="text-gray-600 text-lg leading-9 mb-10">
            At PrimeCare, we are dedicated to providing exceptional dental care for every smile. Our team of experienced dentists and staff are committed to delivering personalized treatment using the latest technology. We believe in creating a comfortable and welcoming environment for our patients, ensuring that every visit is a positive experience. Whether you need routine check-ups, cosmetic dentistry, or specialized treatments, we are here to help you achieve optimal oral health and a confident smile.
            </p>

        
            <div className="grid md:grid-cols-2 gap-y-6 gap-x-10 mb-12">

            <div className="flex items-center gap-3">
                <span className="text-[#1E84B5] text-2xl">✓</span>
                <span className="font-semibold text-xl text-black">
                Experienced Team
                </span>
            </div>

            <div className="flex items-center gap-3">
                <span className="text-[#1E84B5] text-2xl">✓</span>
                <span className="font-semibold text-xl text-black">
                Comprehensive Services
                </span>
            </div>

            <div className="flex items-center gap-3">
                <span className="text-sky-500 text-2xl">✓</span>
                <span className="font-semibold text-xl text-black">
                State-Of-The-Art Technology
                </span>
            </div>

            <div className="flex items-center gap-3">
                <span className="text-sky-500 text-2xl">✓</span>
                <span className="font-semibold text-xl text-black">
                Emergency Dental Services
                </span>
            </div>

            </div>

            
            <button className="bg-[#1E84B5] hover:bg-[#0E384c] text-white px-4 py-2 mt-6 rounded-full flex items-center gap-2 cursor-pointer">
            Read More About Us
            <div className="rounded-full bg-white text-[#1E84B5] w-8 h-8 flex items-center justify-center text-sm gap-2">→</div> 
            </button>

        </div>

        </div>
    </div>
    </section>
);
}     