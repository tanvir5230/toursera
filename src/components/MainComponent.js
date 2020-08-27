import React from "react";
import Header from "./Header";
import Category from "./CategoryComponent";
import Courses from "./Courses";
import Footer from "./Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <Category />
      <Courses />
      <Footer />
    </div>
  );
};

export default Main;
