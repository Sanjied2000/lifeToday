export const getFilter = (category) => {
  switch (category.toLowerCase()) {
    case "new":
      return "New";
    case "old":
      return "Old";
    case "mview":
      return "Most Viewed";
  }
};
