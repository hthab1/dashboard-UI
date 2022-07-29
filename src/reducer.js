export const initialState = {
  user: null,
  active: "dashboard",
  sidebarOpen: false,
};

const reducer = (state, action) => {
  //console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_ACTIVE":
      return {
        ...state,
        active: action.active,
      };

    case "SET_SIDEBAR":
      return {
        ...state,
        sidebarOpen: action.sidebarOpen,
      };

    default:
      return state;
  }
};

export default reducer;
