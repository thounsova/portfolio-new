import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Float, Sphere, Box, Cone, Icosahedron } from "@react-three/drei";
import { HiArrowDown } from "react-icons/hi";
import { FaGithub, FaFacebook, FaCloud } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll/modules";
import profileImage from "../assets/images/photo_2025-01-11_13-02-24.jpg";

export default function Hero3D() {
  return (
    <section className="relative h-screen w-full bg-gradient-to-br from-[#090314] to-[#3c0a59] text-white overflow-hidden">
      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Box args={[0.5, 0.5, 0.5]} position={[1, 1, 0]}>
            <meshStandardMaterial color="orange" />
          </Box>
          <Sphere args={[0.3, 32, 32]} position={[-1, -0.5, 0]}>
            <meshStandardMaterial color="purple" />
          </Sphere>
          <Icosahedron args={[0.4, 0]} position={[0, 1.5, -1]}>
            <meshStandardMaterial color="#ff44cc" />
          </Icosahedron>
          <Cone args={[0.2, 0.6, 20]} position={[-1.5, 0.5, -0.5]}>
            <meshStandardMaterial color="#00ffff" />
          </Cone>
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate />
      </Canvas>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
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
        <div className="mt-6 flex gap-4">
          <div className="flex flex-col-12 sm:flex-row justify-center gap-4 mb-6">
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
       
      </div>
       <div className="flex justify-center gap-6 text-white text-2xl  p-2">
          <a
            href="https://github.com/thounsova"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-indigo-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/share/15kWX79JQ9/?mibextid=wwXIfr"
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

      {/* Scroll Down Arrow */}
      <div className="absolute mt-80">
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
        </div>
        
    </section>
  );
}
