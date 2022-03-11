import Image from "next/image";

const ProductItem = ({ model, price, description, imageUrl }) => {
  return (
    <div className="flex sm:text-base text-xs shadow-md shadow-monako-1 flex-col items-center justify-between  font-abril tracking-widest sm:font-semibold rounded-lg min-w-[100px] h-36 sm:min-w-[150px] sm:h-52 bg-monako-1 text-monako-5">
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
