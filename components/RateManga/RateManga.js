import Rating from "@mui/material/Rating";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rateManga } from "../../api/users";

function RateManga({ manga }) {
  const [rating, setRating] = useState(manga.rating);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {}, [rating]);

  const ratingChangeHandler = async (event, ratingValue) => {
    if (user) {
      try {
        const response = await rateManga(manga.id, ratingValue, user.jwt);
        setRating(response);
      } catch (e) {
        console.log(e.request);
        console.log(e.response);
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
