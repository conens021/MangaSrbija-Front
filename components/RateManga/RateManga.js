import Rating from "@mui/material/Rating";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { rateManga } from "../../api/users";

function RateManga({ manga }) {
  const cookies = new Cookies();
  const [rating, setRating] = useState(manga.rating);
  const userLogedIn = useSelector((state) => state.userLogedIn);
  const dispatch = useDispatch();

  useEffect(() => {}, [rating]);

  const ratingChangeHandler = async (event, ratingValue) => {
    if (userLogedIn) {
      //ratemanga
      const user = cookies.get("user");
      if (user) {
        try {
          const response = await rateManga(manga.id, ratingValue, user.jwt);
          setRating(response)
        } catch (e) {
          console.log(e.request)
          console.log(e.response)
        }
      }
    } else {
      dispatch({ type: "SHOW_LOGIN_MODAL" });
    }
  };

  return (
    <Rating
      name="simple-controlled"
      precision={0.5}
      value={rating}
      onChange={ratingChangeHandler}
    />
  );
}

export default RateManga;
