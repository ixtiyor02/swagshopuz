"use client";
import React, { useState, useEffect } from "react";
import CatalogProducts from "../../components/CatalogProducts";
import { Product, fetchProducts } from "../../services/productAPI";

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <CatalogProducts products={products} />
    </div>
  );
};

export default Catalog;
