import React, { useContext, useReducer } from "react";
import reducer from "../reducers/app_reducer";

const initialState = {
  isSidebarOpen: false,
  isFilterbarOpen: false,
  gridView: true,
};

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const sidebarToggle = () => {
    dispatch({ type: "SIDEBAR_TOGGLE" });
  };

  const filterbarToggle = () => {
    dispatch({ type: "FILTERBAR_TOGGLE" });
  };

  const gridViewToggle = () => {
    dispatch({ type: "GRIDVIEW_TOGGLE" });
  };

  return (
    <AppContext.Provider
      value={{ ...state, sidebarToggle, filterbarToggle, gridViewToggle }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
