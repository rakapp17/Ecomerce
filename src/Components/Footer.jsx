import React from "react";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import { BiLogoPinterest, BiLogoGooglePlus } from "react-icons/bi";
function Footer() {
  return (
    <div className="lg:flex lg:justify-between">
      <div>
      <h4 className="text-sm text-center mt-12 text-slate-500">
        &copy;{new Date().getFullYear()} Rakput Store
      </h4>
      </div>
      <div className="flex flex-col justify-center items-center text-sm gap-3 mt-5 text-slate-500 md:flex-row lg:translate-x-12">
        <a className="hover:text-slate-700" href="">
          Blog
        </a>
        <a className="hover:text-slate-700" href="">
          {" "}
          FAQs
        </a>
        <a className="hover:text-slate-700" href="">
          Contact us
        </a>
      </div>

      <div className="flex justify-center gap-7 mt-10 cursor-pointer mb-10 ">
        <BsTwitter
          color="grey"
          onMouseOver={({ target }) => (target.style.color = "black")}
          onMouseOut={({ target }) => (target.style.color = "grey")}
        />
        <BsFacebook
          color="grey"
          onMouseOver={({ target }) => (target.style.color = "black")}
          onMouseOut={({ target }) => (target.style.color = "grey")}
        />
        <BsInstagram
          color="grey"
          onMouseOver={({ target }) => (target.style.color = "black")}
          onMouseOut={({ target }) => (target.style.color = "grey")}
        />
        <BiLogoPinterest
          color="grey"
          onMouseOver={({ target }) => (target.style.color = "black")}
          onMouseOut={({ target }) => (target.style.color = "grey")}
        />
        <BiLogoGooglePlus
          color="grey"
          onMouseOver={({ target }) => (target.style.color = "black")}
          onMouseOut={({ target }) => (target.style.color = "grey")}
        />
      </div>
    </div>
  );
}

export default Footer;
