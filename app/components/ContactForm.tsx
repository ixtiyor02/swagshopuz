import React from "react";

const ContactForm = () => {
  return (
    <div className="flex justify-center flex-col my-9 px-[312px]">
      <h1 className="text-[52px] leading-[67.6px] tracking-[0.6px] text-[#121212]">
        Contact
      </h1>
      <div className="flex justify-center items-center flex-col my-9 pt-9">
        <div className="flex justify-between w-full items-center">
          <input
            type="text"
            placeholder="Name"
            className="w-[351px] h-11 border-solid border-[1px] border-[gray] pl-3"
          />
          <input
            type="email"
            placeholder="Email *"
            className="w-[351px] h-11 border-solid border-[1px] border-[gray]  pl-3"
          />
        </div>
        <input
          type="number"
          placeholder="Phone number"
          className="w-[724px] h-11 border-solid border-[1px] border-[gray] mt-5 pl-3"
        />
        <input
          type="text"
          placeholder="Comment"
          className="w-[724px] h-[100px] border-solid border-[1px] border-[gray] mt-5 pl-3"
        />
      </div>
      <button className="h-11 w-[120px] border-solid border-[1px] bg-[#121212] text-[#fff] text-[14px] border-[#121212]">
        Send
      </button>
    </div>
  );
};

export default ContactForm;
