import React from "react";

import Navbar from "./homePage/navbar";
import Banner from "./homePage/banner";
import FeaturedCars from "./homePage/featuredCars";
import AllBrands from "./allBrands";
import CarChoiceFilter from "./homePage/carChoiceFilter";
import CompareCars from "./homePage/compareCars";
import Footer from "./homePage/footer";
import CompareCarsData from "./homePage/compareCarsData";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <FeaturedCars />
      {/* <AllBrands />
      <CarChoiceFilter />
      <CompareCarsData /> */}
      <Footer />
    </>
  );
};
export default HomePage;
