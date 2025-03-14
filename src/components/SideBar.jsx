import React, { useState } from 'react';
import '../styles/header.css';
import profile from '../assets/profile-img.jpg';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoFacebook } from 'react-icons/io5';
import { FaLinkedin } from 'react-icons/fa';
import { RiSkypeFill } from 'react-icons/ri';
import { AiFillInstagram } from 'react-icons/ai';
import { IoHomeOutline, IoDocumentText, IoImages } from 'react-icons/io5';
import { CiServer } from 'react-icons/ci';
import { BsMenuButton } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { GoPeople } from 'react-icons/go';
import { Link } from 'react-scroll';

const SideBar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="sidebarSection">
      <div className="sidebarProfile flex justify-center items-center my-4 mx-auto">
        <img src={profile} className="rounded-full" alt="profile image" />
      </div>
      <h2 className="font-bold my-2 text-center text-white font-raleway text-2xl">
        Ali Raza
      </h2>
      <ul className="flex mt-2 gap-2 justify-center">
        <li>
          <a
            href="/"
            className="p-3 inline-block bg-gray-800 hover:bg-blue-500 rounded-full text-center"
          >
            <IoLogoFacebook className="w-4 h-4 text-white" />
          </a>
        </li>
        <li>
          <a
            href="/"
            className="p-3 inline-block bg-gray-800 hover:bg-blue-500 rounded-full text-center"
          >
            <FaXTwitter className="w-4 h-4 text-white" />
          </a>
        </li>
        <li>
          <a
            href="/"
            className="p-3 inline-block bg-gray-800 hover:bg-blue-500 rounded-full text-center"
          >
            <AiFillInstagram className="w-4 h-4 text-white" />
          </a>
        </li>
        <li>
          <a
            href="/"
            className="p-3 inline-block bg-gray-800 hover:bg-blue-500 rounded-full text-center"
          >
            <RiSkypeFill className="w-4 h-4 text-white" />
          </a>
        </li>
        <li>
          <a
            href="/"
            className="p-3 inline-block bg-gray-800 hover:bg-blue-500 rounded-full text-center"
          >
            <FaLinkedin className="w-4 h-4 text-white" />
          </a>
        </li>
      </ul>

      <ul className="navLinks mt-4 mx-4">
        <li>
          <Link
            to="header"
            spy={true}
            smooth={true}
            duration={1000}
            activeClass="active"
            className="py-4 px-2.5 text-gray-400 flex items-center gap-4 cursor-pointer group"
          >
            <IoHomeOutline className="group-hover:text-blue-500 w-5 h-5" />
            <span className="group-hover:text-white">Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="aboutSection"
            spy={true}
            smooth={true}
            duration={1000}
            activeClass="active"
            className="py-4 px-2.5 cursor-pointer text-gray-400 flex items-center gap-4 group"
          >
            <GoPeople className="group-hover:text-blue-500 w-5 h-5" />
            <span className="group-hover:text-white">About</span>
          </Link>
        </li>
        <li>
          <Link
            to="resumeSection"
            spy={true}
            smooth={true}
            duration={1000}
            activeClass="active"
            className="py-4 px-2.5 cursor-pointer text-gray-400 flex items-center gap-4 group"
          >
            <IoDocumentText className="group-hover:text-blue-500 w-5 h-5" />
            <span className="group-hover:text-white">Resume</span>
          </Link>
        </li>
        <li>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            duration={1000}
            activeClass="active"
            className="py-4 px-2.5 cursor-pointer text-gray-400 flex items-center gap-4 group"
          >
            <IoImages className="group-hover:text-blue-500 w-5 h-5" />
            <span className="group-hover:text-white">Portfolio</span>
          </Link>
        </li>
        <li>
          <Link
            to="servicesSection"
            spy={true}
            smooth={true}
            duration={1000}
            activeClass="active"
            className="py-4 cursor-pointer px-2.5 text-gray-400 flex items-center gap-4 group"
          >
            <CiServer className="group-hover:text-blue-500 w-5 h-5" />
            <span className="group-hover:text-white">Services</span>
          </Link>
        </li>
        <li className="relative">
          <div
            onClick={toggleDropdown}
            className="py-4 px-2.5 cursor-pointer text-gray-400 flex items-center gap-4 group"
          >
            <BsMenuButton className="group-hover:text-blue-500 w-5 h-5" />
            <span className="group-hover:text-white">DropDown</span>
          </div>
          {dropdownVisible && (
            <ul className="absolute left-0 w-full bg-gray-800 rounded shadow-lg  z-10">
              <li className="border-b border-gray-700 cursor-pointer">
                <Link
                  to="option1"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  activeClass="active"
                  className="block py-2 px-4 text-gray-400 hover:text-white"
                >
                  Option 1
                </Link>
              </li>
              <li className="border-b border-gray-700 cursor-pointer">
                <Link
                  to="option2"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  activeClass="active"
                  className="block py-2 px-4 text-gray-400 hover:text-white"
                >
                  Option 2
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  to="option3"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  activeClass="active"
                  className="block py-2 px-4 text-gray-400 hover:text-white"
                >
                  Option 3
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link
            to="contactSection"
            spy={true}
            smooth={true}
            duration={1000}
            activeClass="active"
            className="py-4 cursor-pointer px-2.5 text-gray-400 flex items-center gap-4 group"
          >
            <MdEmail className="group-hover:text-blue-500 w-5 h-5" />
            <span className="group-hover:text-white">Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
