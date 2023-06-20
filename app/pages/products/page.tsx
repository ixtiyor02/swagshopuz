"use client";
import Image from "next/image";
import { Collapse } from "antd";
import mug from "../../assets/mug.jpg";
import React, { useState } from "react";

const Products = () => {
  //quantity of the product you choose
  const [count, setCount] = useState(1);
  const [active, setActive] = useState(false);

  //increment, plus btn
  const countIncrement = () => {
    setCount(count + 1);
  };

  //decrement, minus btn
  const countDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      count;
    }
  };

  const { Panel } = Collapse;

  const text = (
    <p style={{ paddingLeft: 24 }}>
      A dog is a type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many households across
      the world.
    </p>
  );

  return (
    <div className="flex justify-between px-[133px] py-10">
      <Image src={mug} alt="mug" className="h-[717px] w-[715px]" />
      <div className="flex flex-col pl-10 relative">
        <p className="text-[10px] leading-3 tracking-[1.3px] text-[#121212] opacity-[75%]">
          AURORA-SWAG-STORE
        </p>
        <h1 className="text-[40px] leading-[52px] tracking-[0.6px] text-[#121212]">
          {}
        </h1>
        <h4 className="mt-4 text-lg tracking-[1.3px] text-[#121212]">
          {/* ${product.price} USD */}
        </h4>
        <p className="mt-4 text-[13px] leading-[19.5px] tracking-[0.4px] text-[#121212] opacity-[75%]">
          Pay in 4 interest-free installments for orders over $50.00{" "}
          <a className="underline underline-offset-2">Learn more</a>
        </p>
        <div className="mt-4">
          <p className="text-[13px] leading-[19.5px] tracking-[0.4px] text-[#121212] opacity-[75%]">
            Quantity
          </p>
          <div className="flex justify-evenly items-center h-12 w-36 text-[#121212] border-solid border-[grey] border-[1px]">
            <button
              onClick={countDecrement}
              className="text-[18px] leading-normal tracking-normal text-center text-[#121212] opacity-[75%] cursor-pointer"
            >
              -
            </button>
            <p className="text-[18px] leading-normal tracking-normal text-center text-[#121212] opacity-[75%] cursor-pointer">
              {count}
            </p>
            <button
              onClick={countIncrement}
              className="text-[18px] leading-normal tracking-normal text-center text-[#121212] opacity-[75%] cursor-pointer"
            >
              +
            </button>
          </div>
        </div>
        <button
          onClick={() => setActive(!active)}
          className="mt-6 h-12 w-[345px] text-sm tracking-[1px] text-center text-[#25d173] border-solid border-[1px] border-[#25d173] border-opacity-[75%] hover:border-opacity-[100%]"
        >
          Add to cart
        </button>

        <div
          className={`${
            active
              ? "absolute top-[-40px] right-0 border-t border-solid border-[grey] border-opacity-10 flex items-center flex-col h-[368px] w-[350px] bg-[#121212] text-[#ffffff]"
              : "hidden"
          }`}
        >
          <div className="flex justify-evenly items-center w-full mt-7">
            <div className="flex justify-center items-center gap-2">
              <svg
                height={10}
                fill="#25d173"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
              <p className="text-sm text-start tracking-[0.4px]">
                Item added to your cart
              </p>
            </div>
            <svg
              height={17}
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="cursor-pointer"
              onClick={() => setActive(false)}
            >
              <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
            </svg>
          </div>
          <div className="flex justify-center mt-10 gap-4">
            <Image src={mug} alt="mug" className="h-[72px] w-[72px]" />
            <h4 className="text-[15px] leading-[19.5px] text-start tracking-[0.6px]">
              Black Glossy Mug
            </h4>
          </div>
          <button className="w-[296px] h-12 border-solid border-[1px] border-[#fff] mt-10 text-[15px] text-center leading-[18px] tracking-[1px]">
            View my cart ({count})
          </button>
          <button className="w-[296px] h-12 bg-white text-[#121212] mt-[10px] text-[15px] text-center leading-[18px] tracking-[1px]">
            Check out
          </button>
          <h1 className="mt-[10px] underline underline-offset-4 text-[15px] text-center leading-[18px] tracking-[1px]">
            Continue shopping
          </h1>
        </div>
        <button className="mt-3 h-12 w-[345px] text-sm tracking-[1px] text-center border-solid border-[1px] bg-[#5a31f4] text-[#ffffff]">
          Buy with Shop
        </button>
        <div className="text-base tracking-[0.6px] text-[#121212] opacity-[75%]">
          {/* <p className="mt-6">{product.body}</p> */}
          <p className="mt-9">
            • Ceramic <br />
            • 11oz mug dimensions: height - 3.85" (9.8 cm), diameter - 3.35"
            (8.5 cm) <br />
            • 15oz mug dimensions: height - 4.7" (12 cm), diameter 3.35" (8.5
            cm) <br />
            • Glossy finish <br />• Microwave and dishwasher safe
          </p>
          <p className="mt-9">
            Important: This product is available in US only. If your shipping
            address is outside this region, please choose a different product.
          </p>
          <p className="mt-9">
            This product is made especially for you as soon as you place an
            order, which is why it takes us a bit longer to deliver it to you.
            Making products on demand instead of in bulk helps reduce
            overproduction, so thank you for making thoughtful purchasing
            decisions!
          </p>
        </div>
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          className="bg-white mt-8"
        >
          <Panel header="Materials" key="1" className="border-t">
            {text}
          </Panel>
          <Panel header="Shipping & Returns" key="2">
            {text}
          </Panel>
          <Panel header="Dimensions" key="3">
            {text}
          </Panel>
          <Panel header="Care instructions" key="4" className="border-b">
            {text}
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default Products;
