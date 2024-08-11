import { configureStore } from "@reduxjs/toolkit";
import slices from "./redux/slice";

const store = configureStore({
  reducer: { car: slices },
});

export default store;
