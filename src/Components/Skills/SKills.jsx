import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

function SKills() {
  return (
    <section
      id="Skills"
      className="py-12 pb-12 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient bg-opacity-90"
    >
      {/* Skills title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-black">SKILLS</h2>
        <div className="w-24 h-1 bg-[#94d58b] mx-auto mt-2"></div>
        <p className="text-gray-500 mt-4 text-lg font-semibold">
          {" "}
          A blend of modern technologies and creative tools used to build
          seamless web and mobile experiences.
        </p>
      </div>

      {/* Skills categories */}
      <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900 bg-opacity-100 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white
            shadow-[0_0_15px_2px_#94d58b]"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-4 text-center">
              {category.title}
            </h3>
             <Tilt
            tiltEnable={true}
            glareEnable={true}
            glareMaxOpacity={0.4}
            glareColor="white"
            glarePosition="top"
            glareBorderRadius="64vw"
          >

            {/* skills items 3 per row on larger screen*/}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 h- full w-full">
              {category.skills.map((skill) =>
              <div
              key={skill.name}
              className="flex items-center justify-center space-x-1 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-6 sm:py-2 sm:px-2 text-center"
              >
                <img src={skill.logo} alt={`${skill.name} logo`}
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8"/>
                <span className="text-xs sm:text-sm text-gray-300">
                  {skill.name}
                </span>
              </div>
              )}
            </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SKills;
