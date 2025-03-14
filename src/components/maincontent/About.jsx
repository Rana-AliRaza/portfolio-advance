// import React from 'react'
import { motion } from "framer-motion";
import profilePic from "../../assets/profile-img.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";


const About = () => {
  return (
    <div name="aboutSection" className="w-full h-full bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-8 lg:py-16 font-raleway">
        <div className="heading">
            <h4 className="text-4xl text-primary py-2 font-semibold"> About </h4>
            <div className="border-b-4   border-blue-500 w-12 my-2"></div>
        </div>
        <p className="text-base my-2 text-gray-700 mt-8">
I’m a Frontend Developer specializing in building modern, fast, and user-friendly web applications. With experience in React.js, Next.js, TypeScript, Sass, Ant Design, and MUI, I focus on clean code and seamless UI/UX.

Currently, I work at Octaloop Technologies, Islamabad, where I craft scalable and high-performance frontend solutions. My goal is to master frontend development and eventually transition into blockchain development.

🚀 Let’s build something innovative!        </p>
        <div className="grid grid-cols-1 gap-2  lg:grid-cols-3 py-4">
            <motion.div
             initial={{ opacity:0, translateX:"-100px"}}
             whileInView={{ opacity: 1, translateX: 0}}
             transition = {{ duration: 1, ease:"easeInOut"}} className="profile px-1 lg:px-3 ">
                <img src={profilePic} alt="profile pic" />
            </motion.div>
            <motion.div
             initial={{ opacity:0, translateX:"100px"}}
             whileInView={{ opacity: 1, translateX: 0}}
             transition = {{ duration: 1, ease:"easeInOut"}}  className="aboutText col-span-2 px-3 ">
                <h4 className="text-black  lg:text-blue-500  text-xl font-semibold lg:text-3xl  font-raleway font-medium">Frontend Developer.</h4>
                <p className="my-2 text-gray-700"> As a dedicated Frontend Developer, I have successfully completed a fully responsive frontend, demonstrating a strong commitment to detail, efficiency, and delivering high-quality user experiences.</p>
                <div className="info grid grid-cols-1 lg:grid-cols-2  mt-4">
                    <ul>
                        <li className="flex items-center my-2">
                           <MdKeyboardArrowRight className="text-blue-500  mx-2"/>
                           <span className="font-semibold mr-2">Degree: </span>
                           <span className="text-gray-700 text-lg" > BS CS </span>
                        </li>
                        {/* <li className="flex items-center my-2 text-sm">
                           <MdKeyboardArrowRight className="text-blue-500  mx-2"/>
                           <span className="font-semibold mr-2">Birthday: </span>
                           <span className="text-gray-700 text-lg" > 13 March 2002 </span>
                        </li> */}
                        {/* <li className="flex items-center my-2">
                           <MdKeyboardArrowRight className="text-blue-500  mx-2"/>
                           <span className="font-semibold mr-2">Website: </span>
                           <span className="text-gray-700 text-lg" > www.example.com </span>
                        </li> */}
                        <li className="flex items-center my-2">
                           <MdKeyboardArrowRight className="text-blue-500  mx-2"/>
                           <span className="font-semibold mr-2">Phone: </span>
                           <span className="text-gray-700 text-lg" >  0308-3153699 </span>
                        </li>
                        <li className="flex items-center my-2">
                           <MdKeyboardArrowRight className="text-blue-500  mx-2"/>
                           <span className="font-semibold mr-2">City: </span>
                           <span className="text-gray-700 text-lg" > Islamabad </span>
                        </li>
                    </ul>
                    <ul>
                       <li className="flex items-center my-2">
                           <MdKeyboardArrowRight className="text-blue-500  mx-2"/>
                           <span className="font-semibold mr-2">Age: </span>
                           <span className="text-gray-700 text-lg" > 23 </span>
                        </li>
 
                       <li className="flex items-center  my-2">
                           <MdKeyboardArrowRight className="text-blue-500  mx-2"/>
                           <span className="font-semibold mr-2">Email: </span>
                           <span className="text-gray-700 text-lg" > ranaaliryk568@gmail.com </span>
                        </li>
                       {/* <li className="flex items-center  my-2">
                           <MdKeyboardArrowRight className="text-blue-500  mx-2"/>
                           <span className="font-semibold mr-2">Freelance: </span>
                           <span className="text-gray-700 text-lg" > Available </span>
                        </li> */}
                    </ul>
                </div>
                    <p className="mt-4  px-4">Passionate Frontend Developer with expertise in building fully responsive and visually appealing web applications. Committed to delivering seamless user experiences with clean, efficient, and scalable code.</p>
            </motion.div>


        </div>
    </div>
  )
}

export default About