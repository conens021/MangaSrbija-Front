import { Chip } from "@mui/material";
import { Fragment } from "react";

const handleClick = () => {};

function CategoryTags({ categories, selected }) {
  return (
    <Fragment>
      {categories.map((category) => {
        return category.name === selected ? (
          <Chip
            key={category.id}
            sx={{ margin: "0 2px 5px" }}
            label={category.name}
            color="secondary"
            onClick={handleClick}
          />
        ) : (
          <Chip
            key={category.id}
            sx={{ margin: "0 2px 5px" }}
            label={category.name}
            color="primary"
            onClick={handleClick}
          />
        );
      })}
    </Fragment>
  );
}

export default CategoryTags;
