import React from "react";
import profile from "../../assets/Profile-img.jpg";
import video from "../../assets/background.mp4";
import Resume from "../../assets/Rajni_resume.pdf";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";

function About() {
  return (
    <section
      id="About"
      className="relative py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-28 md:mt-32 lg:mt-32 overflow-hidden"
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay with opacity */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-0"></div>

      <div className="relative z-10 flex flex-col-reverse md:flex-row justify-between items-center">
        {/* left side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5 xl font-bold text-white mb-2 leading-tight ">
            Hey, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Rajni
          </h2>

          {/* typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#94d58b]">
            {/* react component */}
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "UI/UX Designer",
                2000,
                "Coder",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              cursor={true}
            />
          </h3>
          {/* About me para */}
          <p className="text-base sm:text-lg md:text-lg text-gray-300 mb-10 mt-8">
            I am a passionate and detail-oriented web developer with a focus on
            creating responsive, user-friendly websites and applications. With
            experience in frontend technologies and a keen eye for design, I
            strive to build digital experiences that are both visually appealing
            and highly functional.
          </p>
          {/* resume button */}
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105 border-[#94d58b] hover:shadow-[0_8px_10px_#94d58b]"
            style={{
              border: "3px solid #94d58b",
            }}
          >
            Download Resume
          </a>
        </div>

        {/* right side for image */}

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            tiltEnable={false}
            glareEnable={true}
            glareMaxOpacity={0.4}
            glareColor="white"
            glarePosition="top"
            glareBorderRadius="64vw"
          >
            <img
              src={profile}
              alt="Rajni"
              className="w-[24vw] h-auto rounded-[64vw] object-cover drop-shadow-[0_5px_15px_#94d58b]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
}

export default About;

