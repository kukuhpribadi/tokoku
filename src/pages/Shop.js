import React from "react";
import Hero from "../components/Hero";
import { FiList, FiShoppingCart, FiEye, FiGrid } from "react-icons/fi";
import { products } from "../utils/constants";
import { useAppContext } from "../context/app_context";

const Shop = () => {
  const { filterbarToggle } = useAppContext();
  return (
    <div>
      <Hero url="https://images.unsplash.com/photo-1595309849731-f7ce86eda9fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1583&q=80" />
      {/* section */}
      <div className="px-3 lg:px-32 mt-5">
        {/* utility */}
        <div className="flex justify-between items-center">
          <div
            className="flex gap-x-2 items-center border border-black p-1.5 shadow font-bold rounded"
            onClick={filterbarToggle}
          >
            <div className="text-2xl">
              <FiList />
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
            <div className="border border-black p-1 text-xl">
              <FiGrid />
            </div>
          </div>
        </div>
        {/* end utility */}
        {/* list products */}
        <div className="mt-3 grid grid-cols-2 gap-2">
          {products.map((product) => {
            const { id, name, images, price } = product;
            return (
              <div className="shadow-lg p-3 rounded" key={id}>
                <img
                  src={images[0]}
                  alt={name}
                  className="h-52 w-full object-contain"
                />
                <div className="mt-2 text-xs">{name}</div>
                <div className="mt-2 flex justify-between items-center">
                  <div className="font-semibold">$ {price}</div>
                  <div className="flex gap-x-2 text-xs">
                    <div className="border border-black rounded px-2 py-1">
                      <FiEye />
                    </div>
                    <div className="border border-black rounded px-2 py-1">
                      <FiShoppingCart />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* end list products */}
      </div>
      {/* end section */}
    </div>
  );
};

export default Shop;
