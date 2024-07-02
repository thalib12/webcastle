import axios from "axios";
import BuyButton from "../../../../components/BuyButton";
import Image from "next/image";


const fetchProduct = async (id: any) => {
  const response = await axios.get(`https://dummyjson.com/products/${id}`);
  return response.data;
};

export default async function ProductDetailPage({ params }: any) {
  const product = await fetchProduct(params.id);

  return (
    <div className="product-details">
      <div className="flex">
        <div style={{ width: "50%" }}  className="product-preview">
          <div className="product-preview-cntr">
          <Image src={product.thumbnail} alt={product.title} width={300} height={300}/>
          </div>
         <BuyButton/>
        </div>
        <div style={{ width: "50%", padding: "30px" }}>
          <h1>
            {product.title}{" "}
            <span className="product-price">({product.category})</span>
          </h1>
          <p className="product-price"><span className="detail-text"> {product.availabilityStatus}</span> </p>

          <p className="product-price">Price: ${product.price}</p>

          <p>{product.description}</p>
          <p className="product-price">Brand: <span>{product.brand}</span></p>
          <p className="product-price">Warranty:<span className="detail-text"> {product.warrantyInformation}</span> </p>
          <p className="product-price">Delivery:<span className="detail-text"> {product.shippingInformation}</span> </p>
          <p className="product-price">Dimensions: <span>{product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth}</span></p>
         
          <p className="product-price"><span className="detail-text"> {product.returnPolicy}</span> </p>


        </div>
      </div>
    </div>
  );
}
