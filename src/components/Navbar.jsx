import React from "react";
import { GiWheat } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="text-black body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <GiWheat className="text-lime-500 text-5xl" />
            <span className="ml-3 text-2xl font-robo">KhetiBari</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to='/auction' className="mr-5 hover:text-lime-700 cursor-pointer font-semibold">
              Auction
            </Link>
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
          <Link to={'/register'}>
          <button className="inline-flex items-center bg-lime-500 border-0 py-2 px-3 focus:outline-none hover:bg-lime-400 rounded-full text-base mt-4 md:mt-0">
            Sell your Product
          </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;