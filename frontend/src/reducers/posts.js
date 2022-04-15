export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return posts;
    case "CREATE":
      return posts;
    case "ADD_POST":
      return [
        ...posts,
        {
          id: action.id,
          title: action.title,
          body: action.body,
          userId: action.userId,
        },
      ];
    case "DELETE_POST":
      return posts.filter((post) => post.id !== action.id);
    default:
      return posts;
  }
};
