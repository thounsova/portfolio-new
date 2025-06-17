import React from "react";

// Define an interface for the StackCategory props
interface StackCategoryProps {
  icon: React.ReactNode; // Can be an SVG or an emoji
  title: string;
  items: string[];
}

const StackCategory: React.FC<StackCategoryProps> = ({
  icon,
  title,
  items,
}) => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg text-white transform transition duration-300 hover:scale-105">
      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="text-xl font-semibold mb-6 text-center">{title}</h3>
      <div className="w-full space-y-3">
        {items.map((item, index) => (
          <button
            key={index}
            className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium shadow-md
                       hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50
                       transition duration-200 ease-in-out transform hover:-translate-y-0.5 active:scale-95"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const categories: StackCategoryProps[] = [
    {
      icon: (
        <span role="img" aria-label="palette">
          🎨
        </span>
      ), // Palette emoji
      title: "Frontend Development",
      items: ["React", "Vue.js", "Solid", "Svelte"],
    },
    {
      icon: (
        <span role="img" aria-label="gear">
          ⚙️
        </span>
      ), // Gear emoji
      title: "Backend Development",
      items: ["Node.js", "Python", "Java", "Rust"],
    },
    {
      icon: (
        <span role="img" aria-label="tools">
          🛠️
        </span>
      ), // Tools emoji
      title: "Tools & DevOps",
      items: ["Docker", "AWS", "Git", "CI/CD"],
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center  sm:p-8 font-inter">
      <div className="container mx-auto p-6 bg-gray-800 rounded-xl shadow-2xl relative overflow-hidden">
        {/* Background elements for visual effect */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full opacity-20 filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-green-500 to-teal-600 rounded-full opacity-20 filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full opacity-15 filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-10 tracking-wide">
          Development Stacks
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <StackCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
