import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const Context = createContext();

const ContextApi = (props) => {
  const [searchImage, setSearchImage] = useState(false);

  return (
    <Context.Provider
      value={{
        searchImage,
        setSearchImage,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextApi;
