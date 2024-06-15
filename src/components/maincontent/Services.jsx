// import React from 'react';

import { PiToolboxThin } from "react-icons/pi";
import { MdOutlineChecklistRtl } from "react-icons/md";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { BsBinoculars } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { motion } from "framer-motion";




const Services = () => {
    const servicess= [
        {
            id: 1,
            icon: PiToolboxThin,
            heading: "Toolbar Items",
            desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
        },
        {
            id: 2,
            icon: MdOutlineChecklistRtl,
            heading: "Dolor Sitema",
            desc: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata"
        },
        {
            id: 3,
            icon: MdOutlineSignalCellularAlt,
            heading: "Sed ut perspiciatis",
            desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
        },
        {
            id: 4,
            icon: BsBinoculars,
            heading: "Magni Dolores",
            desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        },
        {
            id: 5,
            icon: MdOutlineLightMode,
            heading: "Nemo Enim",
            desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque"
        },
        {
            id: 6,
            icon: IoCalendarOutline,
            heading: "Eiusmod Tempor",
            desc: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi"
        },
    ]
  return (
    <div name="servicesSection"  className="w-full h-full bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-8 lg:py-16 font-raleway">
        <div className="heading">
            <h4 className="text-4xl text-primary py-2 font-semibold"> Services </h4>
            <div className="border-b-4   border-blue-500 w-20 my-2"></div>
        </div>
        <p className="text-base my-2 text-gray-700 mt-8">
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        <motion.div
                  initial={{ opacity:0, translateY:"200px"}}
                  whileInView={{ opacity: 1, translateY:0}}
                  transition={{ duration:1, ease:'easeInOut'}} className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 mt-12">
            {
                servicess.map(({id,icon:IconComponent,heading,desc})=>(
                 <div
                 className='flex group px-3' key={id}>
             <div className="icon  w-14 h-14 justify-center items-center group-hover:bg-white bg-blue-500 rounded-full border group-hover:border-blue-500">
                <span className='flex justify-center items-center p-4'>
                    {IconComponent && <IconComponent className='w-6 h-6 text-white group-hover:text-blue-500 font-semibold'/>}
                </span>
             </div>
             <div className='pl-5'>
                <h4 className="mb-2 font-semibold">{heading}</h4>
                <p className='mt-2 text-gray-600'>
                  {desc}
                </p>
             </div>

                 </div>

                ))
            }
        </motion.div>
    </div>
  )
}

export default Services