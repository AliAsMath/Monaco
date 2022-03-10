import DB from "./../../util/database";

const storePage = ({ products }) => {
  const deleteHandler = async (id) => {
    const productId = JSON.stringify({ id: id });
    const request = await fetch("/api/product/delete", {
      method: "POST",
      body: productId,
      headers: {
        "content-Type": "application/json",
      },
    });
    const message = await request.json();
    console.log(message);
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      {products.map((product) => (
        <div key={product._id} className="p-3 m-3 bg-orange-500">
          <h1>{product.model}</h1>
          <h1>{product.price}</h1>
          <button onClick={() => deleteHandler(product._id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const db = new DB();
  await db.connect("Monako");
  const data = await db.fetchAllData("products");
  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
}

export default storePage;

{
  /* <form
      className="flex items-center justify-center w-screen h-screen"
      onSubmit={submitHanler}
    >
      <input name="model"></input>
      <input name="price"></input>
      <button type="submit">click</button>
    </form> 
  
  const submitHanler = async (e) => {
    e.preventDefault();
    console.log("send request");
    const p = await fetch("api/products/fetchAll");
    console.log(p.message);
  };
  */
}
