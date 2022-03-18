import ProductList from "../../components/product/ProductList";
import mongoConnectedClient from "../../util/database";

const StorePage = ({ products }) => {
  return (
    <div
      dir="rtl"
      className="flex flex-col items-center justify-between w-screen min-h-screen p-3  pt-16 gap-7 sm:gap-12 bg-monako-2"
    >
      <ProductList name="مردانه" productGroupName="man" products={products} />
    </div>
  );
};

export async function getStaticProps() {
  let client;
  let products;

  try {
    client = await mongoConnectedClient();
    const data = await client
      .db()
      .collection("products")
      .find()
      .limit(9)
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
    revalidate: 60,
  };
}

export default StorePage;
