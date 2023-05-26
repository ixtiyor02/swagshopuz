import React from "react";
import Image from "next/image";
import cup from "../assets/kiss-cut.png";

const products = [
  {
    img: cup,
    title: "Black Glossy Mug",
    price: 12,
  },
  {
    img: cup,
    title: "Black Glossy Mug",
    price: 12,
  },
  {
    img: cup,
    title: "Black Glossy Mug",
    price: 12,
  },
  {
    img: cup,
    title: "Black Glossy Mug",
    price: 12,
  },
  {
    img: cup,
    title: "Black Glossy Mug",
    price: 12,
  },
  {
    img: cup,
    title: "Black Glossy Mug",
    price: 12,
  },
  {
    img: cup,
    title: "Black Glossy Mug",
    price: 12,
  },
];

const Products = () => {
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
          {products.map((item, index) => (
            <div className="flex justify-center flex-col">
              <div
                key={index}
                className="h-[269px] w-[269px]  mt-4 group overflow-hidden"
              >
                <Image
                  src={item.img}
                  alt="product"
                  className="rounded-[inherit] group-hover:scale-125 hover:ease-in-out duration-300"
                />
              </div>
              <h3 className="mt-3 text-[12px]">{item.title}</h3>
              <h4 className="mt-3 text-[15px]">${item.price} USD</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
