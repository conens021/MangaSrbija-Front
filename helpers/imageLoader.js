import {IMAGES_FOLDER} from '../api/constants'

export const imageLoader = ({ src, width, quality }) => {
    return `${IMAGES_FOLDER}/${src}?w=${width}&q=${quality || 75}`;
  };