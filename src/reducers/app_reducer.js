const app_reducer = (state, action) => {
  if (action.type === "SIDEBAR_TOGGLE") {
    return { ...state, isSidebarOpen: !state.isSidebarOpen };
  }
  if (action.type === "FILTERBAR_TOGGLE") {
    return { ...state, isFilterbarOpen: !state.isFilterbarOpen };
  }
};

export default app_reducer;
