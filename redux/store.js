import { configureStore } from "@reduxjs/toolkit";

import basketReducer from "./basket-store";

const store = configureStore({
  reducer: { basket: basketReducer },
});

export default store;
