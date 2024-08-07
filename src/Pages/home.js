import React from "react";
import Layout from "../Layout/layout";
import Banner from "../assets/banner.jpg"

const Home = () => {
  return (
    <Layout>
      <div className="">
        <div>
            <img src={Banner} className="opacity-20"/>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
