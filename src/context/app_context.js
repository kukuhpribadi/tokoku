import React, { useContext, useReducer } from "react";
import reducer from "../reducers/app_reducer";

const initialState = {
  isSidebarOpen: false,
  isFilterbarOpen: false,
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

  return (
    <AppContext.Provider value={{ ...state, sidebarToggle, filterbarToggle }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
