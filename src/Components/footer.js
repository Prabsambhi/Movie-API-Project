import React from "react";
import Logo from "../assets/logo.png";
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-zinc-900  flex flex-col items-center py-12 ">
      <img src={Logo} className="w-40 mb-10" />
      <div className="text-2xl flex gap-5  ">
        <button className="text-zinc-600 hover:text-zinc-500">
          <BsFacebook />
        </button>
        <button className="text-zinc-600 hover:text-zinc-500">
          <BsTwitter />
        </button>
        <button className="text-zinc-600 hover:text-zinc-500">
          <BsYoutube />
        </button>
        <button className="text-zinc-600 hover:text-zinc-500">
          <BsLinkedin />
        </button>
      </div>
      <h1 className="text-sm my-4 text-zinc-600">
        ©Copyright. All Rights Reserved.
      </h1>
    </div>
  );
};

export default Footer;
