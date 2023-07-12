export const FilterData = (obj, text) => {
  console.log(obj);
  const searchedItem = obj?.filter((restaurants) => {
    return restaurants?.data?.name
      ?.toLowerCase()
      ?.includes(text?.toLowerCase());
  });
  console.log(searchedItem);
  return searchedItem;
};
