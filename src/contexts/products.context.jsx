/* eslint-disable no-undef */
/* eslint-disable no-unused-labels */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState, useEffect } from "react";

// import { addCollectionAndDocuments } from "../utils/firebase.utils.js";
import { getCategoriesAndDocuments } from "../utils/firebase.utils.js";
import SHOP_DATA from "../shop-data.js";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // calls our getCategoriesAndDocuments
  // async gives us back a promise
  useEffect(() => {
    // first we define this function
    const getCategoriesMap = async () => {
      const dog_shit = await getCategoriesAndDocuments();
      console.log(dog_shit)
    }

    // then we run the function
    getCategoriesMap();
  }, []);

  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

// notes:

// used useEffect once just to get the shop-data.js file data into the database
// next step: pull data down into app

// useEffect(() => {
//   addCollectionAndDocuments("categories", SHOP_DATA);
// }, []);
