"use client";
import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import { Product, fetchProducts } from "../services/productAPI";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Banner />
      <Products products={products} />
    </div>
  );
};

export default Home;
