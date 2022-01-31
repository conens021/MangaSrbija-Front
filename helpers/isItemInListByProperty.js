export const itemInListByProperty = (list, property,value) => {
  return list.some((element) => {
    switch (property) {
      case "id":
        if (element.id === value) {
          console.log('tu je')
          return true;
        }

      default:
        return false;
    }
  });
};
