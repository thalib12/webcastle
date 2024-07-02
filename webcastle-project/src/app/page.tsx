import axios from "axios";
import Link from "next/link";
import ProductCard from "../../components/Card";

export async function getProducts() {
  const res = await axios.get("https://dummyjson.com/products?limit=10");
  const products = res.data.products;
  return products;
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div>
      <h1 style={{ textAlign: "center" ,marginTop:"30px" }}>Featured Products</h1>
      <div className="cards-container">
        {products.map((product: any) => (
          <ProductCard product={product} key={product.id}/>
        ))}
      </div>

      <Link className="view-all-btn" href={"/products"}>View all</Link>
    </div>
  );
}
