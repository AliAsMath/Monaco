import { createSlice } from "@reduxjs/toolkit";

const initialBasketState = [];

const basketSlice = createSlice({
  name: "basket",
  initialState: initialBasketState,
  reducers: {
    add(state, action) {
      const existingProductIndex = state.findIndex(
        (product) => product._id === action.payload._id
      );

      if (existingProductIndex < 0) {
        state.push(action.payload);
        return state;
      }

      state[existingProductIndex].quantity =
        state[existingProductIndex].quantity + action.payload.quantity;
      return state;
    },

    inc(state, action) {
      state.forEach((product) => {
        if (product._id === action.payload) {
          product.quantity++;
        }
      });

      localStorage.setItem("basket", JSON.stringify(state));

      return state;
    },

    dec(state, action) {
      state.forEach((product) => {
        if (product._id === action.payload) product.quantity--;
      });

      localStorage.setItem("basket", JSON.stringify(state));

      return state;
    },

    remove(state, action) {
      state = state.filter((product) => product._id !== action.payload);

      localStorage.setItem("basket", JSON.stringify(state));

      return state;
    },

    set(state, action) {
      state = action.payload;
      return state;
    },

    clear(state) {
      state = [];
      return state;
    },
  },
});

export const basketActions = basketSlice.actions;
export default basketSlice.reducer;
