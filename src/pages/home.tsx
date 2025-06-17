import About from "../components/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Header/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Qualification from "../components/Qualification";
import Tow from "../components/project-two";

import Skills from "../components/Skills";
import Aboutone from "../components/aboutone";
import Card from "../components/deloper";

function HomePage() {
  return (
    <>
      <header className="w-full fixed top-0 z-50 backdrop-blur-md  shadow-md">
        <div className="mx-auto px-4 md:px-20">
          <Nav />
        </div>
      </header>
      <main className=" pt-12 px-4 ">
        <Hero />
        <About />
        <Aboutone />
        <Skills />
        <Card />

        <Projects />
        <Tow />
        <Qualification />
        <div className="mt-20">
          <Contact />
        </div>
      </main>

      <footer className="bg-footer-bg w-full">
        <hr className="w-full h-0.5 mx-auto mt-20 bg-neutral-200 border-0"></hr>

        <Footer />
      </footer>
    </>
  );
}

export default HomePage;
