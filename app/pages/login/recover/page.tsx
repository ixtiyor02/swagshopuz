import Link from "next/link";
import React from "react";

const RecoverLogin = () => {
  return (
    <div className="flex justify-center items-center flex-col pt-[60px] pb-[90px]">
      <h1 className="text-[40px] leading-[52px] tracking-[0.6px] text-[#121212]">
        Reset your password
      </h1>
      <p className="text-[16px] leading-[28.8px] tracking-[0.6px] text-[#121212] opacity-[75%] mt-4">
        We will send you an email to reset your password
      </p>
      <input
        type="email"
        placeholder="Email"
        className="border-solid border-[1px] border-[#121212] w-[446px] h-11 pl-3 mt-10"
      />
      <button className="w-[122px] h-12 px-7 text-[15px] leading-[18px] tracking-[1px] bg-[#121212] text-[#ffffff] mt-10">
        Submit
      </button>
      <Link href="/pages/login/account" legacyBehavior>
        <a className="mt-4 text-sm text-[#25d173] opacity-[85%] underline underline-offset-4 hover:opacity-[100%]">
          Cancel
        </a>
      </Link>
    </div>
  );
};

export default RecoverLogin;
