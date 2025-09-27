export const getImage = (category) => {
  switch (category.toLowerCase()) {
    case "travel":
      return "/Travel.jpg";
    case "cooking":
      return "/Cooking.jpg";
    case "entertainment":
      return "/Entertainment.jpg";
    case "good_will":
      return "/Goodwill.jpg";
    case "sports":
      return "/Sports.jpg";
    case "technology":
      return "/Technology.jpg";
    case "memories":
      return "/Memories.jpg";
    case "qna":
      return "/Q&a.jpg";
    case "ideas":
      return "/Q&a.jpg";
    default:
      return "/dummy.jpg";
  }
};
