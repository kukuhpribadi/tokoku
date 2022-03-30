import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { products as url } from "../utils/constants";

const initialState = {
  products: [],
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = (url) => {
    dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: url });
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
