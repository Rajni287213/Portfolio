import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import blissfullHome from "../assets/Project_logo/blissfullHome.png";
import Home from "../assets/project_images/BeanBliss/Home.png";
import products from "../assets/project_images/BeanBliss/Products.png";
import About from "../assets/project_images/BeanBliss/About.png";
import Menu from "../assets/project_images/BeanBliss/Menu.png";


function Beanbliss() {
  return (
    <>
      <Navbar />
      <section className=" py-6 font-sans mt-20 md:mt-32 lg:mt-32 overflow-hidden">
        <div className="text-center py-36 mt-6 bg-[#f9ccce] px-40 items-center">
          <h2 className="text-center  text-black text-6xl font-bold">
            Bean Bliss Coffee Shop Website
          </h2>
          <p className="text-gray-900 text-center mt-4 text-xl font-semibold">
            {" "}
            A beautifully designed coffee shop website built with HTML, CSS, and
            JavaScript. It showcases a stylish product menu with interactive
            elements, smooth transitions, and responsive layouts — perfect for
            giving customers a glimpse of the café's offerings.
          </p>
        </div>
        <div className=" bg-[#b6b5b5] p-12 pb-12 px-[12vw] md:px-[7vw] lg:px-[20vw] flex flex-col items-center gap-4">
                  <div className="flex flex-wrap md:flex-row gap-4 justify-center">
                    <img
                      src={Home}
                      alt=""
                      className="w-[60%] h-[10%] object-cover rounded-2xl hover:translate-y-2 transition-transform duration-100"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full">
                    <img
                      src={About}
                      alt=""
                      className="w-[60%] h-[40%] object-cover rounded-2xl hover:translate-y-2 transition-transform duration-100"
                    />
                  
                    <img
                      src={Menu}
                      alt=""
                      className="w-[68%] h-[50%]  py-6 object-cover rounded-2xl hover:translate-y-2 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex flex-wrap md:flex-row gap-4 justify-center">
                      <img
                      src={products}
                      alt=""
                      className="w-[60%] h-[40%] object-cover rounded-2xl hover:translate-y-2 transition-transform duration-300"
                    />
                  </div>
                </div>
      </section>
    </>
  );
}

export default Beanbliss;
