import React, { useState } from "react";
import { projects } from "../../constants";

function Project() {
  // useState is a React hook variable to create state variable in functional componant
  const [selectedProject, setSelectedProject] = useState(null);
  
  const handleOpenModel = (project) => {
    setSelectedProject(project);
  };
  const handleCloseModel = (project) => {
    setSelectedProject(null);
  };
  return (
    <section
      id="Project"
      className="py-24 pb-24 px-[12vw] md:px[7vw] lg:px[20vw] font-sans relative"
    >
      {/* title Section */}
      <div className="text-center mb-16">
        <h2 className="text-center text-white text-3xl sm:text-4xl font-bold">
          Projects
        </h2>
        <div className="w-32 h-1 bg-[#94d58b] mx-auto mt-2"></div>
        <p className="text-gray-300 mt-4 text-lg font-semibold">
          Here are some of my recent projects that showcase my skills in
          frontend development, UI design, and interactive web applications.
        </p>
      </div>

      {/* project grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModel(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-emerald-400/50
        hover:translate-y-2 transition-transform duration-300"
          >
            <div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6 ">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-5 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#f5d8d7] text-xs font-semibold text-green-900 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* pop up model container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl mb-28 overflow-hidden relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModel}
                className="text-white text-3xl font-bold hover:text-green-300"
              >
                {" "}
                &times;
              </button>
            </div>
            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-800 px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 lg:text-base text-xs">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className=" bg-[#f5d8d7] text-xs font-semibold text-green-900 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-700 hover:bg-[#94d58b] text-gray-200 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Code
                  </a>
                   <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-700 hover:bg-[#94d58b] text-gray-200 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Project;
