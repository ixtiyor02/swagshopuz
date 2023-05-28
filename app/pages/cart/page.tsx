import React from "react";
import Link from "next/link";
import Image from "next/image";
import cup from "../../assets/kiss-cut.png";

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
];

const Cart = () => {
  return (
    <div className="flex justify-center items-center flex-col pt-[70px] pb-16">
      <h1 className="text-[40px] leading-[52px] text-center tracking-[0.6px]">
        Yout cart is empty
      </h1>
      <Link href="/pages/catalog">
        <button className="mt-[30px] text-sm text-center tracking-[1px] text-[#ffffff] bg-[#121212] w-[195px] h-12">
          Continue shopping
        </button>
      </Link>
      <h4 className="mt-14 text-2xl text-center tracking-[0.6px] text-[#121212]">
        Have an account?
      </h4>
      <p className="mt-2 text-[16px] leading-7 text-center tracking-[1px] text-[#121212] opacity-[75%]">
        <Link href="/pages/login/account" legacyBehavior>
          <a className="text-[16px] leading-7 text-center tracking-[0.6px] text-[#25d173] opacity-[85%] underline underline-offset-4 hover:opacity-[100%]">
            Log in{" "}
          </a>
        </Link>
        to check it faster.
      </p>
      <div>
        <h1 className="text-[24px] leading-[31.2px] tracking-[0.6px] text-start mt-7">
          Featured products
        </h1>
        <div className="grid grid-cols-4 grid-rows-1 gap-2 mt-3">
          {products.map((item, index) => (
            <div className="flex justify-center flex-col group cursor-pointer">
              <div
                key={index}
                className="h-[269px] w-[269px] mt-4 overflow-hidden"
              >
                <Image
                  src={item.img}
                  alt="product"
                  className="rounded-[inherit] group-hover:scale-105 hover:ease-in-out duration-300"
                />
              </div>
              <h3 className="mt-3 text-[12px]">{item.title}</h3>
              <h4 className="mt-3 text-[15px]">${item.price} USD</h4>
            </div>
          ))}
        </div>
      </div>
      <Link href="/pages/catalog">
        <button className="mt-10 text-sm text-center tracking-[1px] text-[#ffffff] bg-[#121212] w-[122px] h-12">
          View all
        </button>
      </Link>
    </div>
  );
};

export default Cart;
