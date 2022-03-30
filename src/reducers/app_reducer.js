const app_reducer = (state, action) => {
  if (action.type === "LOAD_PRODUCTS") {
    return {
      ...state,
      filtered_products: [...action.payload],
    };
  }
  if (action.type === "SIDEBAR_TOGGLE") {
    return { ...state, isSidebarOpen: !state.isSidebarOpen };
  }
  if (action.type === "FILTERBAR_TOGGLE") {
    return { ...state, isFilterbarOpen: !state.isFilterbarOpen };
  }
  if (action.type === "GRIDVIEW_TOGGLE") {
    return { ...state, gridView: !state.gridView };
  }
  if (action.type === "UPDATE_SORT") {
    return { ...state, sort: action.payload };
  }
  if (action.type === "SORT_PRODUCTS") {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];
    if (sort === "default") {
      tempProducts = action.payload;
    }
    if (sort === "name-a") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === "name-z") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    if (sort === "price-low") {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-high") {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }
    return { ...state, filtered_products: tempProducts };
  }
};

export default app_reducer;
