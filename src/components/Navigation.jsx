import React from "react";
import { IoMenu } from "react-icons/io5";
import CV from "../images/CV_Laura_Spina.pdf";

const Navigation = ({ isActive, setIsActive }) => {
  return (
    <nav className="w-full px-6 z-50  fixed inset-x-0 top-2 flex justify-center items-center ">
      <div className="backdrop-filter  w-full md:w-880 bg-secondary border-secondary border p-4 rounded-2xl flex items-center">
        <p className="text-white leading-snug text-lg font-medium">
          Laura Spina
        </p>
        <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
          <a
            href="#home"
            className="text-base text-sand font-medium hover:text-terra cursor-pointer duration-100 ease-in"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-base text-sand font-medium hover:text-terra cursor-pointer duration-100 ease-in"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-base text-sand font-medium hover:text-terra cursor-pointer duration-100 ease-in"
          >
            Projects
          </a>
          <a
            href="#contacts"
            className="text-base text-sand font-medium hover:text-terra cursor-pointer duration-100 ease-in"
          >
            Contact
          </a>
          <a
            href="#"
            className="ml-auto text-base text-sand font-medium hover:text-terra cursor-pointer border border-sand px-4 py-1 rounded-2xl hover:border-gray-100 duration-100 ease-in"
          >
            Download
          </a>
        </div>
        <div className="block md:hidden ml-auto cursor-pointer">
          <IoMenu
            onClick={() => setIsActive(!isActive)}
            className="text-2xl text-sand"
          />
        </div>

        {isActive && (
          <div className="p-4 w-275 bg-secondary rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6">
            <a
              href="#home"
              className="text-base text-sand font-medium hover:text-terra cursor-pointer duration-100 ease-in"
              onClick={() => setIsActive(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-base text-sand font-medium hover:text-terra cursor-pointer duration-100 ease-in"
              onClick={() => setIsActive(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="text-base text-sand font-medium hover:text-terra cursor-pointer duration-100 ease-in"
              onClick={() => setIsActive(false)}
            >
              Projects
            </a>
            <a
              href="#contacts"
              className="text-base text-sand font-medium hover:text-terra cursor-pointer duration-100 ease-in"
              onClick={() => setIsActive(false)}
            >
              Contact
            </a>
            <a
              href={CV}
              target="_blank"
              rel="noreferrer"
              className="text-base text-sand font-medium hover:text-terra cursor-pointer border border-sand px-2 py-1 rounded-2xl hover:border-gray-100 duration-100 ease-in"
              onClick={() => setIsActive(false)}
            >
              Download CV
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
