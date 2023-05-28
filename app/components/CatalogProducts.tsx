"use client";
import Image from "next/image";
import cup from "../assets/kiss-cut.png";
import React, { useEffect, useRef, useState } from "react";

const CatalogProducts = () => {
  //toggle of filter, sort and features
  const [activeAvaby, setActiveAvaby] = useState(false);
  const [activePrice, setActivePrice] = useState(false);
  const [activeFeatr, setActiveFeatr] = useState(false);

  //close the dropdown when clicked outside
  const dropdownRef = useRef<HTMLDivElement>(null!);
  const dropdownPriceRef = useRef<HTMLDivElement>(null!);
  const dropdownFeatureRef = useRef<HTMLDivElement>(null!);

  //close the dropdown when clicked outside (1 problem)
  useEffect(() => {
    let handler = (e: any) => {
      if (!dropdownRef.current.contains(e.target)) {
        setActiveAvaby(false);
        console.log(dropdownRef.current);
      }
    };
    let handlerPrice = (e: any) => {
      if (!dropdownPriceRef.current.contains(e.target)) {
        setActivePrice(false);
        console.log(dropdownPriceRef.current);
      }
    };
    let handlerFeature = (e: any) => {
      if (!dropdownFeatureRef.current.contains(e.target)) {
        setActiveFeatr(false);
        console.log(dropdownFeatureRef.current);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("mousedown", handlerPrice);
    document.addEventListener("mousedown", handlerFeature);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("mousedown", handlerPrice);
      document.removeEventListener("mousedown", handlerFeature);
    };
  }, []);

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

  return (
    <div className="flex justify-center items-center flex-col pb-20">
      <div className="bg-[#f3f3f3] w-full pl-[125px]">
        <h1 className="text-[40px] text-start leading-[52px] tracking-[0.6px] py-[25px] font-normal">
          Products
        </h1>
      </div>
      <div className="flex justify-between items-center w-full px-[125px] pt-9 text-[14px] leading-[21px] tracking-[0.4px] text-[#121212] ">
        <div className="flex gap-4">
          <p className="opacity-[75%]">Filter:</p>

          <div
            onClick={() => setActiveAvaby(!activeAvaby)}
            className="flex relative items-center gap-2 cursor-pointer hover:underline underline-offset-4"
          >
            <p className="opacity-[75%]">Availability</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height={10}
              className={activeAvaby ? "rotate-180" : ""}
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </div>

          <div
            ref={dropdownRef}
            className={
              activeAvaby
                ? "w-[350px] h-36 bg-white absolute bottom-[220px] left-[180px]"
                : "hidden"
            }
          >
            <div className="flex justify-between items-center py-5 px-4 border-solid border-[1px]">
              <p className="text-sm text-[#121212] opacity-[75%]">0 selected</p>
              <p className="text-[#25d173] underline underline-offset-4">
                Reset
              </p>
            </div>
            <div>
              <div className="flex items-center py-[10px] pl-5 gap-3">
                <input type="checkbox" className="h-4 w-4" />
                <p className="text-sm text-[#121212] opacity-[75%]">
                  In stock (1)
                </p>
              </div>
              <div className="flex items-center pl-5 gap-3">
                <input type="checkbox" className="h-4 w-4" />
                <p className="text-sm text-[#121212] opacity-[75%]">
                  In stock (1)
                </p>
              </div>
              <div></div>
            </div>
          </div>

          <div
            onClick={() => setActivePrice(!activePrice)}
            className="flex relative items-center gap-2 cursor-pointer hover:underline underline-offset-4"
          >
            <p className="opacity-[75%]">Price</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height={10}
              className={activePrice ? "rotate-180" : ""}
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </div>

          <div
            ref={dropdownPriceRef}
            className={
              activePrice
                ? "w-[350px] h-36 bg-white absolute bottom-[220px] left-[290px]"
                : "hidden"
            }
          >
            <div className="flex justify-between items-center py-5 px-4 border-solid border-[1px]">
              <p className="text-sm text-[#121212] opacity-[75%]">
                The highest price is $45.50
              </p>
              <p className="text-[#25d173] underline underline-offset-4">
                Reset
              </p>
            </div>
            <div className="flex justify-center items-center gap-9">
              <div className="py-5">
                ${" "}
                <input
                  type="number"
                  className="border-solid border-[1px] w-32 h-11 pl-4 pr-4 outline-none"
                  placeholder="from"
                />
              </div>
              <div className="py-5">
                ${" "}
                <input
                  type="number"
                  className="border-solid border-[1px] w-32 h-11 pl-4 pr-4 outline-none"
                  placeholder="to"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 relative">
          <p className="opacity-[75%]">Sort by:</p>

          <div
            onClick={() => setActiveFeatr(!activeFeatr)}
            className="flex  items-center gap-2 cursor-pointer"
          >
            <p className="opacity-[75%]">Featured</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height={10}
              className={activeFeatr ? "rotate-180" : ""}
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </div>

          <div
            ref={dropdownFeatureRef}
            className={
              activeFeatr
                ? "w-[135px] h-auto bg-white absolute top-[30px] right-[70px] border-solid border-[1px]"
                : "hidden"
            }
          >
            <p className="hover:bg-blue-400 hover:text-white text-xs px-1 py-1">
              Featured
            </p>
            <p className="hover:bg-blue-400 hover:text-white text-xs px-1 py-1">
              Trend
            </p>
            <p className="hover:bg-blue-400 hover:text-white text-xs px-1 py-1">
              Casual
            </p>
            <p className="hover:bg-blue-400 hover:text-white text-xs px-1 py-1">
              Fashion
            </p>
            <p className="hover:bg-blue-400 hover:text-white text-xs px-1 py-1">
              Shirts
            </p>
          </div>
          <div className="flex  items-center gap-2">
            <p className="opacity-[75%]">12 products</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 grid-rows-2 gap-2 mt-3">
        {products.map((item, index) => (
          <div className="flex justify-center flex-col group cursor-pointer">
            <div
              key={index}
              className="h-[213px] w-[213px] mt-4 overflow-hidden"
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
  );
};

export default CatalogProducts;
