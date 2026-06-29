export default function AppointmentPage() {
return (
    <section className="bg-white py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Heading */}
        <h1 className="text-[45px] md:text-[80px] font-extrabold leading-tight tracking-tight">
        <span className="text-[#111827]">Make An </span>
        <span className="text-[#2EA3F2]">Appointment</span>
        </h1>

        {/* Breadcrumb */}
        <div className="flex justify-center items-center gap-4 mt-8">
        <span className="text-[18px] font-semibold text-[#111827] hover:text-[#2EA3F2] cursor-pointer transition">
            Home
        </span>

        <span className="text-[#2EA3F2] text-2xl">/</span>

        <span className="text-[18px] font-semibold text-[#111827]">
            Appointment
        </span>
        </div>

    </div>
    </section>
);
}