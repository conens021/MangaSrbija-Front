import { Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import { IMAGES_FOLDER } from "../../api/constants";

function MangaMain({ manga }) {
  const src = `${IMAGES_FOLDER}/${manga.coverImage}`;
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1em",
      }}
      elevation={3}
    >
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 3fr" }}>
        <Image src={src} loader={() => src} height = "150px" width = "200px"/>
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "1em" }}>
          <Typography>SUMMARY</Typography>
          <Typography>{manga.summary}</Typography>
          <Box>Genres</Box>
        </Box>
      </Box>
    </Paper>
  );
}

export default MangaMain;
