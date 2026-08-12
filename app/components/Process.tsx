const process = [
  {
    number: "01",
    title: "Discuss",
    description:
      "We understand your business, requirements and goals.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create a clean and user-friendly interface for your customers.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We build your website using modern and scalable technologies.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We test, deploy and help you get your website online.",
  },
];
export default function Process(){
    return(
        <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-2xl text-center">

            <p className="font-semibold text-blue-600">
              OUR PROCESS
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              How We Work
            </h2>

          </div>


          <div className="mt-14 grid gap-8 md:grid-cols-4">

            {process.map((item) => (
              <div
                key={item.number}
                className="relative rounded-2xl border p-7"
              >

                <span className="text-4xl font-bold text-blue-100">
                  {item.number}
                </span>

                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>
    )
}