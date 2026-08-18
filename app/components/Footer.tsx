export default function Footer(){
    return(
        <footer className="bg-gray-950 text-gray-400">

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">

          <div>

            <h2 className="text-2xl font-bold text-white">
              Jha<span className="text-blue-500">Tech</span>
            </h2>

            <p className="mt-4 max-w-sm leading-7">
              Building modern websites and web applications that help
              businesses grow online.
            </p>

          </div>


          <div>

            <h3 className="font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-4 space-y-3">

              <a href="#home" className="block hover:text-white">
                Home
              </a>

              <a href="#services" className="block hover:text-white">
                Services
              </a>

              <a href="#projects" className="block hover:text-white">
                Projects
              </a>

              <a href="#contact" className="block hover:text-white">
                Contact
              </a>

            </div>

          </div>


          <div>

            <h3 className="font-semibold text-white">
              Contact
            </h3>

            <div className="mt-4 space-y-3">

              <p>📧 hello@Codivio.com</p>

              <p>📱 +91 XXXXX XXXXX</p>

              <p>🌐 Codivio.com</p>

            </div>

          </div>

        </div>


        <div className="border-t border-gray-800">

          <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm">
            © 2026 Codivio. All rights reserved.
          </div>

        </div>

      </footer>
    )
}