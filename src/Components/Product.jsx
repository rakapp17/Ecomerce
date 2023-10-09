import React, { useEffect, useState } from "react";
import Card from "./Card";

function ProductList() {
  const urlProduct = "https://fakestoreapi.com/products";

  const [products, setProduct] = useState([]);

  const getProduct = async () => {
    const response = await fetch(urlProduct);
    const getDataProduct = await response.json();
    setProduct(getDataProduct);
  };

  useEffect(() => {
    getProduct();
  });

  return (
    <div className="container grid grid-cols-2 justify-center mt-12 md:grid-cols-3 lg:grid-cols-4">
      {products.map((produk) => {
        return (
          <Card
            key={produk.id}
            title={produk.title}
            price={produk.price}
            image={produk.image}
          />
        );
      })}
    </div>
  );
}
export default ProductList;
