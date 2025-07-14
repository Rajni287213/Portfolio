import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Home from "../assets/project_images/BookStore/Home.png"
import Products from "../assets/project_images/BookStore/Products.png"
import Cart from "../assets/project_images/BookStore/Cart.png"
import Login from "../assets/project_images/BookStore/Login.png"

function Bookstore() {
  return (
    <>
      <Navbar />
      <section className=" py-6 font-sans mt-20 md:mt-32 lg:mt-32 overflow-hidden">
        <div className="text-center py-36 mt-6 bg-[#f9ccce] px-40 items-center">
          <h2 className="text-center  text-black text-6xl font-bold">
            ASP.NET Book Store Web Application
          </h2>
          <p className="text-gray-900 text-center mt-4 text-lg font-semibold">
            {" "}
            A dynamic and responsive Book Store web application developed using
            ASP.NET Web Forms (.aspx) with C# and SQL Server integration. The
            platform allows users to browse, add, and manage books across
            various genres including Fiction, Mystery, Biography, and more. The
            project features form-based user interaction, server-side
            validation, and seamless database connectivity via Server Explorer.
            It also includes a functional contact form and a clean,
            user-friendly interface optimized for different devices.
          </p>
        </div>
       

        {/* screenshots */}
        <div className=" bg-[#b6b5b5] p-12 flex flex-col items-center gap-4">
          <div className="flex flex-wrap md:flex-row gap-4 justify-center">
            <img
              src={Home}
              alt=""
              className="w-[60%] h-[40%] object-cover rounded-2xl hover:translate-y-2 transition-transform duration-100"
            />
          </div>
          <div className="flex flex-col  md:flex-row gap-4 justify-center items-center w-full">
            <img
              src={Products}
              alt=""
              className="w-[51%] h-[54%] object-cover rounded-2xl hover:translate-y-2 transition-transform duration-100"
            />
            <img
              src={Cart}
              alt=""
              className="w-[51%] h-[40%] object-cover rounded-2xl hover:translate-y-2 transition-transform duration-100"
            />
          </div>
          <div className="flex flex-wrap md:flex-row gap-4 justify-center">
            <img
              src={Login}
              alt=""
              className="w-[60%] h-[40%] object-cover rounded-2xl hover:translate-y-2 transition-transform duration-100"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Bookstore;
