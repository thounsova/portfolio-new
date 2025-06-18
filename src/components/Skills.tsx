import React, { useEffect, useState } from "react";

interface SkillCardProps {
  percentage: number;
  title: string;
  type: string;
  colorClass: string;
}

const circumference = 2 * Math.PI * 40; // circle radius = 40

function getGlowColor(colorClass: string) {
  // Map Tailwind text color classes to RGBA glow colors
  const colorMap: Record<string, string> = {
    "text-blue-400": "rgba(96, 165, 250, 0.6)", // blue-400
    "text-black": "rgba(0, 0, 0, 0.4)", // fallback black
    "dark:text-gray-200": "rgba(229, 231, 235, 0.5)", // gray-200
    "text-blue-500": "rgba(59, 130, 246, 0.7)", // blue-500
    "text-teal-400": "rgba(45, 212, 191, 0.6)", // teal-400
    "text-green-500": "rgba(34, 197, 94, 0.6)", // green-500
    "text-blue-600": "rgba(37, 99, 235, 0.6)", // blue-600
    "text-indigo-400": "rgba(129, 140, 248, 0.6)", // indigo-400
    "text-green-600": "rgba(22, 163, 74, 0.6)", // green-600
  };

  for (const key in colorMap) {
    if (colorClass.includes(key)) {
      return colorMap[key];
    }
  }
  return "rgba(255, 255, 255, 0.3)"; // fallback glow
}

const SkillCard: React.FC<SkillCardProps> = ({
  percentage,
  title,
  type,
  colorClass,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate from 0 to percentage smoothly on mount
    const animationDuration = 1500; // ms
    const start = performance.now();

    function animate(time: number) {
      const elapsed = time - start;
      const progressPercent = Math.min(
        (elapsed / animationDuration) * percentage,
        percentage
      );
      setProgress(progressPercent);
      if (elapsed < animationDuration) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [percentage]);

  return (
    <div
      className="relative flex flex-col items-center justify-center p-6 bg-gray-900 rounded-xl shadow-lg text-white
      transform transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
      style={{
        filter:
          "drop-shadow(0 0 10px rgba(59,130,246,0.7)) drop-shadow(0 0 20px rgba(59,130,246,0.4))",
      }}
    >
      {/* 3D Blur Glow Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${getGlowColor(
            colorClass
          )} 0%, transparent 70%)`,
          filter: "blur(20px)",
          zIndex: -1,
          transform: "translateZ(0)",
        }}
      />

      <div className="relative w-28 h-28">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 96 96">
          <circle
            className="text-gray-700"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="48"
            cy="48"
          />
          <circle
            className={colorClass}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (circumference * progress) / 100}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="48"
            cy="48"
            style={{ transition: "stroke-dashoffset 0.3s ease-out" }}
          />
          {/* Glow effect for the colored circle */}
          <circle
            className={colorClass}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (circumference * progress) / 100}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="48"
            cy="48"
            style={{
              filter: "blur(4px)",
              opacity: 0.6,
              position: "absolute",
              top: 0,
              left: 0,
              pointerEvents: "none",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-2xl font-extrabold drop-shadow-md">
          {Math.round(progress)}%
        </div>
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="text-gray-400 text-sm">{type}</p>
    </div>
  );
};

const App = () => {
  const skills: SkillCardProps[] = [
    {
      percentage: 95,
      title: "React",
      type: "Frontend",
      colorClass: "text-blue-400",
    },
    {
      percentage: 90,
      title: "Next.js",
      type: "Frontend",
      colorClass: "text-black dark:text-gray-200",
    },
    {
      percentage: 88,
      title: "TypeScript",
      type: "Frontend",
      colorClass: "text-blue-500",
    },
    {
      percentage: 92,
      title: "Tailwind CSS",
      type: "Frontend",
      colorClass: "text-teal-400",
    },
    {
      percentage: 85,
      title: "Node.js",
      type: "Backend",
      colorClass: "text-green-500",
    },
    {
      percentage: 80,
      title: "Python",
      type: "Backend",
      colorClass: "text-blue-600",
    },
    {
      percentage: 82,
      title: "PostgreSQL",
      type: "Backend",
      colorClass: "text-indigo-400",
    },
    {
      percentage: 78,
      title: "MongoDB",
      type: "Backend",
      colorClass: "text-green-600",
    },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 font-inter">
      <div className="container mx-auto p-8 rounded-2xl shadow-2xl relative overflow-hidden bg-gray-900">
        {/* Background blur/glow circles */}
        <div className="absolute top-0 left-0 w-56 h-56 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full opacity-30 filter blur-3xl -translate-x-1/3 -translate-y-1/3 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-green-500 to-teal-600 rounded-full opacity-30 filter blur-3xl translate-x-1/4 translate-y-1/4 animate-pulse"></div>

        <h2 className="text-4xl font-extrabold text-center text-white mb-12 tracking-wider select-none">
          Interactive Skills Overview
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
