import React, { useEffect, useRef, useState } from "react";

// Tag Component
interface TagProps {
  label: string;
  type: "skill" | "tech" | "highlight";
}

const Tag: React.FC<TagProps> = React.memo(({ label, type }) => {
  const colorMap = {
    tech: "bg-blue-600/20 text-blue-400",
    skill: "bg-green-600/20 text-green-400",
    highlight: "bg-purple-600/20 text-purple-400",
  };

  const colorClass = colorMap[type] || "bg-gray-600/20 text-gray-400";

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-semibold ${colorClass}`}
    >
      {label}
    </span>
  );
});

// Timeline Item
interface TimelineItemProps {
  type: "work" | "education";
  title: string;
  organization: string;
  location: string;
  date: string;
  description: string;
  tags: TagProps[];
  achievements?: string[];
  skills?: string[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  type,
  title,
  organization,
  location,
  date,
  description,
  tags,
  achievements,
  skills,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const isWork = type === "work";
  const typeColor = isWork ? "bg-indigo-600" : "bg-purple-600";

  const hasExpandableContent =
    (achievements?.length ?? 0) > 0 || (skills?.length ?? 0) > 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative mb-8 last:mb-0 transform transition-all duration-700 ease-out
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
    >
      <div className="hidden md:block absolute w-0.5 bg-gradient-to-b from-purple-500 to-indigo-500 h-full left-1/2 transform -translate-x-1/2"></div>

      <div
        className={`relative flex ${
          isWork ? "md:flex-row" : "md:flex-row-reverse"
        } items-start w-full`}
      >
        <div className="hidden md:flex absolute top-0 w-4 h-4 rounded-full bg-blue-400 border-2 border-white z-10 left-1/2 transform -translate-x-1/2" />

        <div
          className={`w-full md:w-5/12 p-6 rounded-xl shadow-lg bg-gray-800 border border-gray-700 cursor-pointer text-left
                     ${isWork ? "md:mr-auto" : "md:ml-auto"}
                     transition-all duration-300 ease-in-out ${
                       isExpanded ? "scale-100" : "scale-100 hover:scale-[1.02]"
                     }`}
          onClick={() => hasExpandableContent && setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <span
              className={`text-xs px-3 py-1 rounded-full font-bold ${typeColor} text-white`}
            >
              {type}
            </span>
          </div>
          <p className="text-gray-300 font-medium">{organization}</p>
          <p className="text-gray-400 text-sm mb-3">
            {date} · {location}
          </p>
          <p className="text-gray-300 mb-4">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag, i) => (
              <Tag key={i} label={tag.label} type={tag.type} />
            ))}
            {tags.length > 3 && (
              <span className="px-2 py-1 rounded-full text-xs font-semibold bg-gray-600/20 text-gray-400">
                +{tags.length - 3} more
              </span>
            )}
          </div>

          {isExpanded && (
            <>
              {achievements?.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-md font-semibold text-white mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              )}

              {skills?.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-md font-semibold text-white mb-2">
                    All Skills:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, i) => (
                      <Tag key={i} label={skill} type="skill" />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {hasExpandableContent && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="mt-4 text-purple-400 hover:text-purple-300 font-semibold text-sm focus:outline-none"
            >
              {isExpanded ? "Show Less" : "Read More"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// App Component
const App = () => {
  const [activeTab, setActiveTab] = useState<"all" | "work" | "education">(
    "all"
  );

  const timelineData: TimelineItemProps[] = [
    {
      type: "work",
      title: "Software Instructor",
      organization: "PSE NGO",
      location: "Phnom Penh",
      date: "August, 2024 - Present",
      description:
        "Developed and maintained full-stack applications and shared industry knowledge.",
      tags: [
        { label: "React", type: "tech" },
        { label: "Node.js", type: "tech" },
        { label: "TypeScript", type: "tech" },
        { label: "MongoDB", type: "tech" },
      ],
      achievements: [
        "Helped 25+ students become developers per year",
        "Taught 50+ students monthly",
        "Built 10+ real-life projects per month",
      ],
      skills: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
    },
    {
      type: "education",
      title: "Bachelor of Computer Science",
      organization: "Royal University of Phnom Penh",
      location: "Phnom Penh, Cambodia",
      date: "2017 - 2021",
      description: "Focused on software engineering, algorithms, and systems.",
      tags: [
        { label: "Java", type: "tech" },
        { label: "C++", type: "tech" },
        { label: "Data Structures", type: "tech" },
      ],
      achievements: [
        "Graduated with Honors",
        "Led a university-wide project",
        "Organized Tech Innovation Fair",
        "Completed internship at KOOMPI",
      ],
      skills: ["Java", "C++", "Data Structures", "Algorithms", "DB Design"],
    },
    {
      type: "work",
      title: "Full Stack Developer",
      organization: "KOOMPI",
      location: "Phnom Penh, Cambodia",
      date: "2019 - 2021",
      description:
        "Built web apps and gained real-world development experience.",
      tags: [
        { label: "Java", type: "tech" },
        { label: "C++", type: "tech" },
        { label: "Data Structures", type: "tech" },
      ],
      achievements: [
        "Graduated with Honors",
        "Led a university-wide project",
        "Organized Tech Innovation Fair",
        "Completed internship at KOOMPI",
      ],
      skills: ["Java", "C++", "Data Structures", "Algorithms", "DB Design"],
    },
    {
      type: "work",
      title: "Frontend Developer Intern",
      organization: "Startup Inc.",
      location: "Phnom Penh, Cambodia",
      date: "2018 - 2019",
      description: "Developed responsive interfaces using modern tools.",
      tags: [
        { label: "Java", type: "tech" },
        { label: "C++", type: "tech" },
        { label: "Data Structures", type: "tech" },
      ],
      achievements: [
        "Graduated with Honors",
        "Led a university-wide project",
        "Organized Tech Innovation Fair",
        "Completed internship at KOOMPI",
      ],
      skills: ["Java", "C++", "Data Structures", "Algorithms", "DB Design"],
    },
  ];

  const filteredData = timelineData.filter(
    (item) => activeTab === "all" || item.type === activeTab
  );

  const tabs: { key: "all" | "work" | "education"; label: string }[] = [
    { key: "all", label: "All" },
    { key: "work", label: "Work" },
    { key: "education", label: "Education" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-inter p-4 sm:p-8">
      <div className="max-w-4xl mx-auto py-12">
        <h2 className="text-4xl font-bold text-center text-purple-400 mb-2">
          Experience & Education
        </h2>
        <p className="text-center text-gray-300 mb-10">
          My professional journey and educational background
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`ml-4 first:ml-0 px-6 py-2 rounded-full font-medium transition duration-300 ${
                activeTab === tab.key
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline Items */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 to-indigo-500 hidden md:block"></div>
          {filteredData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
