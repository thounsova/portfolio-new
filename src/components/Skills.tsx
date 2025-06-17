import React from "react";

interface SkillCardProps {
  percentage: number;
  title: string;
  type: string;
  colorClass: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  percentage,
  title,
  type,
  colorClass,
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg text-white transform transition duration-300 hover:scale-105">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full transform -rotate-90">
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
            strokeDasharray={2 * Math.PI * 40}
            strokeDashoffset={
              2 * Math.PI * 40 - (2 * Math.PI * 40 * percentage) / 100
            }
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="48"
            cy="48"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
          {percentage}%
        </div>
      </div>
      <h3 className="mt-2 text-base font-semibold">{title}</h3>
      <p className="text-gray-400 text-xs">{type}</p>
    </div>
  );
};

const App = () => {
  const skills: SkillCardProps[] = [
    // Applying the interface to the skills array as well
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
    <div className="min-h-screen w-full  flex items-center justify-center p-4 sm:p-8 font-inter">
      <div className="container mx-auto p-6  rounded-xl shadow-2xl relative overflow-hidden">
        {/* Background elements for visual effect */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full opacity-20 filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-green-500 to-teal-600 rounded-full opacity-20 filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-10 tracking-wide">
          Interactive Skills Overview
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
