import React from "react";
import Layout from "../Layout/layout";
import Banner from "../assets/banner.jpg";
import { BsPlayFill, BsPlusCircle } from "react-icons/bs";

const Home = () => {
  return (
    <Layout>
      <div className="">
        <div className="absolute z-20 text-white top-[40%] w-[40%] left-[10%] flex flex-col gap-10">
          <h1 className="text-5xl tracking-wider">Polar</h1>
          <p>
            Polar is a 2019 neo-noir action thriller film directed by Jonas
            Åkerlund and written by Jayson Rothwell, based on Víctor Santos's
            2013 graphic novel Polar: Came From the Cold. The film stars Mads
            Mikkelsen, Vanessa Hudgens, Katheryn Winnick, and Matt Lucas.
          </p>
          <div className="flex gap-7">
            <button className="flex items-center gap-2 bg-red-700 hover:bg-red-600 duration-300 px-6 py-2 font-semibold rounded-3xl border-2 border-red-500">
            <BsPlayFill className="text-xl"/> 
            Play
            </button>
            <button className="flex items-center gap-2 bg-zinc-600 duration-300 hover:bg-zinc-500 px-6 py-2 font-semibold rounded-3xl border-2 border-zinc-500">
            <BsPlusCircle/>
            Add To List
            </button>
          </div>
        </div>
        <img src={Banner} className="opacity-20" />
      </div>
    </Layout>
  );
};

export default Home;
