import Image from "next/image";
import Plus from "../../public/svg/plus-svgrepo-com (2).svg";
import Minus from "../../public/svg/minus-svgrepo-com.svg";
import { useDispatch } from "react-redux";
import { basketActions } from "../../redux/basket-store";

const BasketCard = ({ _id, model, price, description, imageUrl, quantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center w-full text-2xl select-none sm:flex-row ">
      <Image
        className="object-cover rounded-lg "
        src={imageUrl}
        height={200}
        width={200}
        alt={model + description}
      />
      <div className="flex flex-col items-center gap-0 text-xs rounded-b-lg sm:h-48 sm:rounded-none w-44 sm:w-1/3 sm:gap-2 sm:text-2xl font-abril bg-monako-1 text-monako-5 ">
        <h2>{model}</h2>
        <h3>{price.toLocaleString("en-US")}</h3>
        <p className="hidden w-full px-2 text-xs text-right sm:block sm:text-base font-Yekan">
          {description}
        </p>
        <div className="flex items-center justify-center w-2/3 gap-3 pb-3 mt-auto text-base fill-monako-5">
          <Minus
            className="w-5 h-5 cursor-pointer "
            onClick={() =>
              quantity > 1
                ? dispatch(basketActions.dec(_id))
                : dispatch(basketActions.remove(_id))
            }
          />
          <p>{quantity}</p>
          <Plus
            className="w-5 h-5 cursor-pointer "
            onClick={() => dispatch(basketActions.inc(_id))}
          />
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
