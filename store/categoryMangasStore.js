import { createStore } from "redux";

const initialState = {
  orderBy: "",
  page: 0,
  startingLetter: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ORDER_BY":
      return { ...state, orderBy: action.orderBy };
    case "SET_PAGE":
      console.log("CHANGE_PAGE to" + action.page);
      return { ...state, page: action.page };
    case "SET_STARTING_LETTER":
      console.log(`SETTING LETTER TO :${action.startingLetter}`)
      return { ...state, startingLetter: action.startingLetter };

    default:
      return {
        ...state,
      };
  }
};

const store = createStore(rootReducer);

export default store;
