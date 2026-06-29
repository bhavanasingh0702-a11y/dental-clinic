"use client";

import CountUp from "react-countup";

export default function StatsSection() {
const stats = [
    {
    number: 75,
    suffix: "+",
    title: "Insurance Covered",
    },
    {
    number: 2,
    suffix: "K",
    title: "Realized Projects",
    },
    {
    number: 22,
    suffix: "K",
    title: "Happy Customers",
    },
    {
    number: 18,
    suffix: "+",
    title: "Experience Doctors",
    },
];

return (
    <section className="bg-[#f5f5f5] py-20">
    <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((item, index) => (
            <div key={index}>
        <h2 className="text-4xl font-bold text-[#0E384C]">
<CountUp
    end={item.number}
    duration={3}
    enableScrollSpy
/>
{item.suffix}
</h2>
            <h3 className="text-xl font-semibold text-[#0E384C] mt-3">
                {item.title}
            </h3>

            <div className="w-full h-[1px] bg-gray-300 my-8"></div>

            <p className="text-gray-600 text-sm leading-8">
                Our team loves dental trivia. Did you know that tooth enamel.
            </p>
            </div>
        ))}
        </div>
    </div>
    </section>
);
}