import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRef, useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll/modules";
import { BsMoon, BsSun } from "react-icons/bs";
import burgerAnimation from "../../assets/burger-menu-animation.json";

const navLinks = [
  { title: "Projects", link: "projects", id: 2 },
  { title: "Contact", link: "contact", id: 4 },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    isOpen
      ? lottieRef.current?.playSegments([60, 25], true)
      : lottieRef.current?.playSegments([25, 60], true);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="sticky top-0 z-50 w-full">
      <nav className="backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 shadow-md rounded-xl max-w-6xl mx-auto px-6 py-3 mt-4 flex items-center justify-between transition-all duration-300">
        {/* Logo */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-pink-500 text-transparent bg-clip-text">
            I'm REACH
          </h1>
        </ScrollLink>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((item) => (
            <li key={item.id}>
              <ScrollLink
                to={item.link}
                className="text-sm font-medium bg-gradient-to-r from-blue-400 to-pink-500 text-transparent bg-clip-text hover:text-gray-400 transition cursor-pointer"
                activeClass="active"
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

        {/* Right Side: Dark Mode + Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-white border border-white/20 rounded-full p-2 hover:bg-white/10 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <BsSun size={18} /> : <BsMoon size={18} />}
          </button>

          {/* Burger Button (Mobile) */}
          <button
            className="text-white md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <Lottie
              lottieRef={lottieRef}
              animationData={burgerAnimation}
              style={{ height: 30 }}
              loop={false}
              autoplay={false}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Nav Links */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-40 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 bg-white/10 dark:bg-black/30 rounded-xl mx-6 mt-2 py-2">
          {navLinks.map((item) => (
            <li key={item.id}>
              <ScrollLink
                to={item.link}
                className="text-sm font-medium bg-gradient-to-r from-blue-400 to-pink-500 text-transparent bg-clip-text hover:text-gray-400 transition cursor-pointer"
                activeClass="active"
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
    </div>
  );
};

export default Navbar;
