export default function Hero(){
    return(
        <section
        id="home"
        className="bg-gradient-to-br from-blue-50 via-white to-indigo-50"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">

          <div>

            <p className="mb-5 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Web Development & Digital Solutions
            </p>

            <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
              We Build Websites That
              <span className="text-blue-600">
                {" "}Grow Your Business
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              DeepTech helps businesses build modern websites, e-commerce
              platforms and powerful web applications using modern
              technologies.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <a
                href="#contact"
                className="rounded-lg bg-blue-600 px-7 py-3 text-center font-semibold text-white hover:bg-blue-700"
              >
                Get Free Consultation
              </a>

              <a
                href="#projects"
                className="rounded-lg border border-gray-300 bg-white px-7 py-3 text-center font-semibold text-gray-800 hover:bg-gray-50"
              >
                View Our Work
              </a>

            </div>

          </div>


          <div className="relative">

            <div className="rounded-3xl bg-gray-900 p-8 shadow-2xl">

              <div className="mb-6 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="space-y-4 font-mono text-sm">

                <p className="text-gray-500">
                  // Build something amazing
                </p>

                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">business</span>{" "}
                  = {"{"}
                </p>

                <p className="pl-6 text-green-300">
                  website: "Modern",
                </p>

                <p className="pl-6 text-green-300">
                  performance: "Fast",
                </p>

                <p className="pl-6 text-green-300">
                  design: "Responsive",
                </p>

                <p className="pl-6 text-green-300">
                  technology: "Next.js",
                </p>

                <p>{"};"}</p>

                <p className="pt-4 text-gray-500">
                  // Ready to launch 🚀
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>
    )
}