import Image from "next/image";
import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import Link from "next/link";
import {imageLoader} from '../../../helpers/imageLoader'

function MangaListItem({ m }) {
  return (
    <Link href={`/manga/${m.id}`} replace>
      <Card sx={{ maxWidth: 157,height:300,cursor:'pointer' }}>
        <Image loader={imageLoader} src={m.coverPhoto} height={242} width={157} />
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
