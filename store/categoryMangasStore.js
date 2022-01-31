import { createStore } from "redux";

const initialState = {
  orderBy: "",
  page: 0,
  startingLetter: "",
  showLoginModal: false,
  userLogedIn: false,
  user : null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ORDER_BY":
      return { ...state, orderBy: action.orderBy };
    case "SET_PAGE":
      return { ...state, page: action.page };
    case "SET_STARTING_LETTER":
      return { ...state, startingLetter: action.startingLetter };
    case "SHOW_LOGIN_MODAL":
      return { ...state, showLoginModal: true };
    case "CLOSE_LOGIN_MODAL":
      return { ...state, showLoginModal: false };
    case "USER_LOGIN":
      return { ...state, userLogedIn: true };
    case "USER_LOGOUT":
      return { ...state, userLogedIn: false };
    case "SET_USER":
      return{...state,user : action.user}
    default:
      return {
        ...state,
      };
  }
};

const store = createStore(rootReducer);

export default store;
