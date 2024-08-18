import { createSlice } from "@reduxjs/toolkit";
import carData from "../carData.json";
import allBrands from "../allBrands.json";
import mainCarData from "../main.json";
import powerTrain from "../powerTrain.json";
import FeaturedCarsData from "../featuredCars.json";

const initialState = {
  mainArray: mainCarData,
  FeaturedCarsData: FeaturedCarsData,
  powerTrainArray: powerTrain,
  carData: carData,
  allBrands: allBrands,

  compareDataOne: {},
  compareDataTwo: {},
  compareInputOne: [],
  compareInputTwo: [],
  carVarientType: [],
};

const Slices = createSlice({
  name: "car",
  initialState: initialState,
  reducers: {
    updateDataOne(state, action) {
      state.compareDataOne = action.payload;
    },
    deleteDataOne(state, action) {
      state.compareDataOne = action.payload;
    },

    updateDataTwo(state, action) {
      state.compareDataTwo = action.payload;
    },
    deleteDataTwo(state, action) {
      state.compareDataTwo = action.payload;
    },
    updatecompareInputOne(state, action) {
      state.compareInputOne = action.payload;
    },
    updatecompareInputTwo(state, action) {
      state.compareInputTwo = action.payload;
    },
    updatecarVarientType(state, action) {
      state.carVarientType = action.payload;
    },
  },
});

export const {
  updatecompOne,
  updateDataOne,
  deleteDataOne,
  updateDataTwo,
  deleteDataTwo,
  updatecompareInputOne,
  updatecompareInputTwo,
  updatecarVarientType,
} = Slices.actions;
export default Slices.reducer;
