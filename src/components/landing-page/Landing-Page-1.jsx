import React from "react";
import Footer from "../header-footer/footer";
import Header from "../header-footer/header";
import Page1 from "./pages/page1";

const LandingPage1 = () => {
  return (
    <div className="flex flex-col">
      <div className="header sticky top-0 left-0 w-full z-50 ">
        <Header />
      </div>

      <div className="page-content min-h-[100vh] mt-[8rem]">
        <Page1 />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage1;
