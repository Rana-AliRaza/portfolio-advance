// import React from 'react';
import Typewriter from "typewriter-effect";

const TypeWrite = () => {
  return (
    <div className="typeWrite text-white  ">
        <Typewriter
         options={{
            strings: [ "Frontend Developer", "React.js Developer", "Next.js Developer"],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            delay: 150,
            wrapperClassName: " text-xl md:text-2xl pb-1  border-b-4 border-blue-500",

         }}
        >

        </Typewriter>
    </div>
  )
}

export default TypeWrite