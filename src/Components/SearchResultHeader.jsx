import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/logo.png";
import SearchInput from "./SearchInput";
import Profil_icon from "./Profil_Icon";
import { menu } from "../Utils/Constents";
import { Context } from "../Utils/ContextApi";
import { NavLink } from "react-router-dom";

const SearchResultHeader = () => {
  const { setSearchImage } = useContext(Context);

  const [selectedMenu, setSelectedMenu] = useState("All");

  useEffect(() => {
    return () => setSearchImage(false);
  }, []);
  const clickHandler = (menuItem) => {
    let isTypeImage = menuItem.name === "Images";
    setSelectedMenu(menuItem.name);
    setSearchImage(isTypeImage ? true : false);
  };
  return (
    <div className="p-[15px] pb-0 md:pr-5 md:pl-20 md:pt-7 border-b border-[#ebebeb] flex md:block flex-col items-center sticky top-0 bg-white">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center grow">
          <NavLink to="/">
            <img className="w-[92px] mr-10 hidden md:block" src={logo} alt="" />
          </NavLink>
          <SearchInput />
        </div>
        <div className="hidden md:block">
          <Profil_icon />
        </div>
      </div>
      <div className="flex ml-[-12px] mt-3">
        {menu.map((menu, index) => (
          <span
            key={index}
            className={`flex items-center p-3 text-[#5f6368] relative cursor-pointer ${
              selectedMenu === menu.name ? "text-[#1a8cff]" : ""
            }`}
            onClick={() => clickHandler(menu)}
          >
            <span className="hidden md:block mr-2">{menu.icon}</span>
            <span className="text-sm">{menu.name}</span>
            {selectedMenu === menu.name && (
              <span className="h-[3px] w-[calc(100%-20px)] absolute bg-[#1a8cff] bottom-0 left-[10px]" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SearchResultHeader;
