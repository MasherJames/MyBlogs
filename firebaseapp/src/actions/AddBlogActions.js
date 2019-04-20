const ADD_BLOG_REQUEST = "ADD_BLOG_REQUEST";
const ADD_BLOG_SUCCESS = "ADD_BLOG_SUCCESS";
const ADD_BLOG_FAILURE = "ADD_BLOG_FAILURE";

const addAction = () => ({
  type: ADD_BLOG_REQUEST
});

const addSuccessAction = blog => ({
  type: ADD_BLOG_SUCCESS,
  blog
});

const addFailureAction = errors => ({
  type: ADD_BLOG_FAILURE,
  errors
});

const addBlogAction = blog => (dispatch, getState, { getFirestore }) => {
  dispatch(addAction());
  const fireStore = getFirestore();
  fireStore
    .collection("blogs")
    .add({
      ...blog,
      AuthorId: 12,
      createdAt: new Date()
    })
    .then(() => {
      dispatch(addSuccessAction(blog));
    })
    .catch(err => {
      console.log(err.response);
      dispatch(addFailureAction("Something went wrong"));
    });
};

export default addBlogAction;
