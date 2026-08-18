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
      <Navbar />
      <Hero />
      <Service />
      <AboutPage />
      <Project />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}