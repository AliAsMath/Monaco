import { useDispatch } from "react-redux";
import { useEffect } from "react";
import fetchBasketThunk from "./../../redux/thunk-fetchBasket";

const Basket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("fetching basket");
    dispatch(fetchBasketThunk());
  });

  return <div className=" bg-monako-white"></div>;
};

export default Basket;
