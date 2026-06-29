import AppointmentBanner from "../components/AppointmentBanner";

export default function AppointmentSection() {
return (
    <>
    <AppointmentBanner /> 
    <section className="py-20 bg-white">
    <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

        
        <div>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900">
            Experience
            <br />
            <span className="text-sky-500">Dental Excellence</span>
            <br />
            with a Gentle
            <br />
            Touch
            </h2>

            <p className="mt-10 text-gray-500 text-lg leading-9 max-w-xl">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The
            point of using Lorem Ipsum is that it has a more-or-less normal.
            </p>

            <button className="mt-12 flex items-center gap-4 bg-sky-500 hover:bg-sky-600 transition text-white px-8 py-4 rounded-full font-semibold text-lg">
            Make An Appointment
            <span className="w-10 h-10 rounded-full bg-white text-sky-500 flex items-center justify-center">
                ↗️
            </span>
            </button>
        </div>

          {/* Right Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <h3 className="text-4xl font-bold text-center">
            <span className="text-sky-500">Book</span> Appointment
            </h3>

            <p className="text-center text-gray-500 mt-4 mb-10">
            Easily schedule your appointment by filling out our simple form
            </p>

            <form className="space-y-6">
            <label htmlFor="name" className="sr-only">Name</label>
            <input
                id="name"
                type="text"
                title="Enter Name"
                placeholder="Enter Name"
                className="w-full border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-sky-500"
            />

            <div className="grid md:grid-cols-2 gap-5">
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                id="email"
                type="email"
                title="Enter Email"
                placeholder="Enter Email"
                className="border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-sky-500"
                />

                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <input
                id="phone"
                type="tel"
                title="Phone Number"
                placeholder="Phone Number"
                className="border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-sky-500"
                />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
                <label htmlFor="service" className="sr-only">Service</label>
                <select
                id="service"
                title="Choose a service"
                className="border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-sky-500 text-gray-500"
                >
                <option value="">Please choose any service</option>
                <option>Dental Checkup</option>
                <option>Teeth Cleaning</option>
                <option>Root Canal</option>
                </select>

                <label htmlFor="appointmentDate" className="sr-only">Appointment Date</label>
                <input
                id="appointmentDate"
                type="date"
                title="Choose appointment date"
                className="border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-sky-500"
                />
            </div>

            <button
                type="submit"
                className="mt-6 flex items-center gap-4 bg-sky-500 hover:bg-sky-600 transition text-white px-8 py-4 rounded-full font-semibold mx-auto"
            >
                Book Appointment
                <span className="w-10 h-10 rounded-full bg-white text-sky-500 flex items-center justify-center">
                ↗️
                </span>
            </button>
            </form>
        </div>

        </div>
    </div>
    </section>
    </>
);
}
