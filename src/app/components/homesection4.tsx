"use client";

import Image from "next/image";


const doctors = [
{
    name: "Dr.Johan Joe",
    image: "/team-1.jpg",
    content:"Lead Dentist",
},
{
    name: "Dr.Mike Johnson",
    image: "/team-2.jpg",
    content:"Senior Dantist",
},
{
    name: "Dr. Alison Banson",
    image: "/team-3.jpg",
    content:"Orthodontist",


},
{
    name: "Dr.Christopher Case",
    image: "/team-4.jpg",
    content:"Periodontist",
},
];

export default function Team() {
return (
    <section className="bg-[#f5fbff] py-24">
    <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
        <p className="uppercase tracking-[6px] text-[#1E84B5] font-semibold mb-4">
            ✦ OUR TEAM
        </p>

        <h2 className="text-6xl font-bold">
            <span className="text-[#1E84B5]">Our Friendly</span>{" "}
            <span className="text-[#083b5c]">Dentists Team</span>
        </h2>

        <p className="mt-8 text-2xl text-gray-500">
            We are committed to sustainability. eco-friendly initiatives.
        </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {doctors.map((doctor, index) => (
            <div key={index} className="text-center">

            <div className="relative bg-[#edf4f8] rounded-[40px] overflow-hidden">

                <Image
                src={doctor.image}
                alt={doctor.name}
                width={450}
                height={550}
                className="w-full h-auto object-cover"
                />

            
            </div>

            <h3 className="mt-8 text-2xl font-bold text-[#083b5c]">
                {doctor.name}
            </h3>
            <p className="mt-2 text-gray-500 font-medium tracking-wide">
    {doctor.content}
</p>

            </div>
        ))}
        </div>

</div>
    </section>
);
}