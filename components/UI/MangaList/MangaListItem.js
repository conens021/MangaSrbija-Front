import { IMAGES_FOLDER } from "../../../api/constants";
import Image from "next/image";
import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import Link from "next/link";

function MangaListItem({ m }) {
  const src = IMAGES_FOLDER + "/" + m.coverPhoto;
  return (
    <Link href={`/manga/${m.id}`} replace>
      <Card sx={{ maxWidth: 157,height:300,cursor:'pointer' }}>
        <Image loader={() => src} src={src} height={242} width={157} />
        <CardContent>
          <Typography gutterBottom variant="h7" component="span">
            {m.title}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

export default MangaListItem;
