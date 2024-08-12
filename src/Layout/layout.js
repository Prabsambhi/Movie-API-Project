import React from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-black ">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
