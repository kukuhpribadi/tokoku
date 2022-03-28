import React from "react";
import { categories } from "../utils/constants";
import { FiChevronDown } from "react-icons/fi";

const SectionFilter = () => {
  return (
    <div>
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

export default SectionFilter;
