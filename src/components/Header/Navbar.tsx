import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll/modules";
import burgerAnimation from "../../assets/burger-menu-animation.json";

const navLinks = [
  { title: "Projects", link: "projects", id: 2 },
  { title: "Contact", link: "contact", id: 4 },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    isOpen
      ? lottieRef.current?.playSegments([60, 25], true)
      : lottieRef.current?.playSegments([25, 60], true);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent">
      <nav className="backdrop-blur-md bg-white/20 dark:bg-black/30 border border-white/30 dark:border-black/50 shadow-md rounded-xl max-w-6xl mx-auto px-6 sm:px-8 py-4 mt-4 flex items-center justify-between transition-all duration-300">
        {/* Logo */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer flex-shrink-0"
          aria-label="Go to home"
        >
          <h1 className="text-xl text-white sm:text-2xl font-extrabold bg-gradient-to-r bg-clip-text select-none">
          Na <span className=" from-blue-400 font-extrabold bg-gradient-to-r bg-clip-text select-none to-pink-500 text-transparent">Reach</span>
          </h1>
        </ScrollLink>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((item) => (
            <li key={item.id}>
              <ScrollLink
                to={item.link}
                className="text-sm sm:text-base font-semibold bg-gradient-to-r from-blue-400 to-pink-500 text-transparent bg-clip-text hover:opacity-90 transition cursor-pointer"
                activeClass="opacity-100 underline decoration-pink-500 underline-offset-4"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                {item.title}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            <Lottie
              lottieRef={lottieRef}
              animationData={burgerAnimation}
              style={{ height: 36, width: 36 }}
              loop={false}
              autoplay={false}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Nav Dropdown */}
      <div
        className={`md:hidden transition-[max-height,padding] duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-48 py-4" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 bg-white/20 dark:bg-black/40 rounded-xl mx-6 mt-3 py-3 px-4 shadow-md">
          {navLinks.map((item) => (
            <li key={item.id} className="w-full text-center">
              <ScrollLink
                to={item.link}
                className="block w-full text-base font-semibold bg-gradient-to-r from-blue-400 to-pink-500 text-transparent bg-clip-text hover:opacity-90 transition cursor-pointer"
                activeClass="opacity-100 underline decoration-pink-500 underline-offset-4"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={toggleMenu}
              >
                {item.title}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
