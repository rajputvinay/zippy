import React from "react";
import logo from "./logo.png";

const Footer = () => {
  return (
    <>
      <div className="border border-t-[rgb(0,0,0,0.5)] mt-5"> </div>
      <div className="flex justify-between p-2">
        <div>
          <img className="w-44" src={logo} />
        </div>
        <div className="mt-10">
          <b>©</b> ZIPPY
        </div>
        <div>
          <a className="mt-10" href="">
            Github
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
