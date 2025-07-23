import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import blissfullHome from "../assets/Project_logo/blissfullHome.png";
import Adminlogin from "../assets/project_images/Fashion/AdminLogin.png";
import Userlogin from "../assets/project_images/Fashion/UserLogin.png";
import Home from "../assets/project_images/Fashion/Home.png";
import products from "../assets/project_images/Fashion/Products.png";
import Description from "../assets/project_images/Fashion/Desc.png";
import Cart from "../assets/project_images/Fashion/Cart.png";
import Order from "../assets/project_images/Fashion/Orders.png";
import Admin1 from "../assets/project_images/Fashion/Admin1.png";
import Admin2 from "../assets/project_images/Fashion/Admin2.png";


function Fashion() {
  return (
    <>
      <Navbar />
      <section className=" py-6 font-sans mt-20 md:mt-32 lg:mt-32 overflow-hidden">
        <div className="text-center py-36 mt-6 bg-[#f9ccce] px-40 items-center">
          <h2 className="text-center  text-black text-6xl font-bold">
            Exquisite Jewelry Fashion Collection
          </h2>
          <p className="text-gray-900 text-center mt-4 text-xl font-semibold">
            {" "}
            Discover a stunning collection of jewelry designed to
            elevate your style. This elegant Fashion website built with ASP.NET
            MVC offers a seamless browsing experience with rich product displays
            and timeless pieces perfect for every occasion.
          </p>
        </div>
        <div className=" bg-[#b6b5b5] p-12 pb-12 px-[12vw] md:px-[7vw] lg:px-[20vw] flex flex-col items-center gap-4">
          <h2 className="text-center text-[#000000] text-3xl sm:text-4xl font-bold">
            Admin Part
          </h2>
          {/* admin login */}
          <div className="flex flex-wrap md:flex-row gap-4 justify-center">
            <img
              src={Adminlogin}
              alt=""
              className="w-[100%]  object-cover rounded-2xl hover:translate-y-2 transition-transform duration-100"
            />
          </div>
          {/* category and product in admin part */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full">
            <img
              src={Admin1}
              alt="Admin View 1"
              className="w-[80%] h-[47vh]  object-cover rounded-2xl hover:translate-y-2 transition-transform duration-100"
            />
            <img
              src={Admin2}
              alt="Admin View 2"
              className="w-[80%]  object-cover rounded-2xl hover:translate-y-2 transition-transform duration-300"
            />
          </div>

          <h2 className="text-center mt-5 text-[#000000]  text-3xl sm:text-4xl font-bold">
            User Part
          </h2>
          {/* user login */}
          <div className="flex flex-wrap md:flex-row gap-4 justify-center">
            <img
              src={Userlogin}
              alt=""
              className="w-[100%]  object-cover rounded-2xl hover:translate-y-2 transition-transform duration-100"
            />
          </div>
          {/* home and products */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full">
            <img
              src={Home}
              alt=""
              className="w-[80%] h-[178vh]  object-cover rounded-2xl hover:translate-y-2 transition-transform duration-100"
            />
          
          </div>
          {/* product detail */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full">
              <img
              src={products}
              alt=""
              className="w-[80%]  object-cover rounded-2xl hover:translate-y-2 transition-transform duration-100"
            />
            <img
              src={Description}
              alt=""
              className="w-[80%] py-6 object-cover rounded-2xl hover:translate-y-2 transition-transform duration-300"
            />
          </div>

          {/* cart page */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full">
            <img
              src={Cart}
              alt=""
              className="w-[80%] object-cover rounded-2xl hover:translate-y-2 transition-transform duration-300"
            />
             <img
              src={Order}
              alt=""
              className="w-[80%] py-6 object-cover rounded-2xl hover:translate-y-2 transition-transform duration-300"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Fashion;
