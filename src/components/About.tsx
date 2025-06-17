import { Link as ScrollLink } from "react-scroll/modules";
import bgImage from "../assets/bgpattern3.png";
import aboutImage from "../assets/images/about-image2.png";

function About() {
  return (
    <section
      id="about"
      className="relative py-20 bg-gray-50  dark:bg-gray-900"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        opacity: 0.05,
        pointerEvents: "none",
        position: "absolute",
        inset: 0,
        zIndex: 0,
      }}
    >
      {/* Overlay container for content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-2/3 text-center md:text-left"></div>
      </div>
    </section>
  );
}

export default About;
