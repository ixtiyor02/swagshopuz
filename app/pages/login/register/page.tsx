import React from "react";

const Register = () => {
  return (
    <div className="flex justify-center items-center flex-col pt-[60px] pb-[90px]">
      <h1 className="text-[40px] leading-[52px] tracking-[0.6px] text-[#121212]">
        Create account
      </h1>
      <div className="mt-10 flex justify-center items-center flex-col">
        <input
          type="text"
          placeholder="First name"
          className="border-solid border-[1px] border-[#121212] w-[446px] h-11 pl-3"
        />
        <input
          type="text"
          placeholder="Last name"
          className="border-solid border-[1px] border-[#121212] w-[446px] h-11 pl-3 mt-5"
        />
        <input
          type="email"
          placeholder="Email"
          className="border-solid border-[1px] border-[#121212] w-[446px] h-11 pl-3 mt-5"
        />
        <input
          type="password"
          placeholder="Password"
          className="border-solid border-[1px] border-[#121212] w-[446px] h-11 pl-3 mt-5"
        />
      </div>
      <button className="w-[122px] h-12 px-7 text-[15px] leading-[18px] tracking-[1px] bg-[#121212] text-[#ffffff] mt-10">
        Create
      </button>
    </div>
  );
};

export default Register;
