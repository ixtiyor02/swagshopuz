"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo_Swag.png";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between bg-[#121212] text-white h-[93px] px-[75px] py-5">
        <div className="flex justify-center items-center gap-8 pl-[50px]">
          <Image
            src={logo}
            alt="logo"
            className="max-w-[80px] h-auto cursor-pointer"
          />
          <ul className="flex justify-center items-center gap-5 text-[16px] tracking-[0.6px] text-start leading-[28.8px] text-[#ffffff]">
            <Link href="/pages" legacyBehavior>
              <a className="underline underline-offset-[3px] hover:opacity-[100%] opacity-[75%]">
                Home
              </a>
            </Link>
            <Link href="/pages/catalog" legacyBehavior>
              <a className="hover:underline hover:underline-offset-[3px] hover:opacity-[100%] opacity-[75%]">
                Catalog
              </a>
            </Link>
            <Link href="/pages/contact" legacyBehavior>
              <a className="hover:underline hover:underline-offset-[3px] hover:opacity-[100%] opacity-[75%]">
                Contact
              </a>
            </Link>
          </ul>
        </div>
        <div className="flex justify-center items-center pr-[50px] gap-5">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ height: 20 }}
            className="hover:scale-110 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faUser}
            style={{ height: 20 }}
            className="hover:scale-110 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faCartShopping}
            style={{ height: 20 }}
            className="hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
