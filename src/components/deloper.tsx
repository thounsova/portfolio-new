import React from "react";

interface StackCategoryProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const StackCategory: React.FC<StackCategoryProps> = ({
  icon,
  title,
  items,
}) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl text-white transition duration-300 hover:scale-[1.03] hover:shadow-teal-500/30">
      <div className="mb-4 text-5xl">{icon}</div>
      <h3 className="text-xl font-bold mb-6 text-center">{title}</h3>
      <div className="w-full space-y-3">
        {items.map((item, index) => (
          <button
            key={index}
            className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white font-medium shadow-md
                       hover:from-indigo-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50
                       transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 active:scale-95"
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
      icon: <span role="img" aria-label="palette">🎨</span>,
      title: "Frontend Development",
      items: ["React", "Vue.js", "Solid", "Svelte"],
    },
    {
      icon: <span role="img" aria-label="gear">⚙️</span>,
      title: "Backend Development",
      items: ["Node.js", "Python", "Java", "Rust"],
    },
    {
      icon: <span role="img" aria-label="tools">🛠️</span>,
      title: "Tools & DevOps",
      items: ["Docker", "AWS", "Git", "CI/CD"],
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] px-4 sm:px-8 font-inter relative overflow-hidden">
      {/* Soft blur color blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full opacity-20 blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-green-400 to-teal-500 rounded-full opacity-20 blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-tr from-sky-400 to-blue-600 rounded-full opacity-15 blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      {/* Content Container */}
      <div className="container max-w-7xl mx-auto p-6 md:p-10 backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl shadow-2xl z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-12 tracking-wide">
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
