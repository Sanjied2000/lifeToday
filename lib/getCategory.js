export const getCategory = (category) => {
  switch (category.toLowerCase()) {
    case "travel":
      return "Travel";
    case "cooking":
      return "Cooking";
    case "entertainment":
      return "Entertainment";
    case "good_will":
      return "Good will";
    case "sports":
      return "Sports";
    case "technology":
      return "Technology";
    case "memories":
      return "Memories";
    case "qna":
      return "Q&A";
    case "ideas":
      return "Ideas";
    default:
      return " ";
  }
};
