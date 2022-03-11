// import DB from "./../../util/database";
import ProductList from "../../components/product/ProductList";

const data = [
  {
    model: "HOBLET",
    price: 2000000,
    description: "ساخت سوئیس",
    imageUrl: "/image/watch/rolex.jpg",
  },
  {
    model: "HOBLET",
    price: 2000000,
    description: "ساخت سوئیس",
    imageUrl: "/image/watch/rolex.jpg",
  },
  {
    model: "HOBLET",
    price: 2000000,
    description: "ساخت سوئیس",
    imageUrl: "/image/watch/rolex.jpg",
  },
  {
    model: "HOBLET",
    price: 2000000,
    description: "ساخت سوئیس",
    imageUrl: "/image/watch/rolex.jpg",
  },
  {
    model: "HOBLET",
    price: 2000000,
    description: "ساخت سوئیس",
    imageUrl: "/image/watch/rolex.jpg",
  },
  {
    model: "HOBLET",
    price: 2000000,
    description: "ساخت سوئیس",
    imageUrl: "/image/watch/rolex.jpg",
  },
  {
    model: "HOBLET",
    price: 2000000,
    description: "ساخت سوئیس",
    imageUrl: "/image/watch/rolex.jpg",
  },
  {
    model: "HOBLET",
    price: 2000000,
    description: "ساخت سوئیس",
    imageUrl: "/image/watch/rolex.jpg",
  },
  {
    model: "HOBLET",
    price: 2000000,
    description: "ساخت سوئیس",
    imageUrl: "/image/watch/rolex.jpg",
  },
  {
    model: "HOBLET",
    price: 2000000,
    description: "ساخت سوئیس",
    imageUrl: "/image/watch/rolex.jpg",
  },
];

const storePage = () => {
  return (
    <div
      dir="rtl"
      className="flex flex-col items-center justify-between w-screen min-h-screen p-3  pt-16 gap-7 sm:gap-12 bg-monako-2"
    >
      <ProductList name="مردانه" products={data} />
      <ProductList name="زنانه" products={data} />
      <ProductList name="بچه‌گانه" products={data} />
      <ProductList name="اسپرت" products={data} />
    </div>
  );
};

export default storePage;

// {products.map((product) => (
//   <div key={product._id} className="p-3 m-3 bg-orange-500">
//     <h1>{product.model}</h1>
//     <h1>{product.price}</h1>
//     <button onClick={() => deleteHandler(product._id)}>delete</button>
//   </div>
// ))}

// const deleteHandler = async (id) => {
//   const productId = JSON.stringify({ id: id });
//   const request = await fetch("/api/product/delete", {
//     method: "POST",
//     body: productId,
//     headers: {
//       "content-Type": "application/json",
//     },
//   });
//   const message = await request.json();
//   console.log(message);
// };

// export async function getStaticProps() {
//   const db = new DB();
//   await db.connect("Monako");
//   const data = await db.fetchAllData("products");
//   return {
//     props: {
//       products: data,
//     },
//     revalidate: 10,
//   };
// }
