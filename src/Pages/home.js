import React, { useEffect, useState } from "react";
import Layout from "../Layout/layout";
import Banner from "../assets/homeBanner.jpg";
import BannerMovie from "../Components/banner";

const Home = () => {
  
  return (
    <Layout>
      <div className="">
        <BannerMovie
          heading="Polar"
          details="Polar is a 2019 neo-noir action thriller film directed by Jonas Åkerlund
        and written by Jayson Rothwell, based on Víctor Santos's 2013 graphic
        novel Polar: Came From the Cold. The film stars Mads Mikkelsen, Vanessa
        Hudgens, Katheryn Winnick, and Matt Lucas."
        />
        <img src={Banner} className="opacity-20" />
      </div>
    </Layout>
  );
};

export default Home;
