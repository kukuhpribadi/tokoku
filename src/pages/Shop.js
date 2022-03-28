import React from "react";
import Hero from "../components/Hero";
import { FiList, FiGrid, FiChevronsLeft } from "react-icons/fi";
import { useAppContext } from "../context/app_context";
import SectionFilter from "../components/SectionFilter";
import GridView from "../components/GridView";
import ListView from "../components/ListView";

const Shop = () => {
  const { gridView, filterbarToggle, gridViewToggle } = useAppContext();
  return (
    <div>
      <Hero url="https://images.unsplash.com/photo-1595309849731-f7ce86eda9fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1583&q=80" />
      {/* section */}
      <div className="max-w-[1600px] mx-auto px-3 lg:px-32 mt-5">
        {/* utility */}
        <div className="flex justify-between items-center lg:justify-end">
          <div
            className="flex gap-x-2 items-center border border-black p-1.5 shadow font-bold rounded cursor-pointer lg:hidden hover:bg-black hover:text-white transition-all duration-500"
            onClick={filterbarToggle}
          >
            <div className="text-2xl">
              <FiChevronsLeft />
            </div>
            <div className="uppercase">filter</div>
          </div>
          <div className="flex items-center gap-x-2">
            <div>sort by</div>
            <div>
              <select
                name=""
                id=""
                className="border border-black p-1 rounded outline-none"
              >
                <option value="">name a-z</option>
                <option value="">name z-a</option>
                <option value="">price low-high</option>
                <option value="">price high-low</option>
              </select>
            </div>
            <div
              className="border border-black p-1 text-xl cursor-pointer"
              onClick={gridViewToggle}
            >
              {gridView ? <FiGrid /> : <FiList />}
            </div>
          </div>
        </div>
        {/* end utility */}
        <div className="grid grid-cols-3 gap-10 mt-5">
          {/* filter menu */}
          <div className="hidden lg:block px-10 select-none">
            <SectionFilter />
          </div>
          {/* end filter menu */}
          <div className="col-span-3 lg:col-span-2">
            {/* list products */}
            {gridView ? <GridView /> : <ListView />}
            {/* end list products */}
          </div>
        </div>
      </div>
      {/* end section */}
    </div>
  );
};

export default Shop;
