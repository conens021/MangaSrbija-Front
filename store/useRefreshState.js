import { useDispatch } from "react-redux";

export const useRefreshState = () => {
  const dispatch = useDispatch();

  const refreshState = () => {
    console.log("refreshing state...");
    dispatch({ type: "SET_STARTING_LETTER", startingLetter: "" });
    dispatch({ type: "SET_ORDER_BY", orderBy: "az" });
    dispatch({ type: "SET_PAGE", page: 0 });
  };

  return [refreshState];
};
