import React, { useEffect, useRef } from "react";
import { useAppContext } from "../context/app_context";
import { categories } from "../utils/constants";
import { FiChevronDown } from "react-icons/fi";

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
      {/* Category */}
      <div>
        {/* title */}
        <div className="flex justify-between items-center uppercase font-semibold">
          <div>Categories</div>
          <div>
            <FiChevronDown />
          </div>
        </div>
        {/* end title */}
        <div className="mt-3">
          {categories.map((category, index) => {
            return (
              <div
                className="py-2 border-b border-gray-400 capitalize"
                key={index}
              >
                {category}
              </div>
            );
          })}
        </div>
      </div>
      {/* end category */}
      {/* Pricing */}
      <div>
        {/* title */}
        <div className="flex justify-between items-center uppercase font-semibold mt-5">
          <div>Price</div>
          <div>
            <FiChevronDown />
          </div>
        </div>
        {/* end title */}
        <div className="mt-3">price</div>
      </div>
      {/* end pricing */}
    </div>
  );
};

export default FilterBar;
