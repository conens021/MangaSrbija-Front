import { MenuItem, Select } from "@mui/material";

function PageDropdown() {
  return (
    <Select
      sx={{ width: "150px" }}
      labelId="page-label"
      id="page-select"
      value={10}
      label="Stranica"
      autoWidth={true}
      onChange={() => {
        console.log();
      }}
    >
      <MenuItem value={10}>Strana 1</MenuItem>
      <MenuItem value={20}>Strana 2</MenuItem>
      <MenuItem value={30}>Strana 3</MenuItem>
    </Select>
  );
}

export default PageDropdown;
