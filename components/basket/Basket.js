import { useSelector } from "react-redux";
import BasketCard from "./BasketCard";

const Basket = () => {
  const basket = useSelector((state) => state.basket);
  console.log(basket);

  return (
    <div className="flex flex-col min-h-screen gap-5 pt-20 pb-5 bg-monako-2">
      {basket.map((product) => (
        <BasketCard key={product._id} {...product} />
      ))}
    </div>
  );
};

export default Basket;
