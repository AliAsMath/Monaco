import { basketActions } from "./basket-store";

const fetchBasketThunk = () => {
  return async function (dispatch) {
    const response = await fetch("/api/basket/fetchAll");
    const data = await response.json();

    if (!response.ok) {
      throw new Error({ message: data.message });
    }

    dispatch(basketActions.set(data.basket));
  };
};

export default fetchBasketThunk;
