import { MenuItem } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";

function Dropdown({ data }) {

  const dispatch = useDispatch();

  const valueChangeHandler = (event) => {
    dispatch({ type: "SET_ORDER_BY", orderBy: event.target.value });
  };

  const orderBy = useSelector((state) => state.orderBy);

  return (
    <FormControl sx={{ width: "160px" }} size="small">
      <Select
        defaultValue={orderBy}
        sx={{ fontSize: "14px" }}
        onChange={valueChangeHandler}
        value={orderBy === "" ? "az" : orderBy}
      >
        {data.map((item) => (
          <MenuItem key={item.id} sx={{ fontSize: "14px" }} value={item.value}>
            {item.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Dropdown;
