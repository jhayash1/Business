export default function Testimoniial(){
    return(
        <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">

          <p className="mb-6 text-center text-sm font-medium text-gray-500">
            Built with modern technologies
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            {[
              "React.js",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
              "MongoDB",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border bg-gray-50 px-5 py-2 text-sm font-medium text-gray-700"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>
      </section>
    )
}