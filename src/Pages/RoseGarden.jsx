import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../assets/project_images/RoseGarden/Home.png";
import Plants from "../assets/project_images/RoseGarden/Plants.png";
import Gardening from "../assets/Project_images/RoseGarden/Gardening.png";
import Contact from "../assets/Project_images/RoseGarden/Contact.png";

function RoseGarden() {
  return (
    <div>
      <Navbar />
      <section className=" py-6 font-sans mt-20 md:mt-32 lg:mt-32 overflow-hidden">
        <div className="text-center py-36 mt-6 bg-[#f9ccce] px-40 items-center">
          <h2 className="text-center  text-black text-6xl font-bold">
            Rose Garden Website
          </h2>
          <p className="text-gray-900 text-center mt-4 text-xl font-semibold">
            {" "}
            A responsive garden-themed website designed using HTML, CSS.
             It features dedicated sections for showcasing various
            plants, sharing gardening tips, and a functional contact form — all
            styled with a fresh, nature-inspired layout to promote eco-friendly
            living.
          </p>
        </div>
         <div className=" bg-[#b6b5b5] p-12 pb-12 px-[12vw] md:px-[7vw] lg:px-[20vw] flex flex-col items-center overflow-hidden gap-4">
                          <div className="flex flex-wrap md:flex-row gap-4 justify-center">
                            <img
                              src={Home}
                              alt=""
                              className="w-[60%] h-[10%] object-cover rounded-2xl hover:translate-y-2 transition-transform duration-100"
                            />
                          </div>
                          <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full">
                            <img
                              src={Plants}
                              alt=""
                              className="w-[52%] h-[40%] object-cover rounded-2xl hover:translate-y-2 transition-transform duration-100"
                            />
                           <img
                              src={Contact}
                              alt=""
                              className="w-[60%] h-[40%] object-cover rounded-2xl hover:translate-y-2 transition-transform duration-300"
                            />
                           
                          </div>
                          <div className="flex flex-wrap md:flex-row gap-4 justify-center">
                              <img
                              src={Gardening}
                              alt=""
                              className="w-[68%] h-[50%]  py-6 object-cover rounded-2xl hover:translate-y-2 transition-transform duration-300"
                            />
                          </div>
                        </div>
      </section>
    </div>
  );
}

export default RoseGarden;
