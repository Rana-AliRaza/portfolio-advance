// import React from 'react';
import TypeWrite from './TypeWrite';
import "../../styles/header.css";

const Header = () => {
  return (
    <div
      name="header"
      className="main relative  w-full h-[100vh]  bg-center"
    >
      <div className="nameText  absolute top-[35%] left-[20%]  h-full ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl font-semibold text-white ">
          Ali Raza
        </h1>
        <span className="flex">
          <span className="text-xl md:text-2xl text-white mx-2">{`I'm`}</span>
          <span>
            <TypeWrite />
          </span>
        </span>
      </div>

    </div>
  );
};

export default Header;
