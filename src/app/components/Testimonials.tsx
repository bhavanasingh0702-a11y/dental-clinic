import Image from 'next/image';

export default function Testimonials() {
  return (
<section className="bg-[#f5f5f5] py-24">

  {/* Heading */}
  <div className="max-w-7xl mx-auto text-center mb-20">
    <p className="uppercase tracking-[6px] text-[#1E84B5] font-semibold mb-6">
      ✦ TESTIMONIAL
    </p>

    <h2 className="text-4xl md:text-7xl font-bold mb-8">
      <span className="text-[#1E84B5]">What our</span>{" "}
      <span className="text-slate-900">Client Say</span>
    </h2>

    <p className="text-slate-500 text-2xl">
      We are committed to sustainability. eco-friendly initiatives.
    </p>
  </div>

  {/* Testimonial Content */}
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

    {/* Left Side */}
    <div className="relative">
      <Image
        src="/testimonials-img.jpg"
        alt="Dentist"
        width={600}
        height={650}
        className="rounded-[50px] object-cover"
      />

      {/* Rating Card */}
      <div className="absolute -bottom-15 left-12 bg-[#1E84B5] text-white rounded-[30px] p-5 w-135 max-w-full">

        <div className="flex items-center gap-8">
          <h2 className="text-5xl font-bold">4.7/5</h2>

          <div>
            <p className="text-xl">
              This Rate Is Given By User
            </p>

            <p className="text-xl">
              After Visiting Our Location
            </p>
          </div>
        </div>

        <div className="border-t border-white  mt-8 pt-8 flex items-center gap-8">

          <div className="flex text-yellow-400 text-3xl">
            ★★★★★
          </div>

          <span className="text-2xl">
            For Excellence Services
          </span>

        </div>
      </div>
    </div>

    {/* Right Side */}
    <div className="pt-12">

      <div className="text-[#1E84B5] text-8xl mb-5">
        ❝ 
      </div>

      <p className="text-2xl leading-relaxed text-slate-800 mb-12">
        I want to say thank you to my doctor Steve!
        Vivamus sagittis massa vitae bibendum rhoncus.
        Duis cursus. Thank you for helping me overcome
        my fear of the dentist!
      </p>

      {/* User */}
      <div className="flex items-center gap-8 mb-10">

        <Image
          src="/author-1.jpg"
          alt="User"
          width={50}
          height={50}
          className="rounded-full"
        />

        <div>
          <h3 className="text-2xl font-bold text-[#0E384c]">
            Robert Lee
          </h3>

          <p className="text-xl text-slate-500">
            Software Engineer
          </p>
        </div>

      </div>

      {/* Buttons */}
      <div className="flex gap-5">

        <button className="w-8 h-8 bg-[#1E84B5] text-white rounded-lg flex items-center justify-center">
          ←
        </button>

        <button className="w-8 h-8 bg-[#1E84B5] text-white rounded-lg flex items-center justify-center">
          →
        </button>

      </div>

    </div>

  </div>

</section>
  )
}