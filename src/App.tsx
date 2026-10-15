import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function App() {
  return (
    <main>
      <Hero />
      <hr className="container text-gray-600 mx-auto" />
      <Projects />
      <hr className="container text-gray-600 mx-auto" />
      <About />
      <hr className="container text-gray-600 mx-auto" />
      <Contact />
      <hr className="container text-gray-600 mx-auto" />
      <Footer />
    </main>
  );
}
