"use client";
import React from "react";
import { Product } from "../services/productAPI";

interface FirstPageProps {
  products: Product[];
}

const Products: React.FC<FirstPageProps> = ({ products }) => {
  const handleNavigate = () => {
    window.location.href = "/pages/products";
  };

  console.log(products);
  return (
    <div className="flex justify-center items-center flex-col pb-20">
      <p className="text-[16px] leading-[28.8px] tracking-[0.6px] text-center mt-10 text-[#121212] opacity-[75%]">
        Welcome to Community driven Aurora SWAG store
      </p>
      <div>
        <h1 className="text-[24px] leading-[31.2px] tracking-[0.6px] text-start mt-7">
          Featured products
        </h1>
        <div className="grid grid-cols-4 grid-rows-2 gap-2 mt-3">
          {products?.map((product: any) => (
            <div
              onClick={handleNavigate}
              key={product.id}
              className="flex justify-center flex-col group cursor-pointer"
            >
              <div className="h-[269px] w-[269px] mt-4 overflow-hidden">
                <img
                  src={product.poster}
                  alt={product.name}
                  className="rounded-[inherit] group-hover:scale-105 hover:ease-in-out duration-300"
                />
              </div>
              <h3 className="mt-3 text-[12px]">{product.name}</h3>
              <h4 className="mt-3 text-[15px]">${product.price} USD</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
