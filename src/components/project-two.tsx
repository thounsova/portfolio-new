import { useEffect, useState } from "react";
import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import {  projects } from "../data/projects";
import Filter from "./Filter";
import SlideUp from "./SlideUp";
import { IconType } from "react-icons";

export interface ProjectType {
  id: number;
  title: string;
  about: string;
  thumbnail: string;
  filter: string[];
  icon?: IconType; // optional icon component from react-icons
  tech?: string[];
  link?: string;
  github?: string;
}

function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [filteredProjects, setFilteredProjects] =
    useState<ProjectType[]>(projects);

  useEffect(() => {
    const newFilteredProjects =
      selectedFilter === "All"
        ? projects
        : projects.filter((project) =>
            project.filter.includes(selectedFilter)
          );
    setFilteredProjects(newFilteredProjects.reverse());
  }, [selectedFilter]);

  return (
    <section id="projects" className="py-20 relative z-0">
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Here are some of my projects that showcase my skills and creativity.
          Click on any project to view more details or visit the live demo.
        </p>
      </div>

      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />

      <div className="relative max-w-5xl mx-auto mt-16 px-4">
        {/* Center vertical line */}
        <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1.5 h-full bg-teal-500 rounded"></div>

        {filteredProjects.map((project, idx) => {
          const isLeft = idx % 2 === 0;
          // Use the project icon component or fallback to BsGithub
          const Icon = project.icon || BsGithub;

          return (
            <SlideUp
              key={project.id}
              classes="group"
              offset="-100px 0px -100px 0px"
              onClick={() =>
                window.open(project.link || project.github, "_blank")
              }
            >
              <div
                className={`mb-20 flex flex-col mt-8 md:flex-row items-center w-full relative ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Timeline Dot with Icon */}
                <div className="absolute md:left-1/2 md:top-8 md:-translate-x-1/2 w-10 h-10 bg-teal-500 rounded-full border-4 border-[#0f172a] shadow-[0_0_12px_2px_rgba(13,148,136,0.6)] z-10 flex items-center justify-center text-white text-xl">
                  <Icon />
                </div>

                {/* Project Card */}
                <div
                  className={`bg-[#1e293b]/50 backdrop-blur-xl border border-gray-700 rounded-3xl shadow-xl overflow-hidden cursor-pointer max-w-md w-full md:w-1/2 transition duration-300 hover:shadow-teal-500/30 hover:scale-[1.015]
                  ${isLeft ? "md:mr-auto md:text-left" : "md:ml-auto md:text-right"}`}
                >
                  <div
                    className={`flex flex-col md:flex-row items-center p-6 gap-6 ${
                      isLeft ? "" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Image */}
                    <div className="w-40 aspect-square overflow-hidden rounded-2xl border border-gray-700 shadow-md">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4 max-w-xs md:max-w-sm">
                        {project.about}
                      </p>

                      {project.tech && (
                        <div
                          className={`flex flex-wrap gap-2 mb-4 justify-${
                            isLeft ? "start" : "end"
                          }`}
                        >
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="bg-teal-700/40 text-white px-3 py-1 rounded-full text-xs font-medium border border-teal-600 backdrop-blur-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Links */}
                      <div
                        className={`flex gap-6 justify-${
                          isLeft ? "start" : "end"
                        }`}
                      >
                        {project.github && (
                          <Link
                            to={project.github}
                            target="_blank"
                            onClick={(e) => e.stopPropagation()}
                            className="flex flex-col items-center group"
                          >
                            <BsGithub
                              size={26}
                              className="text-white group-hover:-translate-y-1 transition-transform duration-300"
                            />
                            <span className="text-xs text-white mt-1">
                              GitHub
                            </span>
                          </Link>
                        )}
                        {project.link && (
                          <Link
                            to={project.link}
                            target="_blank"
                            onClick={(e) => e.stopPropagation()}
                            className="flex flex-col items-center group"
                          >
                            <BsArrowUpRightSquare
                              size={26}
                              className="text-white group-hover:-translate-y-1 transition-transform duration-300"
                            />
                            <span className="text-xs text-white mt-1">
                              Live Demo
                            </span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SlideUp>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
