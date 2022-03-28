const app_reducer = (state, action) => {
  if (action.type === "SIDEBAR_TOGGLE") {
    return { ...state, isSidebarOpen: !state.isSidebarOpen };
  }
  if (action.type === "FILTERBAR_TOGGLE") {
    return { ...state, isFilterbarOpen: !state.isFilterbarOpen };
  }
  if (action.type === "GRIDVIEW_TOGGLE") {
    return { ...state, gridView: !state.gridView };
  }
};

export default app_reducer;
