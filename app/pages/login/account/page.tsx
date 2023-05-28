import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center flex-col pt-[60px] pb-[90px]">
      <h1 className="text-[40px] leading-[52px] tracking-[0.6px] text-[#121212]">
        Login
      </h1>
      <div className="flex justify-center flex-col mt-10">
        <input
          type="email"
          placeholder="Email"
          className="border-solid border-[1px] border-[#121212] w-[446px] h-11 pl-3"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border-solid border-[1px] border-[#121212] w-[446px] h-11 pl-3 mt-5"
        />
        <Link href="/pages/login/recover" legacyBehavior>
          <a className="mt-3 text-sm text-[#25d173] opacity-[85%] underline underline-offset-4 hover:opacity-[100%]">
            Forgot your password ?
          </a>
        </Link>
      </div>
      <button className="w-[122px] h-12 px-7 text-[15px] leading-[18px] tracking-[1px] bg-[#121212] text-[#ffffff] mt-10">
        Sign in
      </button>
      <Link href="/pages/login/register" legacyBehavior>
        <a className="mt-4 text-sm text-[#25d173] opacity-[85%] underline underline-offset-4 hover:opacity-[100%]">
          Create account
        </a>
      </Link>
    </div>
  );
};

export default Login;
