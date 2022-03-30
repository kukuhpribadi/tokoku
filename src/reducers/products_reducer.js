const products_reducer = (state, action) => {
  if (action.type === "GET_PRODUCTS_SUCCESS") {
    return {
      ...state,
      products: action.payload,
    };
  }
};

export default products_reducer;
