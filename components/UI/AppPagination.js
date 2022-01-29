import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function AppPagination({pages}) {

  const dispatch = useDispatch();
  
  const [page,setPage] = useState(1)

  const pageChangedHandler = (event, value) => {
    dispatch({ type: "SET_PAGE", page: value });
    setPage(value)
  };

  return (
    <Pagination
      count={pages}
      page={page}
      onChange={pageChangedHandler}
      shape="rounded"
    />
  );
}

export default AppPagination;
