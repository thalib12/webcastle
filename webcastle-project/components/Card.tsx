"use client";

import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: any) => (
  <Link href={`/products/${product.id}`}>
    <div className="product-card">
      <Image
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
        width={200}
        height={200}
      />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-price">${product.price}</p>
    </div>
  </Link>
);

export default ProductCard;
