import Image from "next/image";
import { useState } from "react";
import mongoConnectedClient from "../../../util/database";
import { ObjectId } from "mongodb";
import Plus from "../../../public/svg/plus-svgrepo-com (2).svg";
import Minus from "../../../public/svg/minus-svgrepo-com.svg";
import Buy from "../../../public/svg/buy-svgrepo-com.svg";
import { useDispatch } from "react-redux";
import { basketActions } from "../../../redux/basket-store";
import store from "../../../redux/store";

const Product = ({ product }) => {
  const { _id, model, price, description, imageUrl } = product;
  const [quantity, setQuantity] = useState(1);

  const dispach = useDispatch();

  const buyHandler = async () => {
    dispach(basketActions.add({ ...product, quantity }));

    const basket = store.getState().basket;
    localStorage.setItem("basket", JSON.stringify(basket));
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen gap-0 pt-20 pb-10 text-2xl select-none sm:flex-row bg-monako-2">
      <div className="sm:w-[400px]  w-10/12 flex justify-center items-end">
        <Image
          className="object-cover rounded-lg "
          src={imageUrl}
          height={400}
          width={400}
          alt={model + description}
        />
      </div>
      <div className="flex flex-col items-center w-9/12 gap-3 sm:max-w-none max-w-[400px] sm:w-1/3 font-abril bg-monako-1 text-monako-5 h-96 ">
        <h2>{model}</h2>
        <h3>{price.toLocaleString("en-US")}</h3>
        <p className="w-full px-2 text-base text-right font-Yekan">
          {description}
        </p>
        <div className="flex items-center w-2/3 gap-3 pb-3 mt-auto fill-monako-5">
          <Minus
            className="w-5 h-5 cursor-pointer "
            onClick={() =>
              setQuantity((prevState) => (prevState > 1 ? prevState - 1 : 1))
            }
          />
          <p>{quantity}</p>
          <Plus
            className="w-5 h-5 cursor-pointer "
            onClick={() => setQuantity((prevState) => prevState + 1)}
          />
          <Buy
            onClick={buyHandler}
            className="w-10 h-10 ml-auto rounded-sm shadow-inner cursor-pointer bg-monako-white shadow-white "
          />
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const productId = context.params.productId;

  let client;
  let product;

  try {
    client = await mongoConnectedClient();
    product = await client
      .db()
      .collection("products")
      .findOne({ _id: new ObjectId(productId) });

    product = { ...product, _id: product._id.toString() };
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }

  return {
    props: { product },
  };
}

export default Product;
