import React from "react";
import { BsPlayFill, BsPlusCircle } from "react-icons/bs";

const BannerMovie = ({heading, details}) => {
  return (
    <div className="absolute z-20 text-white top-[40%] w-[40%] left-[10%] flex flex-col gap-10">
      <h1 className="text-5xl tracking-wider ">{heading}</h1>
      <p className="font-lato">
        {details}
      </p>
      <div className="flex gap-7 tracking-wider">
        <button className="font-lato flex items-center gap-2 bg-red-700 hover:bg-red-600 duration-300 px-6 py-2 font-semibold rounded-3xl border-2 border-red-500">
          <BsPlayFill className="text-xl" />
          Play
        </button>
        <button className="tracking-wider font-lato flex items-center gap-2 bg-zinc-600 duration-300 hover:bg-zinc-500 px-6 py-2 font-semibold rounded-3xl border-2 border-zinc-500">
          <BsPlusCircle />
          Add to list
        </button>
      </div>
    </div>
  );
};

export default BannerMovie;
