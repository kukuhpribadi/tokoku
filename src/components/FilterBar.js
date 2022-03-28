import React, { useEffect, useRef } from "react";
import { useAppContext } from "../context/app_context";
import SectionFilter from "./SectionFilter";

const FilterBar = () => {
  const { isFilterbarOpen, filterbarToggle } = useAppContext();
  let filterRef = useRef();
  useEffect(() => {
    let checkHandler = (event) => {
      if (isFilterbarOpen) {
        if (!filterRef.current.contains(event.target)) {
          filterbarToggle();
        }
      }
    };
    document.addEventListener("click", checkHandler);
    return () => {
      document.removeEventListener("click", checkHandler);
    };
    // eslint-disable-next-line
  }, [isFilterbarOpen]);
  return (
    <div
      className={`h-screen overflow-auto bg-gray-100 w-72 fixed ${
        isFilterbarOpen ? "left-0" : "-left-96"
      }  z-20 transition-all duration-500 py-5 px-5`}
      ref={filterRef}
    >
      <SectionFilter />
    </div>
  );
};

export default FilterBar;
