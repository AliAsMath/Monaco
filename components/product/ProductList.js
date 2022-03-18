import ProductItem from "./ProductItem";
import NextCircle from "./../../public/svg/arrow-circle-left-svgrepo-com.svg";
import { useRouter } from "next/router";

const ProductList = ({ products, name, productGroupName }) => {
  const router = useRouter();

  return (
    <div className="w-[97%]">
      <h1 className="mb-2 text-xl  text-monako-4 border-b-2 border-monako-4 font-Yekan">
        {name}
      </h1>
      <div className="flex w-full gap-5 p-2 snap-x items-center snap-mandatory  bg-green-100 rounded-lg sm:gap-10 overflow-auto  ">
        {products.map((product) => (
          <ProductItem key={product._id} {...product} />
        ))}
        <div className="flex justify-center min-w-[150px]">
          <NextCircle
            className="h-20 cursor-pointer w-20 fill-monako-3"
            onClick={() => router.push("/store/" + productGroupName)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
