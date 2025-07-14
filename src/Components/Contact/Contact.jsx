import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  // page will not reload only send message
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_6esqr0g",
      "template_v8jlq1v",
      form.current,
      "64ICxe1Cm-BXcFm4-"
    ).then(
    () => {
      setIsSent(true); 
      // after send message it will be reset form
      form.current.reset();
      toast.success("Message sent successfully!",{
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
      });
    },
    (error) => {
      toast.error("Error Sending Message.", error);
      toast.error("Failed to send message please try again!",{
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
      });
    }
  )
  };

  return (
    <section
      id="Contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-contact-gradient"
    >
      <ToastContainer/>


      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Contact</h2>
        <div className="w-32 h-1 bg-[#94d58b] mx-auto mt-4"> </div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          {" "}
          Get in touch — I’d love to hear from you!
        </p>
      </div>

      {/* contact form */}
      <div className="mt-1 w-full max-w-xl bg-[#f4dcdc] bg-opacity-45 p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 flex flex-col space-y-4"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            id=""
            required
            className="w-full p-3 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:border-[#94d58b]"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            id=""
            required
            className="w-full p-3 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:border-[#94d58b]"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            id=""
            required
            className="w-full p-3 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:border-[#94d58b]"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className="w-full p-3 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:border-[#94d58b]"
            rows="4"
          />

          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#a3dd9b] to-[#f0b4b3] py-3 text-xl text-black font-semibold rounded-md hover:opacity-90 transition "
          >
            Send{" "}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
