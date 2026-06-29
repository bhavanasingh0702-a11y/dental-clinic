import Image from "next/image";


const blogs = [
  {
    image: "/post-1.jpg",
    title: "The Importance Of Regular Dental Check-Ups",
    desc: "Maintaining oral health is crucial not only for a beautiful smile but also for overall well-being.",
  },
  {
    image: "/post-2.jpg",
    title: "Top 5 Benefits Of Professional Teeth Whitening",
    desc: "Discover how professional whitening can boost confidence and improve your smile.",
  },
  {
    image: "/post-3.jpg",
    title: "Understanding Dental Implants: What You Need To Know",
    desc: "Everything you need to know before getting dental implants.",
  },
];

export default function Blogs() {
  return (
    <section className="bg-[#eef5f9] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="flex items-center justify-center gap-2 uppercase tracking-[5px] text-[#1E84B5] font-semibold mb-4">
        
        ✦ Blogs
        </p>

          <h2 className="text-6xl font-bold mb-6">
            <span className="text-[#1E84B5]">Check Our</span>{" "}
            <span className="text-slate-900">Latest Articles</span>
          </h2>

          <p className="text-2xl text-slate-500">
            We are committed to sustainable, eco-friendly initiatives.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">

          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group bg-white rounded-[35px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden cursor-pointer">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-4">

                <h3 className="text-xl font-bold text-slate-900 leading-tight mb-4">
                  {blog.title}
                </h3>

                <p className="text-slate-500 leading-relaxed mb-6">
                  {blog.desc}
                </p>

                <button type="button" className="flex items-center gap-3 text-[#1E84B5] font-semibold text-lg group-hover:gap-5 transition-all cursor-pointer">
                  Read More
                  <div className="rounded-full bg-[#1E84B5] text-white w-6 h-6 flex items-center justify-center text-sm">→</div>
                  
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}