/* eslint-disable no-undef */
/* eslint-disable no-unused-labels */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState, useEffect } from "react";

// import { addCollectionAndDocuments } from "../utils/firebase.utils.js";
import { getCategoriesAndDocuments } from "../utils/firebase.utils.js";
import SHOP_DATA from "../shop-data.js";

export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const dogShit = await getCategoriesAndDocuments();
      console.log(dogShit)
      setCategories(dogShit);
    };

    getCategoriesMap();
  }, []);

  const value = { categories };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

// notes:

// used useEffect once just to get the shop-data.js file data into the database
// next step: pull data down into app

// useEffect(() => {
//   addCollectionAndDocuments("categories", SHOP_DATA);
// }, []);
