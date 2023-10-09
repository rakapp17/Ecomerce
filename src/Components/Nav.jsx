import React, { useEffect, useState } from "react";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";

function Nav() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="mt-3 container w-full px-3 py-3 flex justify-between items-center md:flex md:justify-between">
        <h3 className="text-teal-500 font-judul font-bold text-xl">
          Luminary.
        </h3>
        <div className=" lg:gap-12 hidden md:flex md:gap-6 md:translate-x-10 xl:translate-x-36 2xl:translate-x-44">
          <a
            className="text-base  text-slate-600 font-semibold hover:text-teal-500 hover:underline"
            href=""
          >
            Home
          </a>
          <a
            className="text-base  text-slate-600 font-semibold hover:text-teal-500 hover:underline"
            href=""
          >
            About
          </a>
          <a
            className="text-base text-slate-600 font-semibold hover:text-teal-500 hover:underline"
            href=""
          >
            FAQ
          </a>
          <a
            className="text-base  text-slate-600 font-semibold hover:text-teal-500 hover:underline"
            href=""
          >
            Blog
          </a>
        </div>
        <div className=" items-center gap-2 hidden md:flex md:translate-x-20 xl:translate-x-44 2xl:translate-x-60">
          <input
            className="bg-slate-100 rounded-xl md:w-[100%] lg:w-full h-10 px-3 focus:outline-none focus:outline-teal-500"
            type="search"
            name=""
            id=""
            placeholder="Search"
          />
          <span className="cursor-pointer">
            <BsFillSearchHeartFill size={20} />
          </span>
        </div>
        {/* Hamurger Menu */}
        <div onClick={handleNav}>
          <RxHamburgerMenu size={25} className="cursor-pointer md:hidden" />
        </div>
      </div>
      {/* Menu Didalam hamburger */}
      <div
        className={
          nav
            ? "absolute bg-white w-[100%] h-[2900px] right-0 z-20 top-[12  px] opacity-90 ease-in duration-100"
            : "absolute bg-white w-[100%] h-[2900px] right-[-100%] z-20 top-[12  px] opacity-90 ease-in duration-100"
        }
      >
        <div className="item gap-4 flex justify-center md:hidden w-[100%] absolute inset-y-0 right-0 bg-white mt-14">
          <input
            className="bg-slate-100 rounded-xl w-[90%] h-10 px-3 focus:outline-none focus:outline-teal-500 mt-2"
            type="search"
            name=""
            id=""
            placeholder="Search"
          />
          <AiOutlineSearch
            size={20}
            className="absolute right-[10%] top-4 cursor-pointer "
          />
        </div>
        <div
          onClick={handleNav}
          className="items-center gap-10 flex flex-col md:hidden w-[100%] mt-10 absolute inset-y-28 text-center bg-white"
        >
          <a
            className="text-base font-semibold hover:text-teal-500 hover:underline"
            href=""
          >
            Home
          </a>
          <a
            className="text-base font-semibold hover:text-teal-500 hover:underline"
            href=""
          >
            About
          </a>
          <a
            className="text-base font-semibold hover:text-teal-500 hover:underline"
            href=""
          >
            FAQ
          </a>
          <a
            className="text-base font-semibold hover:text-teal-500 hover:underline"
            href=""
          >
            Blog
          </a>
        </div>
      </div>
    </>
  );
}

export default Nav;
