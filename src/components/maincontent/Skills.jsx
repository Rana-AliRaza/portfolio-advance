import { motion } from "framer-motion";
import React from "react";
motion

React
const Skills = () => {




  return (
    <div name="skillSection" className="w-full h-full bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-8 lg:py-16 font-raleway" style={{ background: '#f6f8f8' }}>
      <div className="skill px-1 lg:px-3">
        <div className="heading">
          <h4 className="text-4xl text-primary py-2 font-semibold"> Skills </h4>
          <div className="border-b-4 border-blue-500 w-12 my-2"></div>
        </div>
        <p className="text-lg my-2 text-gray-700 mt-8">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity:0, translateX: "-100px"}}
         whileInView={{ opacity: 1, translateX: 0}}
         transition={{ duration: 1, ease: 'easeInOut'}} className="progressSection1">
            <div className="progress1 mt-4 ">
              <div
                className="flex justify-between my-2"
              >
                <p> HTML </p>
                <p> 97</p>
              </div>
              <div className="flex w-full h-2.5 bg-gray-200 overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="97" aria-valuemin="0" aria-valuemax="97">
                <div className="flex flex-col justify-center overflow-hidden bg-blue-400 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-400" style={{ width: '97%' }}></div>
              </div>
            </div>
            <div className="progress2 my-4">
              <div className="flex justify-between my-2"
              >
                <p> CSS </p>
                <p> 70</p>
              </div>
              <div className="flex w-full h-2.5 bg-gray-200 overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="70">
                <div className="flex flex-col justify-center overflow-hidden bg-blue-400 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-400" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div className="progress3 ">
              <div className="flex justify-between my-2"
              >
                <p> JAVASCRIPT </p>
                <p> 70%</p>
              </div>
              <div className="flex w-full h-2.5 bg-gray-200 overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="60">
                <div className="flex flex-col justify-center overflow-hidden bg-blue-400 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-400" style={{ width: '70%' }}></div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity:0, translateX: "100px"}}
         whileInView={{ opacity: 1, translateX: 0}}
         transition={{ duration: 1, ease: 'easeInOut'}} className="progressSection2">
            <div className="progress1 mt-4 my-2">
              <div className="flex justify-between my-2"
              >
                <p> Bootstrap </p>
                <p> 75%</p>
              </div>
              <div className="flex w-full h-2.5 bg-gray-200 overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="75">
                <div className="flex flex-col justify-center overflow-hidden bg-blue-400 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-400" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="progress2 my-4">
              <div className="flex justify-between my-2"
              >
                <p> TAILWINDCSS </p>
                <p> 80%</p>
              </div>
              <div className="flex w-full h-2.5 bg-gray-200 overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="80">
                <div className="flex flex-col justify-center overflow-hidden bg-blue-400 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-400" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="progress3 my-4">
              <div className="flex justify-between my-2"
              >
                <p> REACTJS </p>
                <p> 70% </p>
              </div>
              <div className="flex w-full h-2.5 bg-gray-200 overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="70">
                <div className="flex flex-col justify-center overflow-hidden bg-blue-400 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-400" style={{ width:'70%' }}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
