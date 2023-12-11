import React from "react";
import { QuickLinks } from "../Utils/Constents";
import { Settings } from "../Utils/Constents";

const Footer = () => {
  return (
    <div className="bg-[#f2f2f2]">
      <div className="flex py-[15px] px-[15px] md:px-[30px] border-b border-[#dadce0] ">
        <span className="text-[#70767a] text-[15px] leading-none">India</span>
      </div>
      <div className="flex flex-col md:flex-row justify-between py-3 md:p-0 md:px-[15px]">
        <div className="flex justify-center">
          {QuickLinks.map((menu, index) => (
            <span
              key={index}
              className="text-[#70757a] text-[12px] md:text-[14px] hover:underline  leading-none p-[10px] md:p-[15px]"
            >
              {menu}
            </span>
          ))}
        </div>
        <div className="justify-center">
          {Settings.map((menu, index) => (
            <span
              key={index}
              className="text-[#70757a] text-[12px] md:text-[14px] hover:underline leading-none p-[10px] md:p-[15px]"
            >
              {menu}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
