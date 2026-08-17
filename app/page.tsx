import AboutPage from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import Project from "./components/Projects";
import Service from "./components/Service";







export default function Home() {
  return (
    <main>

      {/* ================= NAVBAR ================= */}

      <Navbar />


      {/* ================= HERO ================= */}


      <Hero />

      {/* ================= TECH STACK ================= */}




      {/* ================= SERVICES ================= */}


<Service/>

      {/* ================= ABOUT ================= */}

      <AboutPage />


      {/* ================= PROJECTS ================= */}

      <Project />


      {/* ================= PROCESS ================= */}

      <Process />


      {/* ================= CTA ================= */}

      <section className="bg-blue-600">

        <div className="mx-auto max-w-5xl px-6 py-20 text-center">

          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Have a Project in Mind?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Let's discuss your idea and build something that helps your
            business grow.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 hover:bg-gray-100"
          >
            Start Your Project
          </a>

        </div>

      </section>


      {/* ================= CONTACT ================= */}


      <Contact />

      {/* ================= FOOTER ================= */}

      <Footer />

    </main>
  );
}