"use client";
import React, { useState } from "react";
import RegisterUser from "../../../components/RegisterUser";

const Register = () => {
  return (
    <div className="flex justify-center items-center flex-col pt-[60px] pb-[90px]">
      <h1 className="text-[40px] leading-[52px] tracking-[0.6px] text-[#121212]">
        Create account
      </h1>
      <RegisterUser />
    </div>
  );
};

export default Register;
