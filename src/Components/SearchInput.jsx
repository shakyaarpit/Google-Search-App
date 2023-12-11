import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";
import { RxCross2 } from "react-icons/rx";
import { useNavigate, useParams } from "react-router-dom";

const SearchInput = () => {
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState(query || "");
  const navigat = useNavigate();

  const searchQueryHandler = (event) => {
    if ((event?.key === "Enter" || event === "searchButton") &&
    searchQuery?.length > 0) {
      navigat(`/${searchQuery}/${1}`);
    }
  };
  return (
    <div
      id="searchBox"
      className="h-[44px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl  hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0"
    >
      <IoIosSearch size={18} color="#9aa0a6" />
      <input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={searchQueryHandler}
        value={searchQuery}
        autoFocus
        className="grow outline-none text-black/[0.87]"
      />
      <div className=" flex items-center gap-3">
        {searchQuery && (
          <RxCross2
            size={24}
            color="#70757a"
            className="cursor-pointer"
            onClick={() => setSearchQuery("")}
          />
        )}
        <img className="h-6 w-6 cursor-pointer" src={MicIcon} alt="" />
        <img className="h-6 w-6 cursor-pointer" src={ImageIcon} alt="" />
        <IoIosSearch className="cursor-pointer" size={22} color="#9aa0a6" onClick={()=> searchQueryHandler("searchButton")} />
      </div>
    </div>
  );
};

export default SearchInput;
