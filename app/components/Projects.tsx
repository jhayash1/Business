const projects = [
  {
    title: "E-commerce Platform",
    category: "Next.js / Node.js",
    description:
      "Modern e-commerce platform with authentication, cart, checkout and payment integration.",
  },
  {
    title: "Business Website",
    category: "Next.js / Tailwind CSS",
    description:
      "Professional responsive website designed for a growing business.",
  },
  {
    title: "Admin Dashboard",
    category: "React / TypeScript",
    description:
      "Clean and scalable dashboard for managing business data and operations.",
  },
];
export default function Project(){
    return(
         <section id="projects" className="bg-gray-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <p className="font-semibold text-blue-600">
              OUR WORK
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              Featured Projects
            </h2>

          </div>


          <div className="mt-14 grid gap-8 md:grid-cols-3">

            {projects.map((project) => (
              <div
                key={project.title}
                className="overflow-hidden rounded-2xl border bg-white shadow-sm"
              >

                <div className="flex h-52 items-center justify-center bg-gray-900">

                  <span className="text-4xl font-bold text-white">
                    Jha<span className="text-blue-400">Tech</span>
                  </span>

                </div>

                <div className="p-6">

                  <p className="text-sm font-semibold text-blue-600">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {project.description}
                  </p>

                  <button className="mt-5 font-semibold text-blue-600 hover:text-blue-700">
                    View Project →
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>
    )
}