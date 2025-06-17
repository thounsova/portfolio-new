import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll/modules";
import burgerAnimation from "../../assets/burger-menu-animation.json";

const navLinks = [
  { title: "About", link: "about", id: 0 },
  { title: "Skills", link: "Skills", id: 1 },
  { title: "Projects", link: "projects", id: 2 },
  { title: "Contact", link: "contact", id: 4 },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const nextState = !prev;
      if (nextState) {
        lottieRef.current?.playSegments([25, 60], true); // open
      } else {
        lottieRef.current?.playSegments([60, 25], true); // close
      }
      return nextState;
    });
  };

  const handleMobileLinkClick = () => {
    if (isOpen) toggleMenu();
  };

  return (
    <header className="sticky top-0 z-50 w-full px-4 mt-4">
      <nav className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl transition-all duration-300">
        {/* Top Row */}
        <div className="flex items-center justify-between py-3 md:px-6 px-2">
          {/* Logo */}
          <h2 className="text-2xl font-bold text-white">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <span className="bg-gradient-to-r from-blue-400 to-pink-500 text-transparent bg-clip-text">
                I'm REACH
              </span>
            </ScrollLink>
          </h2>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-200 rounded-md"
            onClick={toggleMenu}
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

        {/* Links */}
        <div
          className={`overflow-hidden transition-all duration-500 md:block ${
            isOpen ? "max-h-64" : "max-h-0"
          } md:max-h-full`}
        >
          <ul className="flex flex-col md:flex-row items-center justify-center md:space-x-6 md:py-2">
            {navLinks.map((item) => (
              <li key={item.id} className="w-full md:w-auto text-center">
                <ScrollLink
                  to={item.link}
                  className="block py-2 px-3 bg-gradient-to-r from-blue-400 to-pink-500 text-transparent bg-clip-text hover:text-gray-300 cursor-pointer transition"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={handleMobileLinkClick}
                >
                  {item.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
