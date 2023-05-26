import React from "react";
import Image from "next/image";
import banner from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="h-[420px]">
      <Image
        src={banner}
        className="h-full w-full object-cover object-[center-center]"
        alt={"banner"}
      />
    </div>
  );
};

export default Banner;
