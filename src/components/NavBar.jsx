import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Logo from "../assets/logo.png";
import Quote from "../assets/quote.png";
import Global from "../assets/global.png";

const NavBar = () => {
  const [active, setActive] = useState("/");

  useEffect(() => {
    setActive(
      window.location.href.split("/")[
        window.location.href.split("/").length - 1
      ]
    );
  }, [window]);
  return (
    <header className="text-gray-600 body-font p-5">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <Link to="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={Logo} alt="logo" />
            <span
              className="ml-3 text-xl font-bold"
              style={{
                fontSize: 46.35,
              }}
            >
              Logitrix
            </span>
          </a>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
          <Link to="/">
            <a
              className="mr-5"
              style={{
                color: active === "" ? "#BFDB38" : "#041C2F",
              }}
            >
              Home
            </a>
          </Link>
          <Link to="/about">
            <a
              className="mr-5"
              style={{
                color: active === "about" ? "#BFDB38" : "#041C2F",
              }}
            >
              About Us
            </a>
          </Link>
          <Link to="/services">
            <a
              className="mr-5"
              style={{
                color: active === "services" ? "#BFDB38" : "#041C2F",
              }}
            >
              Services
            </a>
          </Link>
          <Link to="/blog">
            <a
              className="mr-5"
              style={{
                color: active === "blog" ? "#BFDB38" : "#041C2F",
              }}
            >
              Blog
            </a>
          </Link>
          <Link to="/contact">
            <a
              className="mr-5"
              style={{
                color: active === "contact" ? "#BFDB38" : "#041C2F",
              }}
            >
              Contact
            </a>
          </Link>
        </nav>
        <img src={Global} alt="global" className="mr-3" />
        <h3 className="mr-10">English</h3>
        <button className="text-[#BFDB38] py-2 px-7 rounded-lg border border-[#BFDB38] mr-10 font-bold">
          Login
        </button>
        <button className="bg-[#083830] py-2 px-7 rounded-lg text-white flex flex-row">
          <img src={Quote} alt="quote" className="mr-3" />
          Get a Quote
        </button>
      </div>
    </header>
  );
};

export default NavBar;
