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
    <div className="sticky top-0 z-50 w-full">
      <nav className="backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-xl justify-between md:items-center md:flex max-w-3xl md:max-w-5xl mx-auto px-4 mt-4 transition-all duration-300">
        <div className="flex items-center justify-between py-3 md:py-3 md:block">
          <div className="md:py-3 md:block">
            <h2 className="text-2xl font-bold text-white">
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                <span className=" font-bold mb-3 bg-gradient-to-r from-blue-400 to-pink-500 text-transparent bg-clip-text">
                  I'm REACH
                </span>{" "}
              </ScrollLink>
            </h2>
          </div>
          <button
            className=" text-gray-200 rounded-md outline-none md:hidden"
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
        <div>
          <div
            className={`flex-1 justify-self-center md:block md:pb-0 md:mt-0 overflow-hidden transition-all duration-700 md:max-h-screen ${
              isOpen ? "max-h-screen" : "max-h-0"
            }`}
          >
            <ul className="flex flex-col md:flex-row items-center justify-center md:space-x-6 pb-4 md:pb-0">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <ScrollLink
                    to={item.link}
                    className="block lg:inline-block bg-gradient-to-r from-blue-400 to-pink-500 text-transparent bg-clip-text hover:text-gray-400 cursor-pointer transition p-2 md:p-0"
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
      </nav>
    </div>
  );
};

export default Navbar;
