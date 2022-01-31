import { Box } from "@mui/material";
import Image from "next/image";
import {imageLoader} from '../../helpers/imageLoader'

function ChapterPhotoList({chapterPhotos}) {
  return (
    <Box style={{padding:'2em 1em '}}>
      {chapterPhotos.map((cp) => (
        <Image
          loader={imageLoader}
          src={cp.path}
          height={cp.height}
          width={cp.width}
          layout="responsive"
        />
      ))}
    </Box>
  );
}

export default ChapterPhotoList;
