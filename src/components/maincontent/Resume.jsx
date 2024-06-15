// import React from 'react';
import { motion } from "framer-motion";
import { FaRegCircle } from "react-icons/fa";


const Resume = () => {
  return (
    <div name='resumeSection' className="w-full h-full bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-8 lg:py-16 font-sans">
        <div className="heading">
           <h4 className="text-4xl text-primary py-2 font-semibold"> Resume </h4>
           <div className="border-b-4   border-blue-500 w-16 my-2"></div>
        </div>
        <p className="text-base my-2 text-gray-700 mt-8">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        <motion.div
             initial={{ opacity:0, translateY:"100px"}}
             whileInView={{ opacity: 1, translateY: 0}}
             transition = {{ duration: 1, ease:"easeInOut"}} className="experience grid grid-cols-1 lg:grid-cols-2  gap-8">
            <div
            className="section1 ">
              <div className="summary">
                <h4 className="text-2xl lg:text-3xl pl-6 "> Summary </h4>
                <div className=" flex justify-center px-1 lg:px-3 mt-4 gap-2">
                   <div className="text-blue-500 pt-2">
                    <span> <FaRegCircle/> </span>
                    <div className=" h-full w-2  border-l-2 border-blue-500 mx-auto "></div>
                   </div>
                   <div>
                      <h4 className="text-2xl mb-4 font-semibold"> Ali Raza</h4>
                      <p className="text-gray-700 ">
                         I have done my done my Bachelor degree in computer science. and complete a lot of tutorials of web development. and enhance my designing skills in css.
                      </p>
                      <ul className="list-disc px-3 text-gray-700 mt-2 ">
                        <li className="my-1"> Sadiq Abad, RYK, Punjab</li>
                        <li className="my-1"> (+92) 0308-3153699</li>
                        <li className="my-1"> (+92) 0324-3865200</li>
                        <li className="my-1"> ranaaliryk568@gmail.com</li>
                      </ul>
                   </div>
                </div>
              
              </div>
              <div className="education mt-8">
                <h4 className="text-2xl lg:text-3xl pl-6"> Education </h4>
                <div className=" flex justify-center px-3 mt-4 gap-2">
                   <div className="text-blue-500 pt-2">
                    <span> <FaRegCircle/> </span>
                    <div className=" h-full w-2  border-l-2 border-blue-500 mx-auto "></div>
                   </div>
                   <div>
                      <h4 className=" text-xl font-semibold lg:text-2xl mb-4 "> Matric & Inter Education</h4>
                      <p className="px-4 py-2 bg-gray-100 w-fit text-black font-base"> 2017-2018</p>
                      <p className="text-gray-700 mt-2 pl-2">
                      Completed Matriculation in the Science stream with an outstanding achievement of securing 80%.
                      </p>
                      <p className="text-gray-700 mt-1 pl-2"> From: Hira public High School sanjar pur, SDK</p>

                   <div className="mt-4">
                      <p className="px-4 py-2 bg-gray-100 w-fit text-black font-base"> 2018-2019</p>
                      <p className="text-gray-700 mt-2 pl-2">
                      Completed Inter  in the Science stream with an outstanding achievement of securing 67%.
                      </p>
                      <p className="text-gray-700 mt-1 pl-2"> From: Govt Degree post Graduate College SDK, PUNJAB</p>

                   </div>
                   </div>
                </div>
                <div className=" flex justify-center px-3 mt-2 gap-2">
                   <div className="text-blue-500 pt-2">
                    <span> <FaRegCircle/> </span>
                    <div className=" h-full w-2  border-l-2 border-blue-500 mx-auto "></div>
                   </div>
                   <div>
                      <h4 className="text-xl lg:text-2xl mb-4 "> Bachelor Degree in Computer Science </h4>
                      <p className="px-4 py-2 bg-gray-100 w-fit text-black font-base"> 2020-2024</p>
                      <p className="text-gray-700 mt-2 pl-2">
                        Bachelor's degree in Computer Science with a commendable academic performance.
                      </p>
                      <p className="text-gray-700 mt-1 pl-2"> From: Khwaja Fareed University of Engineering and Technology, RYK, PUNJAB</p>

                   </div>
                </div>

              </div>

            </div>
            <div className="section2 ">
              <div className="professional">
                <h4 className="text-2xl lg:text-3xl pl-6 font-semibold"> Professional Experience </h4>
                <div className="education mt-8">
                <div className=" flex justify-center px-3 mt-4 gap-2">
                   <div className="text-blue-500 pt-2">
                    <span> <FaRegCircle/> </span>
                    <div className=" h-full w-2  border-l-2 border-blue-500 mx-auto "></div>
                   </div>
                   <div>
                      <h4 className="text-xl lg:text-2xl mb-4 "> Online tutorials</h4>
                      <p className="px-4 py-2 bg-gray-100 w-fit text-black font-base">  Online Platforms</p>
                      <ul className="list-disc px-3 text-gray-700 mt-2 ">
                        <li className="my-1">
                             <span className="font-semibold">Scrimba:</span>
                               Mastered front-end and back-end web development through interactive courses and guided projects on Scrimba.
                        </li>
                        <li className="my-1">
                             <span className="font-semibold">Udemy:</span>
                             Expanded expertise in web development with comprehensive courses taught by industry experts on Udemy.
                        </li>
                        <li className="my-1"> 
                            <span className="font-semibold">YouTube:</span>
                            Stayed updated with cutting-edge web technologies and coding techniques through insightful tutorials and demonstrations on YouTube.
                        </li>
                      </ul>

                   <div className="mt-4">
                      <p className="px-4 py-2 bg-gray-100 w-fit text-black font-base"> Remote Internship</p>
                      <p className="text-gray-700 mt-2 pl-2">
                      During my online internship in frontend development, I immersed myself in a dynamic learning environment where I gained valuable hands-on experience. Through this opportunity, I honed my skills in building responsive and intuitive user interfaces using HTML, CSS, JavaScript, and various frontend frameworks. Under the guidance of experienced mentors, I successfully completed several projects that enhanced my proficiency in frontend technologies and equipped me with the practical knowledge needed to excel in web development.
                      </p>
                   </div>
                   </div>
                </div>
                <div className=" flex justify-center px-3 mt-2 gap-2">
                   <div className="text-blue-500 pt-2">
                    <span> <FaRegCircle/> </span>
                    <div className=" h-full w-2  border-l-2 border-blue-500 mx-auto "></div>
                   </div>
                   <div>
                      <h4 className="text-xl lg:text-2xl mb-4 "> OnSite Internship in ReactJs </h4>
                      <p className="px-4 py-2 bg-gray-100 w-fit text-black font-base"> 3 month</p>
                      <p className="text-gray-700 mt-2 pl-2">
                      During my onsite internship at Virtual Soft Software House, I specialized in React.js, Tailwind CSS, and Redux, gaining practical experience in developing modern, responsive web applications. Under professional guidance, I successfully applied these technologies to real-world projects, enhancing my proficiency in frontend development.
                      </p>

                   </div>
                </div>

                </div>
              </div>

            </div>
        </motion.div>
    </div>
  )
}

export default Resume