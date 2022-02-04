import { Paper } from "@mui/material";
import SearchItem from "./SearchItem";

function SearchDropdown({ styles,searchResult,query }) {
  return (
    <Paper elevation={5} className={styles.searchDropdown}>
      {searchResult.map(item => <SearchItem key={item.id} item={item} query={query} styles={styles}/>)}
    </Paper>
  );
}

export default SearchDropdown;
