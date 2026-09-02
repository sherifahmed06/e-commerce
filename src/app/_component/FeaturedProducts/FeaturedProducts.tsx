import { getAllProducts } from "@/src/api/services/productApi";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";

export default async function FeaturedProducts() {
  // call api
  const data = await getAllProducts();

  return (
    <div>
      <h2 className="text-2xl font-bold text-black border-l-4 border-l-green-600 my-5 px-4">
        Featured <span className="text-green-600">Prodcuts</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
        {data.map((product) => {
          return <ProductCard product={product} key={product._id} />;
        })}
      </div>
    </div>
  );
}
