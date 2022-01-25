import { Fragment } from "react";
import { useSelector } from "react-redux";
import Dropdown from "../UI/Dropdown";

function MangaCategorySorting() {

  const sortingValues = [
    { value: "bv", text: "Pregledi", id: 1 },
    { value: "br", text: "Ocena", id: 2 },
    { value: "rda", text: "Datum", id: 3 },
    { value: "rdd", text: "Datum", id: 4 },
    { value: "az", text: "A-Z", id: 5 },
    { value: "za", text: "Z-A", id: 6 },
  ];

  return (
      <Dropdown data={sortingValues} />
  );
}

export default MangaCategorySorting;
