import React from "react";

import Phone from "../assets/phone.png";
import Email from "../assets/email.png";
import Twitter from "../assets/twitter.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Youtube from "../assets/youtube.png";

const TopNav = () => {
  return (
    <header className="text-gray-600 body-font bg-[#083830] py-3">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center px-5">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={Phone} alt="phone" className="mr-3" />
          <p className="text-[#BFDB38] text-[12px] mr-10">
            Phone: +253 43 34 34 (Any time 24/7)
          </p>
        </a>
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={Email} alt="email" className="mr-3" />
          <p className="text-[#BFDB38] text-[12px] mr-10">
            Email: contact@stargenerallogistics.com
          </p>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center cursor-pointer"></nav>
        <div className="flex flex-row justify-between w-[150px]">
          <img src={Twitter} alt="twitter" />
          <img src={Facebook} alt="facebook" />
          <img src={Instagram} alt="instagram" />
          <img src={Youtube} alt="youtube" />
        </div>
      </div>
    </header>
  );
};

export default TopNav;
