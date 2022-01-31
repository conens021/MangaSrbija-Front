import { FormControl, InputLabel, ListItemText, MenuItem, Select } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function ChapterDropdown({ mangaChapters, chapter }) {
  const [chapterValue, setChapterValue] = useState(chapter.id);
  const router = useRouter();

  useEffect(() => {
    if (chapterValue != chapter.id) {
      router.push(`/poglavlje/${chapterValue}`);
    }
  }, [chapterValue]);

  const chapterChangeHandler = (event) => {
    setChapterValue(event.target.value);
    console.log(event.target.value)
  };

  return (
    <FormControl>

      <InputLabel id="demo-simple-select-label">Poglavlje</InputLabel>

      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={chapterValue}
        label="Poglavlje"
        onChange={chapterChangeHandler}
        sx={{minWidth:'250px'}}
      >
        {mangaChapters.map((chapter) => (
          <MenuItem  value={chapter.id} sx={{display:'flex'}}>
            <ListItemText primary={chapter.name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default ChapterDropdown;
