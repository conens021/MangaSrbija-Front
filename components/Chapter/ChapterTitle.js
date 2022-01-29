import { Box } from "@mui/material";

function ChapterTitle({manga,chapter}) {
  return (
    <Box>
      <h1>
        {manga.title} {chapter.name}
      </h1>
    </Box>
  );
}

export default ChapterTitle;
