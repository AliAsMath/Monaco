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

    remove(state, action) {
      state.filter((product) => product._id !== action.payload._id);
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
