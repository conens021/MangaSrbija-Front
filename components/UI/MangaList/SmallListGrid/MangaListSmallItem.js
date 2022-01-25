import Image from "next/image";
import { Fragment } from "react";
import { IMAGES_FOLDER } from "../../../../api/constants";

function MangaListSmallItem({ manga }) {
  const src = IMAGES_FOLDER + "/" + manga.coverPhoto;
  return (
    <Fragment>
      <Image loader={() => src} src={src} height={80} width={60} />
      <div>
        <div>{manga.title}</div>
        <div>{manga.summary}</div>

      </div>
    </Fragment>
  );
}

export default MangaListSmallItem;
