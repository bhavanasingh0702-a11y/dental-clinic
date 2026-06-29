import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Herosection from "./components/Herosection"
import Counter from "./components/counter";
import HomeSection2 from "./components/homesection2";
import HomeSection3 from "./components/homesection3";
import HomeSection4 from "./components/homesection4";
// import Pages from "./components/Doctors";
import Testimonials from "./components/Testimonials";
import Post from "./components/post";
import Contact from "./components/contact";
//import ContactUs from "./components/ContactUs";
//import Footer from "./components/Footer";
import AppointmentBanner from "./components/AppointmentBanner";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AppointmentBanner />
      <About />
      <Services />
      <Herosection />
      <Counter />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      {/* <Pages /> */}
      <Testimonials />
      <Post />
      <Contact />
      {/* <ContactUs /> */}
      {/* <Footer /> */}
    </>
  );
}

