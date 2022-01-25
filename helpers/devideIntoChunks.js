export const devideIntoChunks = (chunk, items) => {
  
    const tempSliders = [];

  if (items.length <= chunk) {
    tempSliders.push(items);
  } else {
    let i, j;
    for (i = 0, j = items.length; i < j; i += chunk) {
      const chunkData = items.slice(i, i + chunk);
      tempSliders.push(chunkData);
    }
  }
  return tempSliders
};
