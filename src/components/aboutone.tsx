
const FaCode = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
    width="24"
    height="24"
  >
    <path
      fillRule="evenodd"
      d="M12.553 11.232c-.105.07-.223.111-.353.111H9.823l.698-.997a.75.75 0 00-1.12-.996l-2.25 3.25a.75.75 0 000 .996l2.25 3.25a.75.75 0 001.12-.996l-.698-.997h2.377c.13 0 .248.04.353.111a3.75 3.75 0 003.003-1.854l1.012-1.752a.75.75 0 00-1.299-.75l-1.012 1.752a2.25 2.25 0 01-1.802.902zM12 2.25a.75.75 0 01.75.75v3.627a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.75 4.5a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5H7.5a.75.75 0 01-.75-.75zM16.5 3.75a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM18.75 9a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM18.75 13.5a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM12 21.75a.75.75 0 01-.75-.75v-3.627a.75.75 0 011.5 0v3.627a.75.75 0 01-.75.75zM6.75 19.5a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5H7.5a.75.75 0 01-.75-.75zM16.5 18.75a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM3.75 9a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM3.75 13.5a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75z"
      clipRule="evenodd"
    />
  </svg>
);

const FaPaintBrush = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
    width="24"
    height="24"
  >
    <path
      fillRule="evenodd"
      d="M10.222 2.25a.75.75 0 01.442.26L14.25 7.25l-2.5 4.75a.75.75 0 01-1.407.11L7.5 7.25l3.5-4.75a.75.75 0 01-.442-.26zM2.5 11.25a.75.75 0 01.75-.75h.781a.75.75 0 01.671.418l1.411 2.593a.75.75 0 001.236-.418l.338-.997a.75.75 0 01.67-.418h2.001a.75.75 0 01.671.418l.338.997a.75.75 0 001.236.418l1.411-2.593a.75.75 0 01.671-.418h.781a.75.75 0 01.75.75v.256a.75.75 0 01-.112.423l-4.141 6.21a.75.75 0 01-.892.228L9.16 17.06a.75.75 0 00-.918-.086l-2.29-1.432a.75.75 0 01-.83-.178l-2.075-2.075a.75.75 0 01-.178-.83l-1.432-2.29a.75.75 0 00-.086-.918l.228-.892a.75.75 0 01.423-.112V11.25z"
      clipRule="evenodd"
    />
  </svg>
);

const FaRocket = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
    width="24"
    height="24"
  >
    <path d="M12 2.25a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM11.25 7.5v5.69l-1.921 1.921a.75.75 0 001.06 1.06l2.426-2.426a.25.25 0 00.07-.189V7.5h-1.5zM12.75 7.5v5.69l1.921 1.921a.75.75 0 11-1.06 1.06l-2.426-2.426a.25.25 0 01-.07-.189V7.5h1.5zM4.773 17.553a.75.75 0 00.954 1.154l3.197-2.558c.28-.224.542-.487.794-.768l-3.197-2.558a.75.75 0 00-.954 1.154l1.393 1.115c-.09.117-.184.23-.284.34L4.773 17.553zM18.427 17.553a.75.75 0 01-.954 1.154l-3.197-2.558a.75.75 0 01-.794-.768l3.197-2.558a.75.75 0 01.954 1.154l-1.393 1.115c.09.117.184.23.284.34l3.197 2.558zM6.75 19.5c0 1.147.234 2.247.653 3.25h10.394c.419-1.003.653-2.103.653-3.25 0-2.645-2.203-4.825-4.787-4.825H11.53c-2.584 0-4.787 2.18-4.787 4.825z" />
  </svg>
);

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative z-10 px-6 py-16 text-white overflow-hidden bg-gray-900"
    >
      {/* Animated Background Colorful Blur Circles */}
      <div
        className="absolute top-10 left-10 w-40 h-40 rounded-full opacity-70 animate-pulse-slow"
        style={{
          background:
            "radial-gradient(circle at center, #9f7aea80, transparent 70%)",
          filter: "blur(60px)",
          animationTimingFunction: "ease-in-out",
        }}
      />
      <div
        className="absolute bottom-10 right-10 w-52 h-52 rounded-full opacity-70 animate-pulse-slow delay-2000"
        style={{
          background:
            "radial-gradient(circle at center, #6b46c180, transparent 70%)",
          filter: "blur(80px)",
          animationTimingFunction: "ease-in-out",
        }}
      />

      <style>{`
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulseSlow 6s infinite;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>

      {/* Section Content */}
      <div className="max-w-7xl mx-auto backdrop-blur-sm">
        <h2 className="text-4xl font-bold text-center text-purple-400 mb-4">
          About Me
        </h2>
        <p className="text-center text-lg md:text-xl text-gray-300 mb-12">
          Passionate developer with 5+ years of experience creating digital
          solutions that make a difference.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side: Story */}
          <div className="bg-white/5 border border-purple-500 rounded-2xl p-6 backdrop-blur-md shadow-[0_0_20px_3px_rgba(159,122,234,0.5)] hover:shadow-[0_0_40px_8px_rgba(159,122,234,0.8)] transition-shadow duration-500">
            <h3 className="text-2xl font-semibold mb-4">My Story</h3>
            <p className="text-gray-300 mb-4">
              I started my journey in web development 5 years ago, driven by
              curiosity and a passion for creating digital experiences that
              matter. Since then, I have worked with startups and established
              companies, helping them bring their visions to life through code.
            </p>
            <p className="text-gray-300">
              When I am not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
          </div>

          {/* Right Side: Feature Cards */}
          <div className="flex flex-col gap-6">
            {/* Card 1 */}
            <div className="flex items-start gap-4 bg-white/5 border border-purple-500 rounded-2xl p-5 backdrop-blur-md shadow-[0_0_15px_3px_rgba(159,122,234,0.4)] hover:shadow-[0_0_30px_6px_rgba(159,122,234,0.7)] transition-shadow duration-500">
              <div className="p-3 rounded-xl bg-purple-600/30 text-purple-400 text-3xl flex items-center justify-center min-w-[48px] min-h-[48px]">
                <FaCode />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Clean Code</h4>
                <p className="text-sm text-gray-300">
                  Writing maintainable, scalable, and efficient code following
                  best practices.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-4 bg-white/5 border border-purple-500 rounded-2xl p-5 backdrop-blur-md shadow-[0_0_15px_3px_rgba(159,122,234,0.4)] hover:shadow-[0_0_30px_6px_rgba(159,122,234,0.7)] transition-shadow duration-500">
              <div className="p-3 rounded-xl bg-purple-600/30 text-purple-400 text-3xl flex items-center justify-center min-w-[48px] min-h-[48px]">
                <FaPaintBrush />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Creative Design</h4>
                <p className="text-sm text-gray-300">
                  Crafting beautiful and intuitive user interfaces with
                  attention to detail.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start gap-4 bg-white/5 border border-purple-500 rounded-2xl p-5 backdrop-blur-md shadow-[0_0_15px_3px_rgba(159,122,234,0.4)] hover:shadow-[0_0_30px_6px_rgba(159,122,234,0.7)] transition-shadow duration-500">
              <div className="p-3 rounded-xl bg-purple-600/30 text-purple-400 text-3xl flex items-center justify-center min-w-[48px] min-h-[48px]">
                <FaRocket />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Performance</h4>
                <p className="text-sm text-gray-300">
                  Building fast, responsive, and optimized applications for all
                  platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
