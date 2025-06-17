import { HiArrowDown } from "react-icons/hi";
import { FaGithub, FaFacebook, FaCloud } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll/modules";
import profileImage from "../assets/images/photo_2025-01-11_13-02-24.jpg";
import Image from "../assets/images/dynamic-light-rays-background-vector-54607547.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative h-[90vh] shadow-lg shadow-black/60 rounded-lg flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={Image}
        alt="Background"
        className="absolute w-full h-[900px] object-cover ring-opacity-70"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10" />

      {/* Content */}
      <div className="z-20 mt-6 max-w-2xl px-6 text-white shadow-lg shadow-black/60 rounded-lg">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            alt="profile-picture"
            loading="lazy"
            width={144}
            height={144}
            decoding="async"
            src={profileImage}
            style={{ color: "transparent" }}
            className="rounded-full w-36 h-36 mt-4 object-cover border-4 border-white shadow-lg hover:shadow-2xl ring-2 ring-white/20 dark:ring-purple-500/30 transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-pink-500 text-transparent bg-clip-text drop-shadow-md">
          Na REACH
        </h1>
        <p className="text-xl md:text-2xl font-medium mb-3 drop-shadow-md">
          Full-Stack Developer
        </p>
        <p className="text-sm md:text-base text-gray-300 mb-6 drop-shadow-sm">
          React | TypeScript | Node | Express | TailwindCSS | MySQL
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <ScrollLink
            to="projects"
            smooth={true}
            offset={-100}
            duration={500}
            className="px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:opacity-90 cursor-pointer shadow-md hover:shadow-lg transition-shadow"
          >
            View Projects
          </ScrollLink>
          <a
            href="#"
            className="px-5 py-2 text-sm font-semibold rounded-full border border-white/20 hover:bg-white/10 transition shadow-md hover:shadow-lg"
          >
            Download CV
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-white text-2xl  p-2">
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-indigo-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://facebook.com/your-facebook-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-600 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://cloudinary.com/your-cloudinary-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Cloudinary"
            className="hover:text-purple-500 transition"
          >
            <FaCloud />
          </a>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-6 z-20">
        <ScrollLink
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown
            size={28}
            className="animate-bounce  text-white cursor-pointer drop-shadow-lg"
          />
        </ScrollLink>
      </div>
    </section>
  );
}

export default Hero;
