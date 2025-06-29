import React from "react";
import video from "../assets/background.mp4";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../assets/project_images/BlissfullHome/banner.jpg";
import blissfullHome from "../assets/Project_logo/blissfullHome.png";
import home from "../assets/Project_images/BlissfullHome/home.png";
import products from "../assets/Project_images/BlissfullHome/products.png";
import cart from "../assets/Project_images/BlissfullHome/cart.png";

function BlissfullHome() {
  return (
    <>
      <Navbar />
      <section className=" py-6 font-sans mt-20 md:mt-32 lg:mt-32 overflow-hidden">
        <div className="text-center py-36 mt-6 bg-[#f9ccce] px-40 items-center">
          <h2 className="text-center  text-black text-6xl font-bold">
            WordPress eCommerce Website
          </h2>
          <p className="text-gray-900 text-center mt-4 text-xl font-semibold">
            {" "}
            A feature-rich eCommerce site built using WordPress and WooCommerce,
            offering a seamless shopping experience for home décor products. It
            includes product filtering, invoice generation, custom payment
            options, and responsive design for all screen sizes.
          </p>
        </div>
        {/* <img
          src={Banner}
          alt=""
          className=" w-full h-full object-cover opacity-20"
        /> */}

        {/* project title */}
        {/* <div className="text-center mb-16 ">
          <h2 className="text-center text-white text-3xl mt-12 sm:text-4xl font-bold">
            Blisfull Home Page
          </h2>
          <p className="text-gray-300 mt-4 text-lg font-semibold">
            Here are some of my recent projects that showcase my skills in
            frontend development, UI design, and interactive web applications.
          </p>
        </div> */}

        {/* screenshots */}
        <div className=" bg-[#b6b5b5] p-12 flex flex-col items-center gap-4">
          <div className="flex flex-wrap md:flex-row gap-4 justify-center">
            <img
              src={blissfullHome}
              alt=""
              className="w-[60%] h-[40%] object-cover rounded-2xl hover:translate-y-2 transition-transform duration-100"
            />
          </div>
          <div className="flex flex-col  md:flex-row gap-4 justify-center items-center w-full">
            <img
              src={home}
              alt=""
              className="w-[51%] h-[44%] object-cover rounded-2xl hover:translate-y-2 transition-transform duration-100"
            />
            <img
              src={products}
              alt=""
              className="w-[51%] h-[60%] object-cover rounded-2xl hover:translate-y-2 transition-transform duration-100"
            />
          </div>
          <div className="flex flex-wrap md:flex-row gap-4 justify-center">
            <img
              src={cart}
              alt=""
              className="w-[60%] h-[40%] object-cover rounded-2xl hover:translate-y-2 transition-transform duration-100"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default BlissfullHome;
