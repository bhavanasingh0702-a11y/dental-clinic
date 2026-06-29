import Navbar from "../components/Navbar";
export default function Home() {
return (
    <>
    <Navbar /> 
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
    <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
    >
        <source src="/dentaire-video.mp4" type="video/mp4" />
    </video>

      {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
    <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="max-w-5xl text-center text-white">
        <p className="mb-4 text-sm font-medium uppercase tracking-[4px]">
            ✦ Welcome To Dentaire
        </p>

        <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Dental Care for the <br />
            Whole Family
        </h1>

        <p className="mx-auto mb-10 max-w-3xl text-base text-gray-200 md:text-lg">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal.
        </p>

        <button className="group inline-flex items-center gap-4 rounded-full bg-[#1E84B5] px-8 py-4 text-lg font-semibold transition hover:bg-[#0E384c]">
            Make An Appointment

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition group-hover:translate-x-1">
            ↗
            </span>
        </button>
        </div>
    </div>
    </section>
    </>
);
}