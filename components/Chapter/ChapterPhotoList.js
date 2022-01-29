import { Box } from "@mui/material";
import Image from "next/image";
import { IMAGES_FOLDER } from "../../api/constants";

function ChapterPhotoList({chapterPhotos}) {
  return (
    <Box >
      {chapterPhotos.map((cp) => (
        <Image
          loader={() => `${IMAGES_FOLDER}/${cp.path}`}
          src={`${IMAGES_FOLDER}/${cp.path}`}
          height={cp.height}
          width={cp.width}
          layout="responsive"
        />
      ))}
    </Box>
  );
}

export default ChapterPhotoList;
