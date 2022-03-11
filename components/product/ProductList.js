import ProductItem from "./ProductItem";

const ProductList = ({ products, name }) => {
  return (
    <div className="w-5/6">
      <h1 className="mb-2 text-xl text-green-300 border-b-2 border-green-300 font-Yekan">
        {name}
      </h1>
      <div className="flex w-full gap-5 p-2 overflow-x-scroll bg-green-300 rounded-lg sm:gap-10 scrollanime ">
        {products.map((product, index) => (
          <ProductItem key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
