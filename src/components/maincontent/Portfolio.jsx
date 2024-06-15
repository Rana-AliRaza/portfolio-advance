import { useState } from "react";
import img1 from "../../assets/bootstrap1.avif";
import img2 from "../../assets/bootstrap2.avif";
import img3 from "../../assets/bootstrap3.avif";
import img4 from "../../assets/tailwind1.avif";
import img5 from "../../assets/tailwind2.avif";
import img6 from "../../assets/tailwind3.avif";
import img7 from "../../assets/React1.avif";
import img8 from "../../assets/React2.avif";
import img9 from "../../assets/React3.avif";

import { FaLink } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";



// import React from 'react';


const Portfolio = () => {
    const [items, setItems] = useState("all");
    const images = [
        {
            id: 1,
            pic: img1,
            alt: "bootstrap portfolio1",

        },
        {
            id: 2,
            pic: img2,
            alt: "bootstrap portfolio2",

        },
        {
            id: 3,
            pic: img3,
            alt: "bootstrap portfolio3",

        },
        {
            id: 4,
            pic: img4,
            alt: "TailwindCss portfolio1",

        },
        {
            id: 5,
            pic: img5,
            alt: "TailwindCss portfolio2",

        },
        {
            id: 6,
            pic: img6,
            alt: "TailwindCss portfolio3",

        },
        {
            id: 7,
            pic: img7,
            alt: "bootstrap portfolio1",

        },
        {
            id: 8,
            pic: img8,
            alt: "Reactjs portfolio1",

        },
        {
            id: 9,
            pic: img9,
            alt: "Reactjs portfolio1",

        },
    ]
    const displayImages = ()=>{
        switch(items){
            case "app":
                return images.slice(0, 3);
            case "card":
                return images.slice(3, 6);
            case "web":
                return images.slice(6, 9)
            default:
                return images.slice()
        }
    }
  return (
    <div name="portfolio" className="w-full h-full bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-8 lg:py-16 font-raleway"style={{ background: "#f6f8f8"}}>
        <div className="skill  px-1 lg:px-3 ">
        <div className="heading">
            <h4 className="text-3xl lg:text-4xl text-primary py-2 font-semibold"> Portfolio </h4>
            <div className="border-b-4   border-blue-500 w-20 my-2"></div>
         </div>
         <p className="text-lg my-2 text-gray-700 mt-8">
           Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
         </p>
         <div className={`btns  flex gap-2 px-4 mx-auto mt-8 my-4 rounded-full bg-white w-fit`}>
            <button className={`p-2 ${items==="all"? "text-blue-500":"text-black"}  hover:text-blue-500 font-normal`}
             onClick={ ()=> setItems("all")}
            >
              ALL
            </button>
            <button className={`p-2 ${items==="app"? "text-blue-500":"text-black"}  hover:text-blue-500 font-normal`}
             onClick={ ()=> setItems("app")}
            >
              APP
            </button>
            <button className={`p-2 ${items==="card"? "text-blue-500":"text-black"}  hover:text-blue-500 font-normal`}
             onClick={ ()=> setItems("card")}
            >
              CARD
            </button>
            <button className={`p-2 ${items==="web"? "text-blue-500":"text-black"}  hover:text-blue-500 font-normal`}
             onClick={ ()=> setItems("web")}
            >
              WEB
            </button>
         </div>
         <motion.div
           initial={{ opacity:0, translateY:"50px"}}
           whileInView={{ opacity: 1, translateY:0}}
           transition={{ duration:1, ease:'easeInOut'}}
          className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 ">
         {
            displayImages().map(({pic, alt, id})=>(
                <motion.div
                initial={{ opacity:0, translateY:"50px"}}
                whileInView={{ opacity: 1, translateY:0}}
                transition={{ duration:1, ease:'easeInOut'}}
                key={id} >
                
                  <div className="hover:brightness-75   overflow-hidden w-full relative">
                     <img src={pic} className="transform translate duration-500 hover:scale-110 w-full" alt={alt} />
                   <div className="link flex  w-full absolute bottom-0 ">
                   <Link to="/productDetails" className="w-1/2 py-2 bg-blue-300 hover:bg-blue-400 border-r border-gray-400">
                       <TiPlus className="flex mx-auto text-white w-16"/>
                    </Link>
                    <Link to="/productDetails" className="w-1/2 py-2 bg-blue-300 hover:bg-blue-400 border-r border-gray-400">
                       <FaLink className="flex mx-auto text-white w-16"/>
                    </Link>
                   </div>
                  </div>
                </motion.div>
            ))
         }
         </motion.div>

        </div>
    </div>
  )
}

export default Portfolio