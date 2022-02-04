import { TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { searchMangas } from "../../api/mangas";
import { useOutsideOfElement } from "../../helpers/useOutsideOfElement";
import SearchDropdown from "./SearchDropdown";

function HeaderSearch({ styles }) {
  const [searchResult, setSearchResult] = useState([]);
  const [query, setQuery] = useState("");
  const [searchInputTouched, setSearchinputTouched] = useState(false);

  const elementRef = useRef(null);
  const [outsideOfElement] = useOutsideOfElement(elementRef);

  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", closeSearchDropdown);

    return () => {
      router.events.off("routeChangeComplete", closeSearchDropdown);
    };
  }, []);

  useEffect(() => {
    if (outsideOfElement && searchInputTouched) {
      //close dropdown
      closeSearchDropdown();
    }
  }, [outsideOfElement]);

  const closeSearchDropdown = () => {
    setSearchResult([]);
    setSearchinputTouched(false);
    setQuery("");
  };

  const inputChangeHandler = async (event) => {
    const query = event.target.value;
    if (query.length < 1) {
      setSearchResult([]);
      setQuery(query);
      return;
    }
    try {
      const result = await searchMangas(event.target.value);
      setSearchResult(result);
      setQuery(query);
    } catch (e) {
      console.log(e.request);
      console.log(e.response);
    }
  };

  const searchBarTouchedHandler = () => {
    setSearchinputTouched(true);
  };

  return (
    <div
      className={styles.search}
      style={{ position: "relative" }}
      ref={elementRef}
      onClick={searchBarTouchedHandler}
    >
      <TextField
        type="search"
        size="small"
        sx={{ width: "100%" }}
        onChange={inputChangeHandler}
        placeholder="Pretraži mange"
        value={query}
        aria-autocomplete="both"
        aria-haspopup={false}
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        autoFocus={false}
      />
      {searchResult.length > 0 && (
        <SearchDropdown
          styles={styles}
          query={query}
          searchResult={searchResult}
        />
      )}
    </div>
  );
}

export default HeaderSearch;
