import ProductCard from "../../components/product/ProductCard";
import mongoConnectedClient from "../../util/database";

const GroupProduct = ({ products }) => {
  return (
    <div className="pt-[52px]  bg-monako-2">
      <div className="fixed z-10 w-screen">
        <h1 className="w-11/12 pt-2 mx-auto mb-2 text-xl text-right border-b-2 bg-monako-2 text-monako-4 border-monako-4 font-Yekan">
          {products && products[0].group}
        </h1>
      </div>
      <div className="flex justify-center w-screen p-12 ">
        <div className="flex flex-wrap justify-center w-11/12 gap-10">
          {products &&
            products.map((product) => (
              <ProductCard key={product._id} {...product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  const groupProductName = context.params.productGroup;

  let client;
  let products;

  try {
    client = await mongoConnectedClient();
    const data = await client
      .db()
      .collection("products")
      .find({ group: groupProductName })
      .toArray();

    products = data.map((product) => {
      const _id = product._id.toString();
      return { ...product, _id };
    });
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }

  return {
    props: { products },
    revalidate: 120,
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { productGroup: "man" } }],
    fallback: true,
  };
}

export default GroupProduct;
