// import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { CiMobile2 } from "react-icons/ci";

import { motion } from "framer-motion"



const Contact = () => {
  return (
    <motion.div 
     initial={{ opacity: 0}}
     whileInView={{ opacity: 1}}
     transition={{ duration: 1, ease: "easeInOut", delay: 0.5  }}
    >
      <div
      name="contactSection"
      className="w-full h-full bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-8 lg:py-16 font-raleway"
      

    >
      <div className="heading">
        <h4 className="text-4xl text-primary py-2 font-semibold"> Contact </h4>
        <div className="border-b-4   border-blue-500 w-12 my-2"></div>
      </div>
      <p className="text-base my-2 text-gray-700 mt-8">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div className=" flex flex-wrap justify-between">
        <div className="w-full lg:w-2/5  py-4  lg:p-8 shadow-none lg:shadow-lg ">
          <div className="flex group px-1 lg:px-3">
            <div className="icon  w-14 h-14 justify-center items-center group-hover:bg-blue-500 bg-blue-100 rounded-full border group-hover:border-blue-500">
              <span className="flex justify-center items-center p-4">
                <CiLocationOn className="w-6 h-6 text-blue-500 font-bold group-hover:text-white " />
              </span>
            </div>
            <div className="pl-5">
              <h4 className="mb-2 font-semibold text-2xl">Location:</h4>
              <p className="mt-2 text-gray-600">
                naz new dak khana khas sanjar pur, SDK, RYK, Punjab
              </p>
            </div>
          </div>
          <div className="flex group px-1 lg:px-3 my-4">
            <div className="icon  w-14 h-14 justify-center items-center group-hover:bg-blue-500 bg-blue-100 rounded-full border group-hover:border-blue-500">
              <span className="flex justify-center items-center p-4">
                <AiOutlineMail className="w-6 h-6 text-blue-500 font-bold group-hover:text-white " />
              </span>
            </div>
            <div className="pl-5">
              <h4 className="mb-2 font-semibold text-2xl">Email:</h4>
              <p className="mt-2 text-gray-600">ranaaliryk568@gmail.com</p>
            </div>
          </div>
          <div className="flex group px-1 lg:px-3 my-4">
            <div className="icon  w-14 h-14 justify-center items-center group-hover:bg-blue-500 bg-blue-100 rounded-full border group-hover:border-blue-500">
              <span className="flex justify-center items-center p-4">
                <CiMobile2 className="w-6 h-6 text-blue-500 font-bold group-hover:text-white " />
              </span>
            </div>
            <div className="pl-5">
              <h4 className="mb-2 font-semibold text-2xl">Call</h4>
              <p className="mt-2 text-gray-600">(+92) 0308-3153699</p>
            </div>
            
          </div>
      <iframe
        className="w-full h-40 mt-8"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597332.069925257!2d65.21827697753908!3d28.297730414924146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393741be3c12b745%3A0x3ad13de2484b842!2sVirtual%20Soft%20pvt%20ltd!5e0!3m2!1sen!2s!4v1715843104889!5m2!1sen!2s"
        width="600"
        height="450"
        title="google map"
        style={{ border: 0 }}
        allowFullScreen="no"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
        </div>
        <div className=" contact shadow-none lg:shadow-lg w-full lg:w-1/2  p-2  py-4 lg:py-0 lg:p-8">
          <div className="inputs w-full flex gap-8">
            <div className="w-full">
              <label htmlFor="fname" className="  text-lg mb-2 inline-block">
                {" "}
                Your Name
              </label>
              <input
                type="text"
                className="w-full p-2 outline-none border border-gray-200 focus:border-blue-500"
                name="fname"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="text-lg mb-2 inline-block">
                {" "}
                Your Email
              </label>
              <input
                type="text"
                className="w-full p-2 outline-none border border-gray-200 focus:border-blue-500"
                name="email"
              />
            </div>
          </div>
          <label htmlFor="subject" className="text-lg mt-4 my-2 inline-block">
            Subject
          </label>
          <input
            type="text"
            className="w-full p-2 outline-none border border-gray-200 focus:border-blue-500"
          />
          <label htmlFor="message" className="text-lg mt-4 my-2 inline-block">
            Message
          </label>
          <textarea
            name=""
            id="message"
            rows={10}
            className="w-full outline-none border border-gray-200 focus:border-blue-500 p-4 "
          ></textarea>
          <button className="text-white my-4 bg-blue-500 mt-4 px-6 py-3 flex rounded-lg mx-auto w-fit">
            {" "}
            Send Message{" "}
          </button>
        </div>
      </div>

      </div>
    </motion.div>
  );
};

export default Contact;
