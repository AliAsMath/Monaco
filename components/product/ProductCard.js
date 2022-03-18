import Image from "next/image";
import { useRouter } from "next/router";

const ProductCard = ({ _id, model, price, description, imageUrl }) => {
  const router = useRouter();

  return (
    <div
      className="flex cursor-pointer shadow-md shadow-monako-1 flex-col items-center justify-between  font-abril tracking-widest  rounded-lg  bg-monako-1 text-monako-5"
      onClick={() => router.push("/store/product/" + _id)}
    >
      <Image
        className="object-cover rounded-t-lg "
        src={imageUrl}
        height={300}
        width={300}
        alt={model + description}
      />
      <div className="mb-1 flex flex-col items-center ">
        <h2>{model}</h2>
        <h3>{price.toLocaleString("en-US")}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
