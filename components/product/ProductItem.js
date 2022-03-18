import Image from "next/image";
import { useRouter } from "next/router";

const ProductItem = ({ _id, model, price, description, imageUrl }) => {
  const router = useRouter();

  return (
    <div
      className="flex hover:scale-105 transition-all cursor-pointer snap-center sm:text-base text-xs shadow-md shadow-monako-1 flex-col items-center justify-between  font-abril tracking-widest sm:font-semibold rounded-lg min-w-[100px] h-36 sm:min-w-[150px] sm:h-52 bg-monako-1 text-monako-5"
      onClick={() => router.push("/store/product/" + _id)}
    >
      <Image
        className="object-cover rounded-t-lg "
        src={imageUrl}
        height={150}
        width={150}
        alt={model + description}
      />
      <div className="mb-1 ">
        <h2>{model}</h2>
        <h3>{price.toLocaleString("en-US")}</h3>
      </div>
    </div>
  );
};

export default ProductItem;
