const services = [
  {
    title: "Business Websites",
    description:
      "Modern, responsive and professional websites designed to help your business build a strong online presence.",
    icon: "🌐",
  },
  {
    title: "E-commerce Development",
    description:
      "Complete online stores with product management, cart, checkout and secure payment integration.",
    icon: "🛒",
  },
  {
    title: "Web Applications",
    description:
      "Custom React and Next.js applications built around your business requirements.",
    icon: "⚡",
  },
  {
    title: "API & Backend",
    description:
      "Secure and scalable REST APIs using Node.js, Express.js and MongoDB.",
    icon: "⚙️",
  },
];
export default function Service(){
    return(
        <section id="services" className="bg-gray-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-2xl text-center">

            <p className="font-semibold text-blue-600">
              OUR SERVICES
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              Solutions For Your Business
            </h2>

            <p className="mt-4 text-gray-600">
              From simple business websites to complete web applications,
              we help businesses establish and grow their digital presence.
            </p>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="text-4xl">
                  {service.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {service.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>
    )
}