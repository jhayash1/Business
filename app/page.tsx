import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import Project from "./components/Projects";







export default function Home() {
  return (
    <main>

      {/* ================= NAVBAR ================= */}

      <Navbar/>


      {/* ================= HERO ================= */}

      
<Hero/>

      {/* ================= TECH STACK ================= */}

      


      {/* ================= SERVICES ================= */}

      


      {/* ================= ABOUT ================= */}

      <section id="about" className="bg-white py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">

          <div>

            <p className="font-semibold text-blue-600">
              WHY JHATECH
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              Technology That Works For Your Business
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              We don't just build websites. We focus on creating fast,
              responsive and scalable digital experiences that help
              businesses attract customers and grow online.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">

              <div>
                <h3 className="text-3xl font-bold text-blue-600">
                  10+
                </h3>
                <p className="mt-1 text-gray-600">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-600">
                  20+
                </h3>
                <p className="mt-1 text-gray-600">
                  Technologies
                </p>
              </div>

            </div>

          </div>


          <div className="grid gap-5 sm:grid-cols-2">

            {[
              {
                title: "Responsive",
                text: "Works perfectly across mobile, tablet and desktop.",
              },
              {
                title: "Fast",
                text: "Optimized websites for better performance.",
              },
              {
                title: "SEO Friendly",
                text: "Built with search-engine-friendly structure.",
              },
              {
                title: "Scalable",
                text: "Architecture that can grow with your business.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border p-6"
              >
                <h3 className="text-lg font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 leading-6 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

     <Project/>


      {/* ================= PROCESS ================= */}

      <Process/>


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

      
<Contact/>

      {/* ================= FOOTER ================= */}

      <Footer/>

    </main>
  );
}