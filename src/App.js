import React from "react";

import "./homePage/banner.css";
import "./homePage/fcars.css";
import "./homePage/carChoiceFilter.css";
import "./homePage/allBrands.css";
import HomePage from "./homePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CarBrands from "./carBrands";
import CarDetails from "./carDetails";
import CarItemFilter from "./carItemFilter";
import ComparePage from "./comparePage";
import CompareCarsDataOne from "./compareCarsDataOne";
import CompareCarsDataTwo from "./compareCarsDataTwo";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/carItemFilter/:price"
            element={<CarItemFilter />}
          ></Route>
          <Route path="/cars/:carBrand" element={<CarBrands />}></Route>
          <Route path="/carDetails/:model" element={<CarDetails />}></Route>
          <Route path="/comparePage" element={<ComparePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
