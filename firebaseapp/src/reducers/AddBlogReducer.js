const initialState = {
  blog: {},
  errors: {},
  isAdding: false
};

export default (state = initialState, action) => {
  const { type, blog, errors } = action;
  switch (type) {
    case "ADD_BLOG_REQUEST":
      return { ...state, isAdding: true };
    case "ADD_BLOG_SUCCESS":
      return { ...state, isAdding: false, blog };
    case "ADD_BLOG_FAILURE":
      return { ...state, isAdding: false, errors };

    default:
      return state;
  }
};
