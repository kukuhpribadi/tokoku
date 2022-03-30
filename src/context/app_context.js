import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/app_reducer";
import { useProductsContext } from "./products_context";

const initialState = {
  filtered_products: [],
  isSidebarOpen: false,
  isFilterbarOpen: false,
  gridView: true,
  sort: "default",
};

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOAD_PRODUCTS", payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: "SORT_PRODUCTS", payload: products });
  }, [products, state.sort]);

  const sidebarToggle = () => {
    dispatch({ type: "SIDEBAR_TOGGLE" });
  };

  const filterbarToggle = () => {
    dispatch({ type: "FILTERBAR_TOGGLE" });
  };

  const gridViewToggle = () => {
    dispatch({ type: "GRIDVIEW_TOGGLE" });
  };

  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: "UPDATE_SORT", payload: value });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        sidebarToggle,
        filterbarToggle,
        gridViewToggle,
        updateSort,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
