import axios from "axios";
import ProductCard from "../../../components/Card";

export async function getProducts() {
  const res = await axios.get("https://dummyjson.com/products");
  const products = res.data.products;
  return products;
}

export default async function page() {
  const products = await getProducts();

  return (
    <div>
      <h1 style={{ textAlign: "center" ,marginTop:"30px" }}>All Products</h1>
      <div className="cards-container">
        {products.map((product: any) => (
          <ProductCard product={product} key={product.id}/>
        ))}
      </div>
    </div>
  );
}
