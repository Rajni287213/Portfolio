import React, { useState } from "react";
import { projects } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Project() {
  // useState is a React hook variable to create state variable in functional componant
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const handleOpenModel = (project) => {
    setSelectedProject(project);
  };
  const handleCloseModel = (project) => {
    setSelectedProject(null);
  };

//Pagination Logic
const indexOfLastProject = currentPage * projectsPerPage;
const indexOfFirstProject = indexOfLastProject - projectsPerPage;
const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
const totalPages = Math.ceil(projects.length / projectsPerPage);

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
        {currentProjects.map((project) => (
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

       {/* Pagination Controls */}
      <div className="flex justify-center mt-12 space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-gray-800 hover:bg-[#94d58b] text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx + 1}
            onClick={() => setCurrentPage(idx + 1)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === idx + 1
                ? "bg-[#94d58b] text-black"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            {idx + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="bg-gray-800 hover:bg-[#94d58b] text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* pop up model container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl mb-28 overflow-auto relative max-h-[90vh]">
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
                  onClick={() => window.open(selectedProject.webapp, "_blank")}
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  title="Click to view project"
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl cursor-pointer"
                />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-white mb-2 text-md">
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
                <div className="flex flex-col lg:flex-row gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-700 hover:bg-[#94d58b] text-gray-200 px-6 py-2 rounded-xl text-center font-semibold"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-700 hover:bg-[#94d58b] text-gray-200 px-6 py-2 rounded-xl text-center font-semibold"
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
