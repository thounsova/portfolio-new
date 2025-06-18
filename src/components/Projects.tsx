import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { FiBriefcase, FiBook } from "react-icons/fi";

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
  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-semibold ${
        colorMap[type] || "bg-gray-600/20 text-gray-400"
      }`}
    >
      {label}
    </span>
  );
});

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
  const ref = useRef<HTMLDivElement>(null);
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

  // Icon based on type
  const Icon = isWork ? FiBriefcase : FiBook;

  return (
    <div
      ref={ref}
      className={`relative mb-8 last:mb-0 transform transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Vertical timeline line */}
      <div className="hidden md:block absolute w-0.5 bg-gradient-to-b from-purple-500 to-indigo-500 h-full left-1/2 transform -translate-x-1/2"></div>
      <div
        className={`relative flex ${
          isWork ? "md:flex-row" : "md:flex-row-reverse"
        } items-start w-full`}
      >
        {/* Timeline icon circle */}
        <div className="hidden md:flex absolute top-0 w-10 h-10 rounded-full bg-blue-500 border-2 border-white z-10 left-1/2 transform -translate-x-1/2 items-center justify-center text-white text-lg shadow-lg">
          <Icon />
        </div>

        <div
          className={`w-full md:w-5/12 p-6 rounded-2xl shadow-2xl bg-gray-800 border border-gray-700 cursor-pointer text-left ${
            isWork ? "md:mr-auto" : "md:ml-auto"
          } transform transition-all duration-300 ease-in-out hover:scale-105 hover:translate-y-[-5px] hover:shadow-lg`}
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
            <div className="mt-4 space-y-2">
              {achievements && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-200">
                    Achievements:
                  </h4>
                  <ul className="list-disc pl-5 text-gray-300">
                    {achievements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {skills && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-200">Skills:</h4>
                  <ul className="list-disc pl-5 text-gray-300">
                    {skills.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
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

export default function App() {
  const [activeTab, setActiveTab] = useState<"all" | "work" | "education">(
    "all"
  );
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.innerHTML = "";
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 1).normalize();
    scene.add(directionalLight);

    const geometries = [
      new THREE.SphereGeometry(1, 16, 16),
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.OctahedronGeometry(1),
      new THREE.DodecahedronGeometry(1),
    ];

    const colors = [0x8a2be2, 0x4169e1, 0x00ced1, 0xff69b4, 0x00ffff];
    const objects: THREE.Mesh[] = [];

    for (let i = 0; i < 50; i++) {
      const geometry =
        geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshLambertMaterial({
        color: colors[Math.floor(Math.random() * colors.length)],
        transparent: true,
        opacity: 0.6 + Math.random() * 0.3,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        Math.random() * 200 - 100,
        Math.random() * 200 - 100,
        Math.random() * 200 - 100
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      mesh.scale.setScalar(0.5 + Math.random() * 1.5);
      scene.add(mesh);
      objects.push(mesh);
    }

    camera.position.z = 100;

    const animate = () => {
      requestAnimationFrame(animate);
      objects.forEach((obj) => {
        obj.rotation.x += 0.002;
        obj.rotation.y += 0.002;
        obj.position.y += 0.05;
        if (obj.position.y > 100) {
          obj.position.y = -100;
          obj.position.x = Math.random() * 200 - 100;
          obj.position.z = Math.random() * 200 - 100;
        }
      });
      renderer.render(scene, camera);
    };

    animate();

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onWindowResize);
    return () => {
      window.removeEventListener("resize", onWindowResize);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

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
  ];

  const filteredData = timelineData.filter(
    (item) => activeTab === "all" || item.type === activeTab
  );

  return (
    <div className="relative min-h-screen bg-gray-900 text-white font-inter">
      <div ref={mountRef} className="fixed inset-0 z-0 opacity-40"></div>
      <div className="relative z-10 p-4 sm:p-8">
        <div className="max-w-4xl mx-auto py-12">
          <h2 className="text-4xl font-bold text-center text-purple-400 mb-2">
            Experience & Education
          </h2>
          <p className="text-center text-gray-300 mb-10">
            My professional journey and educational background
          </p>
          <div className="flex justify-center mb-10">
            {["all", "work", "education"].map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as "all" | "work" | "education")}
                className={`ml-4 first:ml-0 px-6 py-2 rounded-full font-medium transition duration-300 ${
                  activeTab === key
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {key[0].toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>
          <div className="relative">
            {filteredData.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
