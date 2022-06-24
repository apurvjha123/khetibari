import React from "react";
import { GiWheat } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <header className="text-black body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <GiWheat className="text-lime-500 text-5xl" />
            <span className="ml-3 text-2xl font-robo">KhetiBari</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-lime-700 cursor-pointer font-semibold">
              Auction
            </a>
            <a className="mr-5 hover:text-lime-700 cursor-pointer font-semibold">
              Freelance
            </a>
            <a className="mr-5 hover:text-lime-700 cursor-pointer font-semibold">
              vegitables
            </a>
            <a className="mr-5 hover:text-lime-700 cursor-pointer font-semibold">
              Contact us
            </a>
          </nav>
          <button className="inline-flex items-center bg-lime-500 border-0 py-2 px-3 focus:outline-none hover:bg-lime-400 rounded-full text-base mt-4 md:mt-0">
            Become a Buyer
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;